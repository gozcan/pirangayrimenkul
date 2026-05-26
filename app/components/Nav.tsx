"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavProps = {
  /**
   * When true (the iletisim page) the primary CTA button becomes
   * "Jump to form" (#form) instead of "Free assessment" (/iletisim).
   */
  ctaToForm?: boolean;
};

/**
 * Shared site navigation. Renders the same markup that site.js / styles.css
 * expect (`.nav`, `.nav-inner`, `.lang-switch`, `.mobile-menu`, etc.) so the
 * unmodified vanilla scripts continue to drive the lang toggle. We handle the
 * mobile-menu open/close state ourselves because it depends on route changes.
 */
export default function Nav({ ctaToForm = false }: NavProps) {
  const pathname = usePathname() || "/";
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile drawer on every route change.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const links: { href: string; tr: string; en: string }[] = [
    { href: "/", tr: "Anasayfa", en: "Home" },
    { href: "/hizmetler", tr: "Hizmetler", en: "Services" },
    { href: "/#process", tr: "Süreç", en: "Process" },
    { href: "/hakkimizda", tr: "Hakkımızda", en: "About" },
    { href: "/#faq", tr: "S.S.S", en: "S.S.S" },
    { href: "/iletisim", tr: "İletişim", en: "Contact" },
  ];

  const primaryCta = ctaToForm ? (
    <a href="#form" className="btn btn-primary">
      <span data-tr>Form&apos;a in</span>
      <span data-en>Jump to form</span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 5v14M5 13l7 7 7-7" />
      </svg>
    </a>
  ) : (
    <Link href="/iletisim" className="btn btn-primary">
      <span data-tr>Ücretsiz keşif</span>
      <span data-en>Free assessment</span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 12h14M13 5l7 7-7 7" />
      </svg>
    </Link>
  );

  return (
    <>
      <header className="nav" role="banner">
        <div className="nav-inner">
          <Link href="/" className="nav-brand" aria-label="Piran Gayrimenkul">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.svg"
              alt="Piran Gayrimenkul"
              className="nav-logo"
              style={{ height: 56, width: "auto", display: "block" }}
            />
          </Link>
          <nav className="nav-links" aria-label="Ana menü">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={isActive(l.href) ? "is-active" : undefined}
              >
                {l.tr === l.en ? (
                  l.tr
                ) : (
                  <>
                    <span data-tr>{l.tr}</span>
                    <span data-en>{l.en}</span>
                  </>
                )}
              </Link>
            ))}
          </nav>
          <div className="nav-right">
            <div className="lang-switch" role="group" aria-label="Dil seçimi">
              <button data-lang-btn="tr" className="is-active">
                TR
              </button>
              <button data-lang-btn="en">EN</button>
            </div>
            {primaryCta}
            <button
              className="menu-toggle"
              data-menu-open
              onClick={() => setMenuOpen(true)}
              aria-expanded={menuOpen}
              aria-controls="piran-mobile-menu"
            >
              <span className="bars" aria-hidden="true"></span>
              <span data-tr>Menü</span>
              <span data-en>Menu</span>
            </button>
          </div>
        </div>
      </header>

      <div
        id="piran-mobile-menu"
        className={`mobile-menu${menuOpen ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="mm-top">
          <Link
            href="/"
            className="nav-brand"
            onClick={() => setMenuOpen(false)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.svg"
              alt="Piran Gayrimenkul"
              style={{ height: 48, width: "auto", display: "block" }}
            />
          </Link>
          <button
            className="menu-toggle"
            data-menu-close
            onClick={() => setMenuOpen(false)}
            aria-label="Kapat"
          >
            <span data-tr>Kapat</span>
            <span data-en>Close</span>
          </button>
        </div>
        <nav aria-label="Mobil menü">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className={isActive(l.href) ? "is-active" : undefined}
            >
              {l.tr === l.en ? (
                l.tr
              ) : (
                <>
                  <span data-tr>{l.tr}</span>
                  <span data-en>{l.en}</span>
                </>
              )}
            </Link>
          ))}
        </nav>
        <div className="mm-foot">
          <div className="lang-switch" role="group" aria-label="Dil seçimi">
            <button data-lang-btn="tr" className="is-active">
              TR
            </button>
            <button data-lang-btn="en">EN</button>
          </div>
          <a href="tel:+902120000000" className="mm-phone">
            +90 212 000 00 00
          </a>
        </div>
      </div>
    </>
  );
}
