import type { ReactNode } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

type LegalLayoutProps = {
  /** Eyebrow code shown in the page hero (e.g. "05 · GİZLİLİK"). */
  eyebrowTr: string;
  eyebrowEn: string;
  /** H1 title in TR / EN. */
  titleTr: string;
  titleEn: string;
  /** Short lede paragraph under the title. */
  ledeTr: string;
  ledeEn: string;
  /** Breadcrumb label for this page. */
  breadcrumbTr: string;
  breadcrumbEn: string;
  /** Last revision date, e.g. "26 Mayıs 2026". */
  revisedTr: string;
  revisedEn: string;
  /** Main body — typically <article className="legal-body">…</article>. */
  children: ReactNode;
};

/**
 * Shared scaffold for legal pages (gizlilik, kvkk, çerez politikası).
 * Reuses the existing `page-hero` chrome from pages.css so it matches
 * the visual language of /hakkimizda and /iletisim.
 */
export default function LegalLayout({
  eyebrowTr,
  eyebrowEn,
  titleTr,
  titleEn,
  ledeTr,
  ledeEn,
  breadcrumbTr,
  breadcrumbEn,
  revisedTr,
  revisedEn,
  children,
}: LegalLayoutProps) {
  return (
    <>
      <Nav />
      <main>
        <section className="page-hero">
          <div className="shell">
            <div className="page-hero-bar">
              <div className="left">
                <span className="dot-pulse"></span>&nbsp;&nbsp;OFİS · KÜÇÜK ÇAMLICA / İST · 41°00′N 29°03′E
              </div>
              <div className="center">
                <span data-tr>{eyebrowTr}</span>
                <span data-en>{eyebrowEn}</span>
              </div>
              <div className="right">SCALE 1:1 · DRWG · PRN/2026/LGL</div>
            </div>

            <div className="page-hero-grid">
              <div>
                <div className="page-hero-tag">
                  <span className="num">§</span>
                  <span className="bar"></span>
                  <span data-tr>Yasal Metin</span>
                  <span data-en>Legal Notice</span>
                </div>
                <h1>
                  <span data-tr>{titleTr}</span>
                  <span data-en>{titleEn}</span>
                </h1>
              </div>
              <div className="page-hero-aside">
                <nav className="breadcrumb">
                  <a href="/">
                    <span data-tr>Anasayfa</span>
                    <span data-en>Home</span>
                  </a>
                  <span>/</span>
                  <span>
                    <span data-tr>{breadcrumbTr}</span>
                    <span data-en>{breadcrumbEn}</span>
                  </span>
                </nav>
                <p>
                  <span data-tr>{ledeTr}</span>
                  <span data-en>{ledeEn}</span>
                </p>
                <dl className="meta-block">
                  <div>
                    <dt>
                      <span data-tr>Son güncelleme</span>
                      <span data-en>Last revised</span>
                    </dt>
                    <dd>
                      <span data-tr>{revisedTr}</span>
                      <span data-en>{revisedEn}</span>
                    </dd>
                  </div>
                  <div>
                    <dt>
                      <span data-tr>Veri sorumlusu</span>
                      <span data-en>Data controller</span>
                    </dt>
                    <dd>Piran Gayrimenkul</dd>
                  </div>
                  <div>
                    <dt>
                      <span data-tr>Sorularınız için</span>
                      <span data-en>For questions</span>
                    </dt>
                    <dd>info@pirangyd.com</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        <section className="long-section">
          <div className="shell">
            <div className="legal-body">{children}</div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
