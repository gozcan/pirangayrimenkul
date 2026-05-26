/* =========================================================
   Piran Gayrimenkul — Unique animations
   - Hero headline: letter cascade on load
   - Building blueprint: SVG stroke draw-in (signature)
   - Hero stats: number counters (animate on scroll-in)
   - Magnetic hover on primary buttons
   - Marquee: scroll-reactive speed + direction
   - Process timeline: building "lights up" as you scroll
   - Service card icons: stroke draw-in on hover
   ========================================================= */

(function() {
  'use strict';
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  /* ============ 1. Headline letter cascade ============ */
  const headlines = document.querySelectorAll('h1.headline, .hero h1, .page-hero h1');
  headlines.forEach(h1 => splitAndAnimate(h1));

  function splitAndAnimate(root) {
    // For each visible language container, split direct text into words → chars.
    // Words are inline-block + nowrap so they never break mid-word on wrap.
    const langSpans = root.querySelectorAll('[data-tr], [data-en]');
    const targets = langSpans.length ? Array.from(langSpans) : [root];
    let charIdx = 0;
    targets.forEach(container => {
      const leaves = leafSpans(container);
      leaves.forEach(leaf => {
        const text = leaf.textContent;
        if (!text || !text.trim()) return;
        const frag = document.createDocumentFragment();
        // Split into [word, space, word, space, ...]
        const tokens = text.split(/(\s+)/);
        tokens.forEach(tok => {
          if (!tok) return;
          if (/^\s+$/.test(tok)) {
            frag.appendChild(document.createTextNode(tok));
            return;
          }
          const wordSpan = document.createElement('span');
          wordSpan.className = 'piran-word';
          for (let i = 0; i < tok.length; i++) {
            const ch = tok[i];
            const s = document.createElement('span');
            s.className = 'piran-char';
            s.textContent = ch;
            s.style.animationDelay = (charIdx * 22) + 'ms';
            charIdx++;
            wordSpan.appendChild(s);
          }
          frag.appendChild(wordSpan);
        });
        leaf.textContent = '';
        leaf.appendChild(frag);
      });
    });
  }

  function leafSpans(container) {
    // Return spans/strongs that contain only text (no further element children).
    const out = [];
    container.querySelectorAll('*').forEach(el => {
      if (el.children.length === 0 && el.textContent.trim()) out.push(el);
    });
    if (!out.length && container.textContent.trim()) out.push(container);
    return out;
  }

  /* ============ 2. Building blueprint SVG draw-in ============ */
  const bpSvgs = document.querySelectorAll('.bldg-svg-wrap svg, .map-card svg');
  bpSvgs.forEach(svg => {
    const strokables = svg.querySelectorAll('path, line, rect, circle, polyline, polygon');
    // Filter out background rect that fills the whole canvas
    const elements = Array.from(strokables).filter(el => {
      // Skip background dot-grid rect (has fill of url(#dot-grid))
      const fill = el.getAttribute('fill') || '';
      if (fill.startsWith('url(')) return false;
      // Skip pure-fill solid windows (no stroke) — they fade in instead
      return true;
    });

    elements.forEach((el, i) => {
      let length = 0;
      try {
        if (typeof el.getTotalLength === 'function') {
          length = el.getTotalLength();
        }
      } catch (e) {}
      if (!length || length === 0) {
        // Fallback for rect/circle without getTotalLength
        const b = el.getBBox ? el.getBBox() : null;
        if (b) length = 2 * (b.width + b.height);
      }
      if (!length) length = 200;

      const hasStroke = el.getAttribute('stroke') && el.getAttribute('stroke') !== 'none';
      if (hasStroke) {
        el.style.strokeDasharray = length;
        el.style.strokeDashoffset = length;
        el.style.transition = `stroke-dashoffset 1.2s cubic-bezier(.7,0,.3,1) ${i * 18 + 250}ms`;
      } else {
        // For fill-only rects (windows etc.), fade them in
        el.style.opacity = '0';
        el.style.transition = `opacity 0.5s ease ${i * 14 + 600}ms`;
      }
    });

    const triggerDraw = () => {
      requestAnimationFrame(() => {
        elements.forEach(el => {
          el.style.strokeDashoffset = '0';
          el.style.opacity = '1';
        });
      });
    };

    // Trigger when SVG comes into view
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          triggerDraw();
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.2 });
    io.observe(svg);
  });

  /* ============ 3. Number counter on stats ============ */
  const counters = document.querySelectorAll('.hero-stat .n, .why-card .big');
  counters.forEach(el => {
    const raw = el.textContent.trim();
    // Capture pre/post characters (e.g. "142+", "2,860", "0/0", "15YIL")
    const m = raw.match(/^([\d,]+(?:\.\d+)?)(.*)$/);
    if (!m) return;
    const numStr = m[1].replace(/,/g, '');
    const target = parseInt(numStr, 10);
    const suffix = m[2] || '';
    if (isNaN(target) || target < 1) return;
    // Preserve original HTML (with <sup> etc.)
    const originalHTML = el.innerHTML;
    el.dataset.target = target;
    el.dataset.original = originalHTML;
  });

  const counterIO = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting && !e.target.dataset.counted) {
        e.target.dataset.counted = '1';
        animateCounter(e.target);
        counterIO.unobserve(e.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -5% 0px' });
  counters.forEach(c => {
    if (c.dataset.target) {
      // If already visible on load, animate immediately
      const rect = c.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
        c.dataset.counted = '1';
        setTimeout(() => animateCounter(c), 400);
      } else {
        counterIO.observe(c);
      }
    }
  });

  function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const originalHTML = el.dataset.original;
    if (!target) return;
    const duration = Math.min(1600, 600 + target * 0.4);
    const start = performance.now();
    const useComma = /,/.test(el.textContent);
    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = Math.round(target * eased);
      const formatted = useComma ? val.toLocaleString('en-US') : String(val);
      // Replace numeric portion of original HTML
      el.innerHTML = originalHTML.replace(/^([\d,]+)/, formatted);
      if (p < 1) requestAnimationFrame(tick);
      else el.innerHTML = originalHTML;
    };
    requestAnimationFrame(tick);
  }

  /* ============ 4. Magnetic hover on primary CTAs ============ */
  const magnets = document.querySelectorAll('.btn-primary, .btn-accent, .hero-cta .btn, .cta-actions .btn');
  magnets.forEach(btn => {
    let rect = null;
    btn.addEventListener('mouseenter', () => { rect = btn.getBoundingClientRect(); });
    btn.addEventListener('mousemove', (e) => {
      if (!rect) rect = btn.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * 0.18;
      const dy = (e.clientY - cy) * 0.18;
      btn.style.transform = `translate(${dx}px, ${dy}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
      rect = null;
    });
  });

  /* ============ 5. Marquee scroll-reactive speed ============ */
  const marquees = document.querySelectorAll('.marquee');
  if (marquees.length) {
    let lastY = window.scrollY;
    let scrollVel = 0;
    let raf = null;
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      scrollVel = y - lastY;
      lastY = y;
      if (!raf) {
        raf = requestAnimationFrame(decay);
      }
    }, { passive: true });

    function decay() {
      // Apply speed/direction to each marquee track
      marquees.forEach(m => {
        const track = m.querySelector('.marquee-track');
        if (!track) return;
        // Base speed: 38s = standard. Velocity boosts/slows.
        const factor = Math.max(0.2, Math.min(6, 1 + Math.abs(scrollVel) / 18));
        const dir = scrollVel < 0 ? 'reverse' : 'normal';
        track.style.animationDuration = (38 / factor) + 's';
        track.style.animationDirection = dir;
      });
      // Decay velocity
      scrollVel *= 0.9;
      if (Math.abs(scrollVel) > 0.4) {
        raf = requestAnimationFrame(decay);
      } else {
        // Reset to base
        marquees.forEach(m => {
          const track = m.querySelector('.marquee-track');
          if (track) {
            track.style.animationDuration = '';
            track.style.animationDirection = '';
          }
        });
        raf = null;
      }
    }
  }

  /* ============ 6. Process building: floors light up as you scroll ============ */
  // The process section already supports click + auto-play. Augment with a
  // scroll-based "elevator rising" — as the section scrolls into the viewport
  // (50% → 100%), advance through floors automatically.
  const proc = document.querySelector('.process');
  if (proc) {
    const floors = proc.querySelectorAll('.bldg-floor');
    let lastIdx = -1;
    const scrollLink = () => {
      const rect = proc.getBoundingClientRect();
      const vh = window.innerHeight;
      // Section start at 70% of viewport, fully covered at 30%
      const start = vh * 0.7;
      const end = vh * 0.3;
      const top = rect.top;
      if (top > start || rect.bottom < end) return;
      const p = Math.max(0, Math.min(1, (start - top) / (start - end)));
      const idx = Math.min(5, Math.floor(p * 6));
      if (idx !== lastIdx && !proc.dataset.userInteracted) {
        lastIdx = idx;
        const floor = proc.querySelector(`.bldg-floor[data-floor="${idx}"]`);
        if (floor) floor.click();
      }
    };
    let scrollTicking = false;
    window.addEventListener('scroll', () => {
      if (!scrollTicking) {
        scrollTicking = true;
        requestAnimationFrame(() => { scrollLink(); scrollTicking = false; });
      }
    }, { passive: true });
    // Mark interacted when user clicks/navigates manually
    proc.addEventListener('click', (e) => {
      if (e.target.closest('.bldg-floor, [data-proc]')) {
        proc.dataset.userInteracted = '1';
      }
    });
  }

  /* ============ 7. Service card icon strokes draw on hover ============ */
  document.querySelectorAll('.service-card .icon svg').forEach(svg => {
    const strokables = svg.querySelectorAll('path, line, rect, circle, polyline');
    strokables.forEach(el => {
      let len = 0;
      try { len = el.getTotalLength ? el.getTotalLength() : 0; } catch (e) {}
      if (!len) {
        const b = el.getBBox ? el.getBBox() : null;
        if (b) len = 2 * (b.width + b.height);
      }
      if (!len) return;
      el.style.strokeDasharray = len;
      el.style.strokeDashoffset = '0';
      el.style.transition = 'stroke-dashoffset 0.7s cubic-bezier(.7,0,.3,1)';
      el.dataset.len = len;
    });
    const card = svg.closest('.service-card');
    if (!card) return;
    card.addEventListener('mouseenter', () => {
      strokables.forEach((el, i) => {
        const len = el.dataset.len;
        if (!len) return;
        el.style.transitionDelay = (i * 80) + 'ms';
        el.style.strokeDashoffset = len;
        // After a frame, draw back in
        requestAnimationFrame(() => {
          el.style.strokeDashoffset = '0';
        });
      });
    });
  });

  /* ============ 8. Section reveal on scroll (subtle) ============ */
  const revealCandidates = document.querySelectorAll('.sec-head, .service-card, .why-card, .principle-card, .team-card, .cert-card, .faq-item, .svc-row, .contact-card, .map-card');
  revealCandidates.forEach((el, i) => el.classList.add('piran-reveal'));
  if (revealCandidates.length) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
    revealCandidates.forEach(el => io.observe(el));
  }

  /* ============ 9. Scroll progress bar ============ */
  const progress = document.createElement('div');
  progress.className = 'scroll-progress';
  document.body.appendChild(progress);
  function updateProgress() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = max > 0 ? (window.scrollY / max * 100) : 0;
    document.documentElement.style.setProperty('--scroll-pct', pct + '%');
  }
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  /* ============ 10. Hero scroll cue ============ */
  const hero = document.querySelector('.hero');
  if (hero) {
    const cue = document.createElement('a');
    cue.className = 'hero-scroll-cue';
    cue.href = '#services';
    cue.innerHTML = '<span class="cue-label">SCROLL ↓</span>';
    // Place at bottom of hero
    hero.style.position = 'relative';
    hero.appendChild(cue);
    // Hide on scroll
    let hidden = false;
    window.addEventListener('scroll', () => {
      const should = window.scrollY > 80;
      if (should !== hidden) {
        hidden = should;
        cue.style.opacity = should ? '0' : '';
        cue.style.pointerEvents = should ? 'none' : '';
        cue.style.transition = 'opacity .4s ease';
      }
    }, { passive: true });
  }

  /* ============ 11. Hero stats — flag when counted ============ */
  const heroStats = document.querySelector('.hero-stats');
  if (heroStats) {
    const sio = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { heroStats.classList.add('is-counted'); sio.disconnect(); }
      });
    }, { threshold: 0.3 });
    sio.observe(heroStats);
  }

})();
