/* =========================================================
   Piran Gayrimenkul — Shared behavior
   ========================================================= */

(function() {
  'use strict';

  /* ============ Language toggle ============ */
  const root = document.documentElement;
  const KEY = 'piran.lang';
  setLang(localStorage.getItem(KEY) || 'tr');

  function setLang(lang) {
    if (lang === 'en') root.classList.add('lang-en');
    else root.classList.remove('lang-en');
    root.lang = lang;
    document.querySelectorAll('[data-tr-placeholder]').forEach(el => {
      el.placeholder = lang === 'en'
        ? (el.getAttribute('data-en-placeholder') || el.getAttribute('data-tr-placeholder'))
        : el.getAttribute('data-tr-placeholder');
    });
    document.querySelectorAll('[data-lang-btn]').forEach(btn => {
      btn.classList.toggle('is-active', btn.getAttribute('data-lang-btn') === lang);
    });
    localStorage.setItem(KEY, lang);
    // Refresh process panel content to current language
    if (window.__procRefresh) window.__procRefresh();
  }
  window.setLang = setLang;
  document.addEventListener('click', e => {
    const btn = e.target.closest('[data-lang-btn]');
    if (btn) setLang(btn.getAttribute('data-lang-btn'));
  });

  /* ============ Mobile menu ============ */
  document.addEventListener('click', e => {
    const open = e.target.closest('[data-menu-open]');
    const close = e.target.closest('[data-menu-close]');
    const menu = document.querySelector('.mobile-menu');
    if (!menu) return;
    if (open) menu.classList.add('is-open');
    if (close) menu.classList.remove('is-open');
  });

  /* ============ FAQ accordion ============ */
  document.addEventListener('click', e => {
    const q = e.target.closest('.faq-q');
    if (!q) return;
    const item = q.closest('.faq-item');
    const wasOpen = item.classList.contains('is-open');
    item.classList.toggle('is-open');
    q.setAttribute('aria-expanded', !wasOpen);
  });

  /* ============ Process timeline (building cross-section) ============ */
  const proc = document.querySelector('.process');
  if (proc) {
    const floors = Array.from(proc.querySelectorAll('.bldg-floor')); // top→bottom in DOM, floor 06 first
    const tmpl = proc.querySelector('#proc-data');
    const data = tmpl ? Array.from(tmpl.content.querySelectorAll('[data-step]')) : []; // step 0..5
    const panel = proc.querySelector('.proc-panel');
    const counter = panel.querySelector('.step-no .cur');
    const titleEl = panel.querySelector('.step-title .title-content');
    const descEl = panel.querySelector('.step-desc .desc-content');
    const durEl = panel.querySelector('dd.dur');
    const costEl = panel.querySelector('dd.cost');
    const progressText = panel.querySelector('.cur-pad');
    const prevBtn = panel.querySelector('[data-proc="prev"]');
    const nextBtn = panel.querySelector('[data-proc="next"]');
    const autoBtn = panel.querySelector('[data-proc="auto"]');
    let idx = 0;
    let auto = null;

    function getLang() { return root.classList.contains('lang-en') ? 'en' : 'tr'; }

    function setStep(i) {
      idx = Math.max(0, Math.min(5, i));
      floors.forEach(f => {
        const fi = parseInt(f.getAttribute('data-floor'), 10);
        f.classList.toggle('is-active', fi === idx);
      });
      render();
    }

    function render() {
      const lang = getLang();
      const node = data[idx];
      if (!node) return;
      const pick = (name) => {
        const el = node.querySelector(`[data-${name}-${lang}]`);
        return el ? el.innerHTML : '';
      };
      // Title
      titleEl.innerHTML = `<span data-tr>${pick('title-tr') || ''}</span><span data-en>${pick('title-en') || ''}</span>`;
      // Fallback: just set innerHTML in current lang
      titleEl.textContent = '';
      const trT = node.querySelector('[data-title-tr]');
      const enT = node.querySelector('[data-title-en]');
      if (trT && enT) {
        const sTr = document.createElement('span'); sTr.setAttribute('data-tr',''); sTr.innerHTML = trT.innerHTML;
        const sEn = document.createElement('span'); sEn.setAttribute('data-en',''); sEn.innerHTML = enT.innerHTML;
        titleEl.appendChild(sTr); titleEl.appendChild(sEn);
      }
      descEl.textContent = '';
      const trD = node.querySelector('[data-desc-tr]');
      const enD = node.querySelector('[data-desc-en]');
      if (trD && enD) {
        const sTr = document.createElement('span'); sTr.setAttribute('data-tr',''); sTr.innerHTML = trD.innerHTML;
        const sEn = document.createElement('span'); sEn.setAttribute('data-en',''); sEn.innerHTML = enD.innerHTML;
        descEl.appendChild(sTr); descEl.appendChild(sEn);
      }
      // Duration / cost
      durEl.textContent = '';
      const trDur = node.querySelector('[data-dur-tr]');
      const enDur = node.querySelector('[data-dur-en]');
      if (trDur && enDur) {
        const sTr = document.createElement('span'); sTr.setAttribute('data-tr',''); sTr.innerHTML = trDur.innerHTML;
        const sEn = document.createElement('span'); sEn.setAttribute('data-en',''); sEn.innerHTML = enDur.innerHTML;
        durEl.appendChild(sTr); durEl.appendChild(sEn);
      }
      costEl.textContent = '';
      const trCost = node.querySelector('[data-cost-tr]');
      const enCost = node.querySelector('[data-cost-en]');
      if (trCost && enCost) {
        const sTr = document.createElement('span'); sTr.setAttribute('data-tr',''); sTr.innerHTML = trCost.innerHTML;
        const sEn = document.createElement('span'); sEn.setAttribute('data-en',''); sEn.innerHTML = enCost.innerHTML;
        costEl.appendChild(sTr); costEl.appendChild(sEn);
      }
      // Counter
      const pad = String(idx + 1).padStart(2, '0');
      counter.textContent = pad;
      if (progressText) progressText.textContent = pad;
      // Buttons
      prevBtn.disabled = idx === 0;
      nextBtn.disabled = idx === 5;
    }

    window.__procRefresh = render;
    setStep(0);

    floors.forEach(f => f.addEventListener('click', () => {
      stopAuto();
      setStep(parseInt(f.getAttribute('data-floor'), 10));
    }));
    prevBtn.addEventListener('click', () => { stopAuto(); setStep(idx - 1); });
    nextBtn.addEventListener('click', () => { stopAuto(); setStep(idx + 1); });

    function startAuto() {
      if (auto) return;
      autoBtn.classList.add('is-on');
      auto = setInterval(() => {
        if (idx >= 5) { stopAuto(); return; }
        setStep(idx + 1);
      }, 2400);
    }
    function stopAuto() {
      if (!auto) return;
      clearInterval(auto); auto = null;
      autoBtn.classList.remove('is-on');
    }
    autoBtn.addEventListener('click', () => auto ? stopAuto() : startAuto());

    // Auto-advance once when section enters view
    let triggered = false;
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting && !triggered && idx === 0) {
          triggered = true;
          setTimeout(startAuto, 600);
        }
      });
    }, { threshold: 0.35 });
    io.observe(proc);
  }

  /* ============ Reveal ============ */
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });
    revealEls.forEach(el => io.observe(el));
  }

  /* ============ Contact form (mock) ============ */
  document.addEventListener('submit', e => {
    const form = e.target.closest('form[data-piran-form]');
    if (!form) return;
    e.preventDefault();
    const status = form.querySelector('[data-form-status]');
    const btn = form.querySelector('button[type="submit"]');
    if (btn) { btn.disabled = true; btn.dataset.prev = btn.textContent; btn.textContent = '...'; }
    setTimeout(() => {
      form.reset();
      if (btn) { btn.disabled = false; btn.textContent = btn.dataset.prev || 'Gönder'; }
      if (status) {
        status.style.opacity = '1';
        setTimeout(() => { status.style.opacity = '0'; }, 4500);
      }
    }, 900);
  });

  /* ============ Year ============ */
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

})();
