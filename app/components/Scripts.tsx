"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Runs the vanilla site.js + animations.js IIFEs on every route change.
 *
 * Both scripts attach delegated `document` listeners and IntersectionObservers
 * to DOM nodes that exist at the time they run. With the App Router, those
 * nodes are replaced on each navigation, so we re-evaluate the scripts after
 * each transition. The scripts are written so multiple invocations are safe
 * (idempotent attribute-driven setup with localStorage as the source of truth).
 */
export default function Scripts() {
  const pathname = usePathname();

  useEffect(() => {
    let cancelled = false;

    const loadOnce = async (src: string, id: string) => {
      // Re-execute by creating a fresh <script> each time so IIFEs run again.
      const existing = document.getElementById(id);
      if (existing) existing.remove();
      return new Promise<void>((resolve, reject) => {
        const s = document.createElement("script");
        s.src = src;
        s.id = id;
        s.async = false;
        s.onload = () => resolve();
        s.onerror = () => reject(new Error(`Failed to load ${src}`));
        document.body.appendChild(s);
      });
    };

    (async () => {
      try {
        // Small delay so React has committed the new page into the DOM.
        await new Promise((r) => requestAnimationFrame(() => r(null)));
        if (cancelled) return;
        await loadOnce("/scripts/site.js", "piran-site-js");
        if (cancelled) return;
        await loadOnce("/scripts/animations.js", "piran-animations-js");
      } catch (err) {
        // Non-fatal: animations are progressive enhancement.
        // eslint-disable-next-line no-console
        console.warn("[piran] script load failed", err);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [pathname]);

  return null;
}
