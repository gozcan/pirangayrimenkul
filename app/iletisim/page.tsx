import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "İletişim — Ücretsiz Kentsel Dönüşüm Keşfi",
  description:
    "İstanbul'da kentsel dönüşüm, gayrimenkul değerleme ve inşaat danışmanlığı için bize ulaşın. Üsküdar Küçük Çamlıca ofis · 0850 346 46 52 · info@pirangyd.com. İlk değerlendirme ücretsiz, 24 saat içinde dönüş.",
  keywords: [
    "Piran Gayrimenkul iletişim",
    "kentsel dönüşüm iletişim",
    "kentsel dönüşüm ücretsiz keşif",
    "Üsküdar kentsel dönüşüm ofis",
    "İstanbul kentsel dönüşüm telefon",
    "kentsel dönüşüm fiyat teklifi",
  ],
  alternates: {
    canonical: "https://www.pirangyd.com/iletisim",
    languages: {
      tr: "https://www.pirangyd.com/iletisim",
      en: "https://www.pirangyd.com/iletisim?lang=en",
    },
  },
  openGraph: {
    title: "İletişim — Piran Gayrimenkul",
    description:
      "Üsküdar ofisten İstanbul geneline. Ücretsiz keşif için bize ulaşın.",
    url: "https://www.pirangyd.com/iletisim",
    type: "website",
  },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Anasayfa",
      item: "https://www.pirangyd.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "İletişim",
      item: "https://www.pirangyd.com/iletisim",
    },
  ],
};

const CONTACT_PAGE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: "https://www.pirangyd.com/iletisim",
  name: "İletişim — Piran Gayrimenkul",
  about: { "@id": "https://www.pirangyd.com/#organization" },
  mainEntity: { "@id": "https://www.pirangyd.com/#organization" },
};

export default function Page() {
  return (
    <>
      <Nav ctaToForm />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(BREADCRUMB_JSON_LD),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(CONTACT_PAGE_JSON_LD),
          }}
        />
        {/* Page hero */}
        <section className="page-hero">
          <div className="shell">
            <div className="page-hero-bar">
              <div className="left"><span className="dot-pulse"></span>&nbsp;&nbsp;OFİS · KÜÇÜK ÇAMLICA / İST · 41°00′N 29°03′E</div>
              <div className="center"><span data-tr>İLETİŞİM · BAŞLANGIÇ NOKTASI</span><span data-en>CONTACT · START POINT</span></div>
              <div className="right">SCALE 1:1 · DRWG · PRN/2026/CNT</div>
            </div>

            <div className="page-hero-grid">
              <div>
                <div className="page-hero-tag">
                  <span className="num">04</span>
                  <span className="bar"></span>
                  <span data-tr>İletişim &amp; Keşif Talebi</span><span data-en>Contact &amp; Site Visit</span>
                </div>
                <h1>
                  <span data-tr>İlk adım: <span className="accent">bir form</span> <span className="ghost">veya bir telefon.</span></span>
                  <span data-en>First step: <span className="accent">a form</span> <span className="ghost">or a phone call.</span></span>
                </h1>
              </div>
              <div className="page-hero-aside">
                <nav className="breadcrumb">
                  <a href="/"><span data-tr>Anasayfa</span><span data-en>Home</span></a>
                  <span>/</span>
                  <span><span data-tr>İletişim</span><span data-en>Contact</span></span>
                </nav>
                <p>
                  <span data-tr>Ekibimiz form gönderiminden sonra 4 saat içinde sizi arar; 24 saat içinde Küçük Çamlıca ofisten ya da kendi sahanızdan keşif randevusu oluşturur. İlk değerlendirme her zaman ücretsizdir.</span>
                  <span data-en>Our team calls within 4 hours of your form. A site or office meeting is scheduled within 24 hours. First consultation is always free.</span>
                </p>
                <dl className="meta-block">
                  <div><dt><span data-tr>Yanıt süresi</span><span data-en>Response</span></dt><dd>&lt; 4h</dd></div>
                  <div><dt><span data-tr>Keşif</span><span data-en>Site visit</span></dt><dd>&lt; 24h</dd></div>
                  <div><dt><span data-tr>İlk görüşme</span><span data-en>First call</span></dt><dd><span data-tr>Ücretsiz</span><span data-en>Free</span></dd></div>
                  <div><dt><span data-tr>Diller</span><span data-en>Languages</span></dt><dd>TR · EN · DE</dd></div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* Marquee */}
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            <div>
              <span>0850 346 46 52</span><span className="dia"></span>
              <span>INFO@PIRANGYD.COM</span><span className="dia"></span>
              <span>KÜÇÜK ÇAMLICA MAH. LİBADİYE CAD. NO 52</span><span className="dia"></span>
              <span>ÜSKÜDAR / İSTANBUL</span><span className="dia"></span>
              <span>PZT–CUM 09:00 → 18:30</span><span className="dia"></span>
              <span>24 SAAT İÇİNDE DÖNÜŞ</span><span className="dia"></span>
            </div>
            <div>
              <span>0850 346 46 52</span><span className="dia"></span>
              <span>INFO@PIRANGYD.COM</span><span className="dia"></span>
              <span>KÜÇÜK ÇAMLICA MAH. LİBADİYE CAD. NO 52</span><span className="dia"></span>
              <span>ÜSKÜDAR / İSTANBUL</span><span className="dia"></span>
              <span>PZT–CUM 09:00 → 18:30</span><span className="dia"></span>
              <span>24 SAAT İÇİNDE DÖNÜŞ</span><span className="dia"></span>
            </div>
          </div>
        </div>

        {/* Form */}
        <section className="long-section" id="form">
          <div className="shell">
            <div className="contact-grid">
              {/* LEFT: form */}
              <ContactForm />

              {/* RIGHT: contact side */}
              <aside className="contact-side">

                <div className="contact-card">
                  <h3><span data-tr>Doğrudan arayın</span><span data-en>Call directly</span></h3>
                  <a href="tel:+908503464652" className="big">0850 346 46 52</a>
                  <div className="sub"><span data-tr>Pazartesi–Cuma · 09:00–18:30</span><span data-en>Mon–Fri · 09:00–18:30</span></div>
                </div>

                <div className="contact-card">
                  <h3><span data-tr>E-posta</span><span data-en>Email</span></h3>
                  <a href="mailto:info@pirangyd.com" className="big" style={{fontSize: "clamp(20px, 1.8vw, 26px)"}}>info@pirangyd.com</a>
                  <div className="sub"><span data-tr>Genel · 24 saat içinde dönüş</span><span data-en>General · reply within 24 hours</span></div>
                </div>

                <div className="contact-card">
                  <h3><span data-tr>Küçük Çamlıca Ofis</span><span data-en>Küçük Çamlıca Office</span></h3>
                  <span className="big">Küçük Çamlıca Mah. Libadiye Cad. No 52 Üsküdar / İstanbul</span>
                  <div className="sub">Üsküdar / İstanbul · 34696</div>
                </div>

                {/* Map placeholder */}
                <div className="map-card" aria-hidden="true">
                  <svg viewBox="0 0 500 400" preserveAspectRatio="xMidYMid slice">
                    <rect width="500" height="400" fill="#e6e2d8" />
                    {/* Streets (grid) */}
                    <g stroke="#cdc4b1" strokeWidth="1">
                      <line x1="0" y1="80" x2="500" y2="80" />
                      <line x1="0" y1="160" x2="500" y2="160" />
                      <line x1="0" y1="240" x2="500" y2="240" />
                      <line x1="0" y1="320" x2="500" y2="320" />
                      <line x1="100" y1="0" x2="100" y2="400" />
                      <line x1="200" y1="0" x2="200" y2="400" />
                      <line x1="300" y1="0" x2="300" y2="400" />
                      <line x1="400" y1="0" x2="400" y2="400" />
                    </g>
                    {/* Diagonal main avenue (Büyükdere Cad) */}
                    <line x1="60" y1="0" x2="460" y2="400" stroke="#14140f" strokeWidth="6" />
                    <line x1="60" y1="0" x2="460" y2="400" stroke="#efece6" strokeWidth="1" strokeDasharray="6 6" />
                    {/* Park / green area */}
                    <rect x="320" y="60" width="160" height="120" fill="#1d4548" opacity="0.18" />
                    <text x="335" y="125" fontFamily="Geist Mono, monospace" fontSize="10" fill="#1d4548" letterSpacing="0.5">FATİH ORMANI</text>
                    {/* Buildings */}
                    <g fill="#cdc4b1" opacity="0.7">
                      <rect x="120" y="100" width="60" height="40" />
                      <rect x="220" y="100" width="60" height="40" />
                      <rect x="120" y="180" width="60" height="40" />
                      <rect x="220" y="180" width="60" height="40" />
                      <rect x="120" y="260" width="60" height="40" />
                      <rect x="220" y="260" width="80" height="40" />
                      <rect x="320" y="220" width="60" height="60" />
                      <rect x="400" y="280" width="60" height="60" />
                    </g>
                    {/* Compass */}
                    <g transform="translate(440, 40)">
                      <circle cx="0" cy="0" r="14" fill="#efece6" stroke="#14140f" strokeWidth="1" />
                      <path d="M 0 -10 L 4 0 L 0 10 L -4 0 Z" fill="#c94a26" />
                      <text x="0" y="-18" fontFamily="Geist Mono, monospace" fontSize="9" fill="#14140f" textAnchor="middle">N</text>
                    </g>
                    {/* Street names */}
                    <text x="280" y="370" fontFamily="Geist Mono, monospace" fontSize="9" fill="#14140f" letterSpacing="1">LİBADİYE CAD.</text>
                    <text x="20" y="155" fontFamily="Geist Mono, monospace" fontSize="8" fill="#6f6957" letterSpacing="0.5">KÜÇÜK ÇAMLICA MH.</text>
                  </svg>
                  <div className="pin" aria-hidden="true"></div>
                  <div className="label">PIRAN · K. ÇAMLICA / 52</div>
                </div>

              </aside>
            </div>
          </div>
        </section>

        {/* Other ways */}
        <section className="long-section" style={{borderTop: "1px solid var(--rule)", paddingTop: "clamp(48px, 6vw, 96px)", paddingBottom: "clamp(72px, 9vw, 160px)"}}>
          <div className="shell">
            <header className="sec-head">
              <div>
                <div className="meta-line">
                  <span className="chip solid">02</span>
                  <span data-tr>Başka Yollar</span><span data-en>Other Ways</span>
                </div>
                <h2>
                  <span data-tr>Form en hızlısı. <span className="accent">Ama tek yol değil.</span></span>
                  <span data-en>The form is fastest. <span className="accent">But not the only way.</span></span>
                </h2>
              </div>
              <p className="lead">
                <span data-tr>Acelesi olanlar arayabilir, ofise gelebilir, WhatsApp'tan yazabilir ya da bağlı olduğunuz bina yönetiminizi yönlendirebilir.</span>
                <span data-en>If you're in a rush, you can call, drop by, message us on WhatsApp, or have your building manager reach us.</span>
              </p>
            </header>

            <div className="principles-grid">
              <article className="principle-card">
                <div className="index">— 01</div>
                <h3><span data-tr>WhatsApp</span><span data-en>WhatsApp</span></h3>
                <p>
                  <span data-tr>Bina fotoğrafları ve adres bilgisiyle hızlı bir keşif değerlendirmesi için.</span>
                  <span data-en>Send building photos and address — we'll do a rapid first read.</span>
                </p>
                <a href="https://wa.me/908503464652" style={{marginTop: "auto", paddingTop: "20px", fontFamily: "var(--font-mono)", fontSize: "11.5px", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--accent)"}}>0850 346 46 52 ↗</a>
              </article>
              <article className="principle-card">
                <div className="index">— 02</div>
                <h3><span data-tr>Ofise Geliş</span><span data-en>Walk-in</span></h3>
                <p>
                  <span data-tr>Küçük Çamlıca Mah. Libadiye Cad. No 52 Üsküdar / İstanbul. Randevusuz geliş kabul ediyoruz; çayımız hazır.</span>
                  <span data-en>Küçük Çamlıca Mah. Libadiye Cad. No 52 Üsküdar / İstanbul. Walk-ins welcome; the tea is ready.</span>
                </p>
                <span style={{marginTop: "auto", paddingTop: "20px", fontFamily: "var(--font-mono)", fontSize: "11.5px", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--accent)"}}><span data-tr>Pzt–Cum 09:00–18:30</span><span data-en>Mon–Fri 09:00–18:30</span></span>
              </article>
              <article className="principle-card">
                <div className="index">— 03</div>
                <h3><span data-tr>Bina Yönetimi</span><span data-en>Building Management</span></h3>
                <p>
                  <span data-tr>Apartman yöneticiniz veya site yönetiminiz bizi doğrudan arayabilir. Kurumsal sözleşme şablonumuz hazırdır.</span>
                  <span data-en>Your apartment or estate manager can contact us directly. A corporate-contract template is on file.</span>
                </p>
                <a href="mailto:yonetim@pirangyd.com" style={{marginTop: "auto", paddingTop: "20px", fontFamily: "var(--font-mono)", fontSize: "11.5px", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--accent)"}}>yonetim@pirangyd.com ↗</a>
              </article>
              <article className="principle-card">
                <div className="index">— 04</div>
                <h3><span data-tr>Basın &amp; Medya</span><span data-en>Press &amp; Media</span></h3>
                <p>
                  <span data-tr>Röportaj, panel, görsel kullanımı ve sektör yorumu talepleri için.</span>
                  <span data-en>For interviews, panels, image usage and sector commentary.</span>
                </p>
                <a href="mailto:press@pirangyd.com" style={{marginTop: "auto", paddingTop: "20px", fontFamily: "var(--font-mono)", fontSize: "11.5px", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--accent)"}}>press@pirangyd.com ↗</a>
              </article>
              <article className="principle-card">
                <div className="index">— 05</div>
                <h3><span data-tr>Kariyer</span><span data-en>Careers</span></h3>
                <p>
                  <span data-tr>Mimar, statik mühendisi, şantiye şefi ve değerleme uzmanı pozisyonları.</span>
                  <span data-en>Roles for architects, structural engineers, site supervisors and appraisers.</span>
                </p>
                <a href="mailto:kariyer@pirangyd.com" style={{marginTop: "auto", paddingTop: "20px", fontFamily: "var(--font-mono)", fontSize: "11.5px", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--accent)"}}>kariyer@pirangyd.com ↗</a>
              </article>
              <article className="principle-card">
                <div className="index">— 06</div>
                <h3><span data-tr>Yatırımcı İlişkileri</span><span data-en>Investor Relations</span></h3>
                <p>
                  <span data-tr>Kurumsal yatırımcılar, aile ofisleri ve fon yöneticileri için butik kanal.</span>
                  <span data-en>A boutique line for institutional investors, family offices and fund managers.</span>
                </p>
                <a href="mailto:yatirim@pirangyd.com" style={{marginTop: "auto", paddingTop: "20px", fontFamily: "var(--font-mono)", fontSize: "11.5px", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--accent)"}}>yatirim@pirangyd.com ↗</a>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
