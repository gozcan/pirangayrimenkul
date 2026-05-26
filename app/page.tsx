import type { Metadata } from "next";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title:
    "Kentsel Dönüşüm İstanbul · Piran Gayrimenkul — Risk Raporundan Anahtar Teslime",
  description:
    "İstanbul'da kentsel dönüşüm danışmanlığı. 6306 ve 7471 sayılı kanun süreçleri, risk raporu, salt çoğunluk anlaşması, hibe + kira yardımı, Yarısı Bizden kampanyası, anahtar teslim inşaat. 15+ yıl deneyim, lisanslı ekip, Üsküdar Küçük Çamlıca ofis. Ücretsiz keşif.",
  alternates: {
    canonical: "https://www.pirangyd.com/",
    languages: {
      tr: "https://www.pirangyd.com/",
      en: "https://www.pirangyd.com/?lang=en",
      "x-default": "https://www.pirangyd.com/",
    },
  },
  openGraph: {
    title:
      "Kentsel Dönüşüm İstanbul · Piran Gayrimenkul",
    description:
      "15+ yıllık kentsel dönüşüm danışmanlığı. Risk raporundan anahtar teslime kadar tek muhatap. Yarısı Bizden + İstanbul 3M TL destek paketi süreçleri.",
    url: "https://www.pirangyd.com/",
    type: "website",
  },
};

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Binam kentsel dönüşüm kapsamına nasıl alınır?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Bakanlık lisanslı kuruluşlardan Deprem Risk Raporu alınır. Bina riskli çıkarsa 6306 sayılı kanun kapsamına girer ve kentsel dönüşüm hak ve desteklerinden faydalanabilirsiniz.",
      },
    },
    {
      "@type": "Question",
      name: "Kira yardımı nedir, kimler faydalanabilir?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Riskli yapı ilan edilen binalarda Çevre, Şehircilik ve İklim Değişikliği Bakanlığı tarafından 18 aya kadar kira yardımı verilir. Hem malik hem kiracı hisseleri oranında ve yıllık güncel bedel üzerinden faydalanır.",
      },
    },
    {
      "@type": "Question",
      name: "Kentsel dönüşüm süreci ne kadar sürer?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Risk raporundan anahtar teslime kadar tipik süre 24 ile 36 ay arasındadır. Hak sahibi sayısı, parselin imar durumu ve seçilen kalite çizgisi bu süreyi etkiler.",
      },
    },
    {
      "@type": "Question",
      name: "Salt çoğunluk ne anlama gelir, anlaşmayan azınlık ne olur?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "9 Kasım 2023'te yürürlüğe giren 7471 sayılı kanun ile 6306 sayılı kanundaki 2/3 çoğunluk şartı kaldırıldı; karar artık hisseleri oranında salt çoğunluk (yarıdan bir fazla) ile alınabiliyor. Anlaşmaya katılmayan paydaşların arsa payı, Bakanlık denetiminde rayiç bedel üzerinden açık artırma usulüyle anlaşan paydaşlara satılır.",
      },
    },
    {
      "@type": "Question",
      name: "Hibe, kredi ve faiz desteği nasıl çalışır?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Bakanlık üç farklı destek sunar: doğrudan hibe, düşük faizli kredi ve kira yardımı. Aynı kişi hibe ile kira yardımını birlikte alamaz; ancak bunlardan birini krediyle birleştirebilir.",
      },
    },
    {
      "@type": "Question",
      name: "Müteahhit seçimi ve sözleşme süreci nasıl ilerler?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Hak sahipleri, projeyi kendileri yürütebilir veya anahtar teslim usulüyle bir müteahhide devredebilir. Her iki modelde de ihale şartnamesi, teknik şartname ve sözleşme metni hazırlanır; iş ilerleme ödemeleri ve kalite kontrolü bağımsız denetlenir.",
      },
    },
    {
      "@type": "Question",
      name: "Yarısı Bizden kampanyası nedir, kim faydalanabilir?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Çevre, Şehircilik ve İklim Değişikliği Bakanlığı'nın 2023'te başlattığı ve 31 Aralık 2026'ya kadar uzatılan kentsel dönüşüm destek paketidir. İstanbul'daki 39 ilçeyi kapsar. Riskli yapı raporu alan binalarda her bağımsız bölüm için 875.000 TL hibe + 875.000 TL kredi + 125.000 TL taşınma yardımı verilir.",
      },
    },
    {
      "@type": "Question",
      name: "İstanbul'a özel 3 milyon TL'lik yeni destek paketi nedir?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Çevre, Şehircilik ve İklim Değişikliği Bakanlığı'nın 3 Nisan 2026'da duyurduğu, Dünya Bankası finansmanlı İklim ve Afetlere Dayanıklı Şehirler Projesi kapsamındaki yeni destek paketidir. Acil dönüşmesi gereken konutlara kadar 3 milyon TL kredi imkânı sağlar: 1 yıl ödemesiz, 180 ay vade, aylık 0,69 faizle.",
      },
    },
  ],
};

/**
 * Sitewide service catalog so each service shows as its own item in search
 * results when people query "kentsel dönüşüm danışmanlık", "değerleme uzmanı",
 * "anahtar teslim inşaat" etc.
 */
const SERVICE_CATALOG_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "Service",
      position: 1,
      name: "Kentsel Dönüşüm Danışmanlığı",
      provider: { "@id": "https://www.pirangyd.com/#organization" },
      areaServed: { "@type": "City", name: "İstanbul" },
      serviceType: "Urban Transformation Advisory",
      description:
        "6306 ve 7471 sayılı kanunlar kapsamında risk raporu, salt çoğunluk anlaşması, hibe ve kira yardımı başvurusu, anahtar teslim inşaat yönetimi.",
      url: "https://www.pirangyd.com/hizmetler#kentsel-donusum",
    },
    {
      "@type": "Service",
      position: 2,
      name: "Gayrimenkul Değerleme",
      provider: { "@id": "https://www.pirangyd.com/#organization" },
      areaServed: { "@type": "City", name: "İstanbul" },
      serviceType: "Property Valuation",
      description:
        "SPK lisanslı uzmanlarla konut, ticari ve arsa değerleme; kredi, miras ve dava süreçleri için onaylı rapor.",
      url: "https://www.pirangyd.com/hizmetler#degerleme",
    },
    {
      "@type": "Service",
      position: 3,
      name: "İnşaat ve Anahtar Teslim Proje Yönetimi",
      provider: { "@id": "https://www.pirangyd.com/#organization" },
      areaServed: { "@type": "City", name: "İstanbul" },
      serviceType: "Turnkey Construction Management",
      description:
        "Mimari ve statik projeden ruhsat, yapı denetimi, kaba inşaat, ince işler ve iskâna kadar anahtar teslim süreç.",
      url: "https://www.pirangyd.com/hizmetler#insaat",
    },
    {
      "@type": "Service",
      position: 4,
      name: "Yatırım Danışmanlığı",
      provider: { "@id": "https://www.pirangyd.com/#organization" },
      areaServed: { "@type": "City", name: "İstanbul" },
      serviceType: "Real Estate Investment Advisory",
      description:
        "Bölge analizi, getiri modeli, parsel ve portföy stratejisi; aile ofisleri ve kurumsal yatırımcılar için butik danışmanlık.",
      url: "https://www.pirangyd.com/hizmetler#yatirim",
    },
  ],
};

const PROC_DATA_HTML = `<div data-step="0">
        <span data-tag-tr>AKTİF FAZ</span><span data-tag-en>ACTIVE PHASE</span>
        <span data-title-tr>Tespit &amp; Saha Analizi</span><span data-title-en>Site Assessment</span>
        <span data-desc-tr>Mevcut yapının fiziksel durumu, parsel imar hakları, çevre dokusu ve hak sahibi profili incelenir. Saha gezisi, fotoğraflama ve ilk bütçe çerçevesi 5–10 gün içinde teslim edilir.</span>
        <span data-desc-en>We inspect the structure, parcel zoning, surrounding fabric and stakeholder profile. A site walk, photographic record and a first budget envelope land within 5–10 days.</span>
        <span data-dur-tr>5–10 gün</span><span data-dur-en>5–10 days</span>
        <span data-cost-tr>Ücretsiz</span><span data-cost-en>Free</span>
      </div>
      <div data-step="1">
        <span data-tag-tr>02 · TEST</span><span data-tag-en>02 · TESTING</span>
        <span data-title-tr>Risk Raporu &amp; Lisanslı Test</span><span data-title-en>Risk Report &amp; Licensed Testing</span>
        <span data-desc-tr>Bakanlık lisanslı kuruluş tarafından karot, statik ve mekanik testler yapılır. Riskli yapı raporu hazırlanır, idareye sunulur ve 6306 sayılı kanun süreci başlatılır.</span>
        <span data-desc-en>Ministry-licensed labs run core, structural and MEP testing. The risk report is filed with the relevant authority — the Law 6306 process begins.</span>
        <span data-dur-tr>3–6 hafta</span><span data-dur-en>3–6 weeks</span>
        <span data-cost-tr>Lisanslı kuruluş</span><span data-cost-en>Licensed lab</span>
      </div>
      <div data-step="2">
        <span data-tag-tr>03 · ANLAŞMA</span><span data-tag-en>03 · AGREEMENT</span>
        <span data-title-tr>Hak Sahipleri Anlaşması</span><span data-title-en>Stakeholder Agreement</span>
        <span data-desc-tr>Salt çoğunluk protokolü, pay dağılımı, kira yardımı başvurusu ve sözleşme hazırlanır. Maliklere şeffaf pay tablosu ve ödeme takvimi sunulur.</span>
        <span data-desc-en>The simple majority protocol, share allocation, rent-assistance application and contracts are drafted — every owner sees a clear share table and payment schedule.</span>
        <span data-dur-tr>2–4 ay</span><span data-dur-en>2–4 months</span>
        <span data-cost-tr>Noter onaylı</span><span data-cost-en>Notarized</span>
      </div>
      <div data-step="3">
        <span data-tag-tr>04 · TASARIM</span><span data-tag-en>04 · DESIGN</span>
        <span data-title-tr>Mimari Proje &amp; Ruhsat</span><span data-title-en>Design &amp; Permitting</span>
        <span data-desc-tr>Mimari, statik, mekanik ve elektrik projeleri çizilir. Belediye ruhsat süreci, kat irtifakı düzenlemeleri ve enerji kimlik belgesi tek elden yürütülür.</span>
        <span data-desc-en>Architectural, structural, MEP and electrical drawings are produced. Municipal permits, condominium adjustments and energy certification are handled in-house.</span>
        <span data-dur-tr>3–5 ay</span><span data-dur-en>3–5 months</span>
        <span data-cost-tr>Belediye onayı</span><span data-cost-en>Municipal approval</span>
      </div>
      <div data-step="4">
        <span data-tag-tr>05 · ŞANTİYE</span><span data-tag-en>05 · SITE</span>
        <span data-title-tr>İnşaat &amp; Bağımsız Denetim</span><span data-title-en>Construction &amp; Oversight</span>
        <span data-desc-tr>Kaba inşaat, ince işler, mekanik ve peyzaj. Bağımsız yapı denetim firması, üç aylık ilerleme raporu ve canlı şantiye kamerası ile şeffaf süreç.</span>
        <span data-desc-en>Shell, finishes, MEP and landscape. Independent inspection, quarterly progress reports and live site cameras — full transparency.</span>
        <span data-dur-tr>14–22 ay</span><span data-dur-en>14–22 months</span>
        <span data-cost-tr>Yapı denetimi</span><span data-cost-en>Inspected</span>
      </div>
      <div data-step="5">
        <span data-tag-tr>06 · TESLİM</span><span data-tag-en>06 · HANDOVER</span>
        <span data-title-tr>Anahtar Teslim</span><span data-title-en>Handover</span>
        <span data-desc-tr>İskân ruhsatı, kat mülkiyeti tesisi ve daire teslimi. 2 yıl müteahhit garantisi, ortak alan bakım planı ve site yönetim geçişi dahildir.</span>
        <span data-desc-en>Occupancy permit, title registration and unit handover. Includes a 2-year warranty, common-area maintenance plan and management transition.</span>
        <span data-dur-tr>2–4 hafta</span><span data-dur-en>2–4 weeks</span>
        <span data-cost-tr>2 yıl garanti</span><span data-cost-en>2-year warranty</span>
      </div>`;

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(SERVICE_CATALOG_JSON_LD),
          }}
        />
        {/* =========================================================
             HERO
             ========================================================= */}
        <section className="hero" aria-label="Tanıtım">
          <div className="hero-shell">

            {/* Status bar */}
            <div className="hero-bar">
              <div className="left">
                <span className="dot-pulse" aria-hidden="true"></span>
                <span data-tr>OFİS · KÜÇÜK ÇAMLICA / İST</span><span data-en>OFFICE · KÜÇÜK ÇAMLICA / İST</span>
                <span>·</span>
                <span data-tr>41°00′N 29°03′E</span><span data-en>41°00′N 29°03′E</span>
              </div>
              <div className="center"><span data-tr>2010 → 2026 · ON BEŞİNCİ YIL</span><span data-en>2010 → 2026 · YEAR FIFTEEN</span></div>
              <div className="right">SCALE 1:1 · DRWG · PRN/2026/001</div>
            </div>

            <div className="hero-grid">
              {/* LEFT: headline + cta */}
              <div className="hero-left">

                <div className="hero-tag">
                  <span className="num">01</span>
                  <span className="bar" aria-hidden="true"></span>
                  <span data-tr>Giriş · Kentsel Dönüşüm Danışmanı</span>
                  <span data-en>Intro · Urban Renewal Advisor</span>
                </div>

                <h1 className="headline">
                  <span data-tr><span className="ink">Riskli</span> <span className="ghost">binadan</span> <span className="ink">yeni</span> <span className="ink">yuvaya</span>—<span className="accent">tek</span> <span className="ink">muhatapla.</span></span>
                  <span data-en><span className="ink">From</span> <span className="ghost">risky</span> <span className="ink">building</span> <span className="ink">to new home</span>—<span className="accent">one</span> <span className="ink">contractor.</span></span>
                </h1>

                <p className="hero-lead">
                  <span data-tr>Kentsel dönüşüm, değerleme, inşaat ve yatırım danışmanlığı. Risk raporundan anahtar teslime kadar her metresi tek bir sözleşme, tek bir ekip altında. İstanbul&apos;un 23 ilçesine Ekşioğlu Grup güvencesiyle hizmet veriyoruz.</span>
                  <span data-en>Urban renewal, valuation, construction and investment advisory. From risk report to handover, every metre under one contract, one team. Serving 23 districts across Istanbul with the assurance of Ekşioğlu Grup.</span>
                </p>

                <div className="hero-cta">
                  <a href="/iletisim" className="btn btn-accent">
                    <span data-tr>Ücretsiz keşif al</span><span data-en>Book a free assessment</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                  </a>
                  <a href="#process" className="btn btn-ghost">
                    <span data-tr>Süreci incele</span><span data-en>See the 6 steps</span>
                  </a>
                </div>

                {/* Hero stats */}
                <dl className="hero-stats" aria-label="İstatistikler">
                  <div className="hero-stat">
                    <div className="n">142<span className="sup">+</span></div>
                    <div className="lbl"><span data-tr>Tamamlanan proje</span><span data-en>Completed projects</span></div>
                  </div>
                  <div className="hero-stat">
                    <div className="n">2,860</div>
                    <div className="lbl"><span data-tr>Yenilenen daire</span><span data-en>Units renewed</span></div>
                  </div>
                  <div className="hero-stat">
                    <div className="n">23</div>
                    <div className="lbl"><span data-tr>İlçede aktif</span><span data-en>Districts active</span></div>
                  </div>
                  <div className="hero-stat">
                    <div className="n">0/0</div>
                    <div className="lbl"><span data-tr>İş kazası · 15 yılda</span><span data-en>Site incidents · 15 yrs</span></div>
                  </div>
                </dl>

              </div>

              {/* RIGHT: building blueprint card */}
              <div className="hero-right">
                <div className="bldg-card">
                  <span className="corner tl" aria-hidden="true"></span>
                  <span className="corner tr" aria-hidden="true"></span>
                  <span className="corner bl" aria-hidden="true"></span>
                  <span className="corner br" aria-hidden="true"></span>

                  <div className="bldg-meta">
                    <div><strong>FRAME</strong><br />RC · A1</div>
                    <div><strong>STOREYS</strong><br />06 + ZEMİN</div>
                    <div><strong>HEIGHT</strong><br />22.40 m</div>
                  </div>

                  <div className="bldg-svg-wrap" aria-hidden="true">
                    {/* Isometric building blueprint */}
                    <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid meet">
                      <defs>
                        <pattern id="dot-grid" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
                          <circle cx="1" cy="1" r="0.8" fill="#bcb29a" />
                        </pattern>
                      </defs>

                      {/* Background grid */}
                      <rect width="400" height="500" fill="url(#dot-grid)" opacity="0.5" />

                      {/* Frame */}
                      <rect x="14" y="14" width="372" height="472" fill="none" stroke="#14140f" strokeWidth="1.2" />
                      <rect x="22" y="22" width="356" height="456" fill="none" stroke="#14140f" strokeWidth="0.5" strokeDasharray="3 3" />

                      {/* Isometric building: front face */}
                      <g stroke="#14140f" strokeWidth="1.2" fill="none">
                        {/* Floor slabs */}
                        <path d="M 100 120 L 100 380 L 280 380 L 280 120 Z" />
                        {/* Roof tilted */}
                        <path d="M 100 120 L 200 90 L 380 90 L 280 120 Z" fill="#c94a26" fillOpacity="0.15" stroke="#c94a26" strokeWidth="1.2" />
                        {/* Side */}
                        <path d="M 280 120 L 380 90 L 380 350 L 280 380 Z" />
                        {/* Storey lines front */}
                        <line x1="100" y1="160" x2="280" y2="160" />
                        <line x1="100" y1="200" x2="280" y2="200" />
                        <line x1="100" y1="240" x2="280" y2="240" />
                        <line x1="100" y1="280" x2="280" y2="280" />
                        <line x1="100" y1="320" x2="280" y2="320" />
                        {/* Storey lines side */}
                        <line x1="280" y1="160" x2="380" y2="130" />
                        <line x1="280" y1="200" x2="380" y2="170" />
                        <line x1="280" y1="240" x2="380" y2="210" />
                        <line x1="280" y1="280" x2="380" y2="250" />
                        <line x1="280" y1="320" x2="380" y2="290" />
                      </g>

                      {/* Front face windows */}
                      <g stroke="#14140f" strokeWidth="0.8" fill="#f5f3ee">
                        <g>
                          <rect x="118" y="132" width="22" height="20" />
                          <rect x="160" y="132" width="22" height="20" />
                          <rect x="202" y="132" width="22" height="20" />
                          <rect x="244" y="132" width="22" height="20" />
                        </g>
                        <g>
                          <rect x="118" y="172" width="22" height="20" />
                          <rect x="160" y="172" width="22" height="20" />
                          <rect x="202" y="172" width="22" height="20" />
                          <rect x="244" y="172" width="22" height="20" />
                        </g>
                        <g>
                          <rect x="118" y="212" width="22" height="20" />
                          <rect x="160" y="212" width="22" height="20" fill="#c94a26" />
                          <rect x="202" y="212" width="22" height="20" />
                          <rect x="244" y="212" width="22" height="20" />
                        </g>
                        <g>
                          <rect x="118" y="252" width="22" height="20" />
                          <rect x="160" y="252" width="22" height="20" />
                          <rect x="202" y="252" width="22" height="20" />
                          <rect x="244" y="252" width="22" height="20" fill="#c94a26" />
                        </g>
                        <g>
                          <rect x="118" y="292" width="22" height="20" />
                          <rect x="160" y="292" width="22" height="20" />
                          <rect x="202" y="292" width="22" height="20" fill="#c94a26" />
                          <rect x="244" y="292" width="22" height="20" />
                        </g>
                        {/* Ground level */}
                        <rect x="118" y="332" width="60" height="40" />
                        <rect x="186" y="332" width="40" height="40" />
                        <rect x="234" y="332" width="32" height="40" />
                      </g>

                      {/* Dimension annotation */}
                      <g stroke="#c94a26" strokeWidth="0.8" fill="none">
                        <line x1="80" y1="120" x2="80" y2="380" />
                        <line x1="76" y1="120" x2="84" y2="120" />
                        <line x1="76" y1="380" x2="84" y2="380" />
                      </g>
                      <text x="68" y="255" fontFamily="Geist Mono, monospace" fontSize="9" fill="#c94a26" textAnchor="middle" transform="rotate(-90 68 255)" letterSpacing="0.5">22.40 m</text>

                      {/* Callout dots and lines */}
                      <g stroke="#14140f" strokeWidth="0.6" fill="none">
                        <line x1="290" y1="222" x2="370" y2="222" strokeDasharray="2 2" />
                      </g>
                      <circle cx="290" cy="222" r="2.5" fill="#c94a26" />
                      <text x="372" y="225" fontFamily="Geist Mono, monospace" fontSize="8" fill="#14140f" letterSpacing="0.5">D+3</text>

                      {/* Crosshair top right */}
                      <g stroke="#14140f" strokeWidth="0.6">
                        <line x1="355" y1="40" x2="375" y2="40" />
                        <line x1="365" y1="30" x2="365" y2="50" />
                      </g>
                      <text x="345" y="64" fontFamily="Geist Mono, monospace" fontSize="8" fill="#14140f" letterSpacing="0.5">N</text>
                    </svg>
                  </div>

                  <div className="bldg-callouts">
                    <div className="row"><span>ETÜD</span><strong>RC-A1</strong></div>
                    <div className="row"><span>YIL</span><strong>1987 → 2026</strong></div>
                    <div className="row"><span>NET ALAN</span><strong>2,840 m²</strong></div>
                    <div className="row"><span>DAİRE</span><strong>24 ünite</strong></div>
                    <div className="row"><span>RİSK</span><strong style={{color: "var(--accent)"}}>RİSKLİ</strong></div>
                    <div className="row"><span>DURUM</span><strong>FAZ 04 · İNŞAAT</strong></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Marquee */}
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            <div>
              <span>KENTSEL DÖNÜŞÜM</span><span className="dia"></span>
              <span>SPK DEĞERLEME</span><span className="dia"></span>
              <span>İNŞAAT</span><span className="dia"></span>
              <span>YATIRIM DANIŞMANLIĞI</span><span className="dia"></span>
              <span>6306 SAYILI KANUN</span><span className="dia"></span>
              <span>ANAHTAR TESLİM</span><span className="dia"></span>
              <span>YARISI BİZDEN</span><span className="dia"></span>
              <span>KİRA YARDIMI</span><span className="dia"></span>
            </div>
            <div>
              <span>KENTSEL DÖNÜŞÜM</span><span className="dia"></span>
              <span>SPK DEĞERLEME</span><span className="dia"></span>
              <span>İNŞAAT</span><span className="dia"></span>
              <span>YATIRIM DANIŞMANLIĞI</span><span className="dia"></span>
              <span>6306 SAYILI KANUN</span><span className="dia"></span>
              <span>ANAHTAR TESLİM</span><span className="dia"></span>
              <span>YARISI BİZDEN</span><span className="dia"></span>
              <span>KİRA YARDIMI</span><span className="dia"></span>
            </div>
          </div>
        </div>

        {/* =========================================================
             SERVICES
             ========================================================= */}
        <section className="services" id="services" aria-labelledby="services-h">
          <div className="shell">
            <header className="sec-head">
              <div>
                <div className="meta-line">
                  <span className="chip solid">02</span>
                  <span data-tr>Hizmetler · Dört Disiplin</span><span data-en>Services · Four Disciplines</span>
                </div>
                <h2 id="services-h">
                  <span data-tr>Dört bölüm. <span className="ghost">Tek</span> <span className="accent">sözleşme.</span></span>
                  <span data-en>Four departments. <span className="ghost">One</span> <span className="accent">contract.</span></span>
                </h2>
              </div>
              <p className="lead">
                <span data-tr>Çoğu firma süreci üçe ayırır — danışman, müteahhit, değerleyici. Piran dört disiplini de aynı çatı altında tutar; sorumluluk paslaşılmaz, mesai kaybolmaz.</span>
                <span data-en>Most firms split the work three ways — advisor, builder, valuer. Piran keeps all four disciplines under one roof; accountability isn't passed around.</span>
              </p>
            </header>

            <div className="service-grid">

              <a href="/hizmetler#kentsel-donusum" className="service-card">
                <div className="head">
                  <div className="label"><strong>D / 01</strong><br /><span data-tr>BÖLÜM</span><span data-en>DEPARTMENT</span></div>
                  <div className="icon" aria-hidden="true">
                    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M5 28V12L16 4l11 8v16" />
                      <path d="M10 28v-8h12v8" />
                      <path d="M13 20v-4h6v4" />
                      <line x1="5" y1="28" x2="27" y2="28" />
                    </svg>
                  </div>
                </div>
                <h3>
                  <span data-tr><span className="num">01</span>Kentsel Dönüşüm</span>
                  <span data-en><span className="num">01</span>Urban Transformation</span>
                </h3>
                <p>
                  <span data-tr>6306 sayılı kanun kapsamında risk tespiti, hak sahipleri yönetimi, kira yardımı başvurusu ve anahtar teslim yeniden yapım.</span>
                  <span data-en>Under Law 6306: risk assessment, stakeholder governance, rent-assistance application and end-to-end rebuild.</span>
                </p>
                <div className="tags">
                  <span className="tag"><span data-tr>Risk Raporu</span><span data-en>Risk Report</span></span>
                  <span className="tag"><span data-tr>Salt Çoğunluk</span><span data-en>Simple Majority</span></span>
                  <span className="tag"><span data-tr>Kira Yardımı</span><span data-en>Rent Aid</span></span>
                  <span className="tag"><span data-tr>Yarısı Bizden</span><span data-en>Half-Funded</span></span>
                </div>
                <span className="more">
                  <span data-tr>Detayları gör</span><span data-en>See detail</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                </span>
              </a>

              <a href="/hizmetler#degerleme" className="service-card">
                <div className="head">
                  <div className="label"><strong>D / 02</strong><br /><span data-tr>BÖLÜM</span><span data-en>DEPARTMENT</span></div>
                  <div className="icon" aria-hidden="true">
                    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="6" y="6" width="20" height="20" />
                      <path d="M11 21V14M16 21V11M21 21V17" />
                      <circle cx="16" cy="6" r="1.5" />
                    </svg>
                  </div>
                </div>
                <h3>
                  <span data-tr><span className="num">02</span>Gayrimenkul Değerleme</span>
                  <span data-en><span className="num">02</span>Property Valuation</span>
                </h3>
                <p>
                  <span data-tr>Konut, ticari, arsa ve karma kullanım için SPK lisanslı değerleme raporları. Bankalar ve yatırımcılar için kabul gören standartlar.</span>
                  <span data-en>SPK-licensed valuation reports for residential, commercial, land and mixed-use assets — accepted by banks and institutional investors.</span>
                </p>
                <div className="tags">
                  <span className="tag">SPK</span>
                  <span className="tag"><span data-tr>Konut</span><span data-en>Residential</span></span>
                  <span className="tag"><span data-tr>Ticari</span><span data-en>Commercial</span></span>
                  <span className="tag"><span data-tr>Arsa</span><span data-en>Land</span></span>
                </div>
                <span className="more">
                  <span data-tr>Detayları gör</span><span data-en>See detail</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                </span>
              </a>

              <a href="/hizmetler#insaat" className="service-card">
                <div className="head">
                  <div className="label"><strong>D / 03</strong><br /><span data-tr>BÖLÜM</span><span data-en>DEPARTMENT</span></div>
                  <div className="icon" aria-hidden="true">
                    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M5 28L16 6l11 22" />
                      <line x1="10" y1="22" x2="22" y2="22" />
                      <line x1="13" y1="16" x2="19" y2="16" />
                      <line x1="5" y1="28" x2="27" y2="28" />
                    </svg>
                  </div>
                </div>
                <h3>
                  <span data-tr><span className="num">03</span>İnşaat &amp; Anahtar Teslim</span>
                  <span data-en><span className="num">03</span>Construction &amp; Turnkey</span>
                </h3>
                <p>
                  <span data-tr>Kaba inşaattan ince işlere, mimari detaydan peyzaja kadar anahtar teslim yapım. Sigortalı, akredite ve denetimli işçilik.</span>
                  <span data-en>From shell to finishes, architectural detail to landscape — insured, accredited, fully audited workmanship.</span>
                </p>
                <div className="tags">
                  <span className="tag"><span data-tr>Mimari</span><span data-en>Architecture</span></span>
                  <span className="tag"><span data-tr>Statik</span><span data-en>Structural</span></span>
                  <span className="tag">MEP</span>
                  <span className="tag"><span data-tr>İnce İşler</span><span data-en>Finishes</span></span>
                </div>
                <span className="more">
                  <span data-tr>Detayları gör</span><span data-en>See detail</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                </span>
              </a>

              <a href="/hizmetler#yatirim" className="service-card">
                <div className="head">
                  <div className="label"><strong>D / 04</strong><br /><span data-tr>BÖLÜM</span><span data-en>DEPARTMENT</span></div>
                  <div className="icon" aria-hidden="true">
                    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M5 24L13 16L18 21L27 10" />
                      <path d="M20 10h7v7" />
                      <line x1="5" y1="28" x2="27" y2="28" />
                    </svg>
                  </div>
                </div>
                <h3>
                  <span data-tr><span className="num">04</span>Yatırım Danışmanlığı</span>
                  <span data-en><span className="num">04</span>Investment Advisory</span>
                </h3>
                <p>
                  <span data-tr>Bölge analizi, arsa toplama, fizibilite ve çıkış stratejisi. Kurumsal yatırımcı ve aile ofisleri için butik portföy yönetimi.</span>
                  <span data-en>Market analysis, land assembly, feasibility and exit strategy. Boutique portfolio advisory for institutions and family offices.</span>
                </p>
                <div className="tags">
                  <span className="tag"><span data-tr>Fizibilite</span><span data-en>Feasibility</span></span>
                  <span className="tag"><span data-tr>Arsa Toplama</span><span data-en>Land Assembly</span></span>
                  <span className="tag"><span data-tr>Portföy</span><span data-en>Portfolio</span></span>
                  <span className="tag"><span data-tr>Çıkış</span><span data-en>Exit</span></span>
                </div>
                <span className="more">
                  <span data-tr>Detayları gör</span><span data-en>See detail</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                </span>
              </a>
            </div>

          </div>
        </section>

        {/* =========================================================
             WHY US
             ========================================================= */}
        <section className="why" id="why" aria-labelledby="why-h">
          <div className="shell">
            <header className="sec-head">
              <div>
                <div className="meta-line">
                  <span className="chip solid">03</span>
                  <span data-tr>Neden Piran · Sayılarla</span><span data-en>Why Piran · By Numbers</span>
                </div>
                <h2 id="why-h">
                  <span data-tr>Müteahhit değil. <span className="accent">Mühendis disiplini.</span></span>
                  <span data-en>Not a developer. <span className="accent">Engineering discipline.</span></span>
                </h2>
              </div>
              <p className="lead">
                <span data-tr>Sözleşme tek bir tarafladır: Piran. Mimari, statik, hukuk ve şantiye ekipleri aynı dosyaya bakar; sorumluluk paslaşılmaz, mesai kaybolmaz.</span>
                <span data-en>The contract is with one party: Piran. Architects, engineers, legal and site teams share one file. Accountability isn't passed around.</span>
              </p>
            </header>

            <div className="why-grid">

              <article className="why-card">
                <div className="index">— 01 / METRIC</div>
                <div className="big accent-num">15<span className="unit">YIL</span></div>
                <h3>
                  <span data-tr>İstanbul siluetinde, 2010'dan bu yana.</span>
                  <span data-en>In the Istanbul skyline, since 2010.</span>
                </h3>
                <p>
                  <span data-tr>İlk ofisimizden bu yana 142 proje, 23 ilçe ve 2.860 daire — her metrekaresinde Piran imzası.</span>
                  <span data-en>142 projects, 23 districts, 2,860 units — every square metre signed by Piran since day one.</span>
                </p>
                <div className="seal"><span>2010 → 2026</span></div>
              </article>

              <article className="why-card">
                <div className="index">— 02 / METRIC</div>
                <div className="big">0<span className="unit">/0</span></div>
                <h3>
                  <span data-tr>İş kazası &amp; mahkeme. On beş yıllık temiz sicil.</span>
                  <span data-en>Site incidents &amp; lawsuits. Fifteen years of clean record.</span>
                </h3>
                <p>
                  <span data-tr>Bağımsız yapı denetimi, mesleki sorumluluk sigortası ve şeffaf sözleşme yapısının doğal sonucu.</span>
                  <span data-en>The natural result of independent inspection, professional liability insurance and a transparent contract.</span>
                </p>
                <div className="seal"><span>SPK · ÇŞB · TMMOB</span></div>
              </article>

              <article className="why-card">
                <div className="index">— 03 / METRIC</div>
                <div className="big">04</div>
                <h3>
                  <span data-tr>Disiplin, bir çatı altında.</span>
                  <span data-en>Four disciplines, one roof.</span>
                </h3>
                <p>
                  <span data-tr>Mimarlık, mühendislik, hukuk ve şantiye — alt yüklenicilik yok. Pazartesi sabahı toplantı, perşembe akşamı saha kararı.</span>
                  <span data-en>Architecture, engineering, legal and site — no subcontracted bottlenecks. Monday meeting, Thursday site decision.</span>
                </p>
                <div className="seal"><span><span data-tr>Hukuk · Mimari · Şantiye · Finans</span><span data-en>Legal · Design · Site · Finance</span></span></div>
              </article>

              <article className="why-card">
                <div className="index">— 04 / METRIC</div>
                <div className="big accent-num">100<span className="unit">%</span></div>
                <h3>
                  <span data-tr>Şeffaf hak paylaşımı &amp; takip.</span>
                  <span data-en>Transparent shares &amp; tracking.</span>
                </h3>
                <p>
                  <span data-tr>Her malik payını, ödeme planını ve teslim takvimini hak sahipleri panelinden 7/24 görür. Sürpriz tartışma yok.</span>
                  <span data-en>Every owner tracks their share, payment plan and delivery schedule on a 24/7 stakeholder dashboard — no surprise disputes.</span>
                </p>
                <div className="seal"><span><span data-tr>Açık Defter</span><span data-en>Open Ledger</span></span></div>
              </article>

            </div>
          </div>
        </section>

        {/* =========================================================
             PROCESS — BUILDING CROSS-SECTION (signature)
             Six floors. Ground = step 01, Roof = step 06.
             Click a floor to read the phase. Auto-builds floor-by-floor.
             ========================================================= */}
        <section className="process" id="process" aria-labelledby="process-h">
          <div className="shell">
            <header className="sec-head">
              <div>
                <div className="meta-line">
                  <span className="chip solid">04</span>
                  <span data-tr>Süreç · Bina Kesiti</span><span data-en>Process · Building Section</span>
                </div>
                <h2 id="process-h">
                  <span data-tr>Zeminden çatıya, <span className="accent">altı adım.</span></span>
                  <span data-en>Foundation to roof, <span className="accent">six floors.</span></span>
                </h2>
              </div>
              <p className="lead">
                <span data-tr>Sürecimiz bir bina inşa eder gibidir: tespitle başlar, anahtar teslimle biter. Her katı tıklayın, kendi binanız hangi aşamada olursa olsun ne yapacağımızı görün.</span>
                <span data-en>Our process is built like a building: starts with assessment, ends with handover. Click any floor to read its phase — wherever your building stands today.</span>
              </p>
            </header>

            <div className="process-stage">

              {/* LEFT: building diagram */}
              <div className="bldg-section">
                <div className="head">
                  <div><strong>DRWG · PRN/SEC/2026</strong> · <span data-tr>BİNA KESİTİ</span><span data-en>BUILDING SECTION</span></div>
                  <div className="legend">
                    <div className="sw"><span className="s active"></span><span data-tr>AKTİF</span><span data-en>ACTIVE</span></div>
                    <div className="sw"><span className="s pending"></span><span data-tr>SIRADA</span><span data-en>PENDING</span></div>
                  </div>
                </div>

                <div className="bldg-figure">
                  {/* Ruler */}
                  <div className="bldg-ruler" aria-hidden="true">
                    <div className="tick">22m</div>
                    <div className="tick">18m</div>
                    <div className="tick">14m</div>
                    <div className="tick">10m</div>
                    <div className="tick">6m</div>
                    <div className="tick">3m</div>
                  </div>

                  {/* Tower */}
                  <div className="bldg-tower" role="list">
                    <div className="bldg-roof" aria-hidden="true">
                      <span>ÇATI · 06 ÜST</span>
                      <span>↑ N</span>
                    </div>

                    {/* Floor 06 (top) - last step */}
                    <div className="bldg-floor" data-floor="5" role="listitem">
                      <div className="floor-pattern" aria-hidden="true">
                        <svg viewBox="0 0 240 60" preserveAspectRatio="none">
                          <g stroke="#14140f" strokeWidth="0.6" fill="none">
                            <rect x="6" y="6" width="40" height="48" />
                            <rect x="50" y="6" width="40" height="48" />
                            <rect x="94" y="6" width="40" height="48" />
                            <rect x="138" y="6" width="40" height="48" />
                            <rect x="182" y="6" width="50" height="48" />
                            <line x1="6" y1="30" x2="232" y2="30" strokeDasharray="2 2" />
                          </g>
                        </svg>
                      </div>
                      <div className="floor-content">
                        <div className="floor-num">06</div>
                        <div className="floor-name"><span data-tr>Anahtar Teslim</span><span data-en>Handover</span></div>
                        <div className="floor-meta">CH 06 · 22m</div>
                      </div>
                    </div>

                    <div className="bldg-floor" data-floor="4" role="listitem">
                      <div className="floor-pattern" aria-hidden="true">
                        <svg viewBox="0 0 240 60" preserveAspectRatio="none">
                          <g stroke="#14140f" strokeWidth="0.6" fill="none">
                            <path d="M 6 30 L 232 30" />
                            <path d="M 6 6 L 232 54" strokeDasharray="2 2" />
                            <path d="M 6 54 L 232 6" strokeDasharray="2 2" />
                            <circle cx="60" cy="30" r="8" />
                            <circle cx="120" cy="30" r="8" />
                            <circle cx="180" cy="30" r="8" />
                          </g>
                        </svg>
                      </div>
                      <div className="floor-content">
                        <div className="floor-num">05</div>
                        <div className="floor-name"><span data-tr>İnşaat &amp; Denetim</span><span data-en>Construction &amp; Oversight</span></div>
                        <div className="floor-meta">CH 05 · 18m</div>
                      </div>
                    </div>

                    <div className="bldg-floor" data-floor="3" role="listitem">
                      <div className="floor-pattern" aria-hidden="true">
                        <svg viewBox="0 0 240 60" preserveAspectRatio="none">
                          <g stroke="#14140f" strokeWidth="0.6" fill="none">
                            <rect x="10" y="10" width="60" height="40" />
                            <rect x="74" y="10" width="80" height="40" />
                            <rect x="158" y="10" width="74" height="40" />
                            <line x1="40" y1="10" x2="40" y2="50" />
                            <line x1="120" y1="10" x2="120" y2="50" />
                            <line x1="200" y1="10" x2="200" y2="50" />
                          </g>
                        </svg>
                      </div>
                      <div className="floor-content">
                        <div className="floor-num">04</div>
                        <div className="floor-name"><span data-tr>Mimari Proje &amp; Ruhsat</span><span data-en>Design &amp; Permitting</span></div>
                        <div className="floor-meta">CH 04 · 14m</div>
                      </div>
                    </div>

                    <div className="bldg-floor" data-floor="2" role="listitem">
                      <div className="floor-pattern" aria-hidden="true">
                        <svg viewBox="0 0 240 60" preserveAspectRatio="none">
                          <g stroke="#14140f" strokeWidth="0.6" fill="none">
                            <line x1="6" y1="20" x2="232" y2="20" />
                            <line x1="6" y1="40" x2="232" y2="40" />
                            <g>
                              <circle cx="40" cy="20" r="3" />
                              <circle cx="80" cy="20" r="3" />
                              <circle cx="120" cy="20" r="3" />
                              <circle cx="160" cy="20" r="3" />
                              <circle cx="200" cy="20" r="3" />
                            </g>
                            <g>
                              <circle cx="40" cy="40" r="3" />
                              <circle cx="80" cy="40" r="3" />
                              <circle cx="120" cy="40" r="3" />
                              <circle cx="160" cy="40" r="3" />
                              <circle cx="200" cy="40" r="3" />
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div className="floor-content">
                        <div className="floor-num">03</div>
                        <div className="floor-name"><span data-tr>Hak Sahipleri Anlaşması</span><span data-en>Stakeholder Agreement</span></div>
                        <div className="floor-meta">CH 03 · 10m</div>
                      </div>
                    </div>

                    <div className="bldg-floor" data-floor="1" role="listitem">
                      <div className="floor-pattern" aria-hidden="true">
                        <svg viewBox="0 0 240 60" preserveAspectRatio="none">
                          <g stroke="#14140f" strokeWidth="0.6" fill="none">
                            <path d="M 10 50 L 50 10 L 90 50" />
                            <path d="M 100 50 L 140 10 L 180 50" />
                            <path d="M 30 50 L 30 30 L 70 30 L 70 50" />
                            <line x1="6" y1="50" x2="232" y2="50" />
                          </g>
                        </svg>
                      </div>
                      <div className="floor-content">
                        <div className="floor-num">02</div>
                        <div className="floor-name"><span data-tr>Risk Raporu &amp; Test</span><span data-en>Risk Report &amp; Testing</span></div>
                        <div className="floor-meta">CH 02 · 6m</div>
                      </div>
                    </div>

                    <div className="bldg-floor is-active" data-floor="0" role="listitem">
                      <div className="floor-pattern" aria-hidden="true">
                        <svg viewBox="0 0 240 60" preserveAspectRatio="none">
                          <g stroke="#14140f" strokeWidth="0.6" fill="none">
                            <path d="M 0 30 L 240 30" strokeDasharray="4 2" />
                            <path d="M 30 20 L 60 40 L 90 20" />
                            <path d="M 110 40 L 140 20 L 170 40" />
                            <path d="M 190 30 L 220 30" />
                            <circle cx="50" cy="30" r="5" />
                            <circle cx="130" cy="30" r="5" />
                            <circle cx="210" cy="30" r="5" />
                          </g>
                        </svg>
                      </div>
                      <div className="floor-content">
                        <div className="floor-num">01</div>
                        <div className="floor-name"><span data-tr>Tespit &amp; Saha Analizi</span><span data-en>Site Assessment</span></div>
                        <div className="floor-meta">CH 01 · 3m</div>
                      </div>
                    </div>
                  </div>

                  <div className="bldg-ground" aria-hidden="true"></div>

                  {/* Notes column */}
                  <div className="bldg-notes" aria-hidden="true">
                    <div className="bldg-note"><strong><span data-tr>06 · ÇATI</span><span data-en>06 · ROOF</span></strong><span data-tr>İskân + tapu</span><span data-en>Permit + title</span></div>
                    <div className="bldg-note"><strong>05 · İNŞAAT</strong><span data-tr>14–22 ay</span><span data-en>14–22 mo</span></div>
                    <div className="bldg-note"><strong><span data-tr>04 · TASARIM</span><span data-en>04 · DESIGN</span></strong><span data-tr>3–5 ay</span><span data-en>3–5 mo</span></div>
                    <div className="bldg-note"><strong>03 · ANLAŞMA</strong><span data-tr>2–4 ay</span><span data-en>2–4 mo</span></div>
                    <div className="bldg-note"><strong>02 · TEST</strong><span data-tr>3–6 hafta</span><span data-en>3–6 wk</span></div>
                    <div className="bldg-note"><strong>01 · TESPİT</strong><span data-tr>5–10 gün</span><span data-en>5–10 days</span></div>
                  </div>
                </div>
              </div>

              {/* RIGHT: step details panel */}
              <div className="proc-panel">

                <div className="step-tag" data-tr>AKTİF FAZ</div>
                <div className="step-tag-en step-tag" data-en style={{display: "none"}}>ACTIVE PHASE</div>

                <div className="step-no"><span className="cur">01</span><span className="total">/ 06</span></div>

                <h3 className="step-title">
                  <span className="title-content">
                    <span data-tr>Tespit &amp; Saha Analizi</span>
                    <span data-en>Site Assessment</span>
                  </span>
                </h3>

                <p className="step-desc">
                  <span className="desc-content">
                    <span data-tr>Mevcut yapının fiziksel durumu, parsel imar hakları, çevre dokusu ve hak sahibi profili incelenir. Saha gezisi, fotoğraflama ve ilk bütçe çerçevesi 5–10 gün içinde teslim edilir.</span>
                    <span data-en>We inspect the structure, parcel zoning, surrounding fabric and stakeholder profile. A site walk, photographic record and a first budget envelope land within 5–10 days.</span>
                  </span>
                </p>

                <dl className="step-grid">
                  <div>
                    <dt><span data-tr>Süre</span><span data-en>Duration</span></dt>
                    <dd className="dur"><span data-tr>5–10 gün</span><span data-en>5–10 days</span></dd>
                  </div>
                  <div>
                    <dt><span data-tr>Maliyet</span><span data-en>Cost</span></dt>
                    <dd className="cost"><span data-tr>Ücretsiz</span><span data-en>Free</span></dd>
                  </div>
                </dl>

                <div className="proc-controls">
                  <button data-proc="prev" aria-label="Önceki adım" disabled>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 6l-6 6 6 6" /></svg>
                  </button>
                  <button data-proc="next" aria-label="Sonraki adım">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 6l6 6-6 6" /></svg>
                  </button>
                  <button data-proc="auto" className="pill">
                    <span data-tr>Otomatik</span><span data-en>Auto</span>
                  </button>
                  <span className="spacer"></span>
                  <span className="progress-text"><span data-tr>FAZ</span><span data-en>PHASE</span> <span className="cur-pad">01</span>/06</span>
                </div>
              </div>
            </div>

            {/* Hidden source-of-truth content for each step (read by JS) */}
            <template id="proc-data" dangerouslySetInnerHTML={{__html: PROC_DATA_HTML}} />

          </div>
        </section>

        {/* =========================================================
             FAQ
             ========================================================= */}
        <section className="faq" id="faq" aria-labelledby="faq-h">
          <div className="shell">
            <div className="faq-grid">
              <aside className="faq-aside">
                <div className="meta-line eyebrow" style={{marginBottom: "24px"}}>
                  <span data-tr>05 · SIK SORULANLAR</span><span data-en>05 · QUESTIONS</span>
                </div>
                <h2 id="faq-h">
                  <span data-tr>Kentsel dönüşüm, <span className="accent">sade Türkçe.</span></span>
                  <span data-en>Urban renewal, <span className="accent">plainly explained.</span></span>
                </h2>
                <p className="help">
                  <span data-tr>Cevabını bulamadığınız bir konu varsa <a href="/iletisim">iletişim formundan</a> yazın — 24 saat içinde dönüş yapıyoruz.</span>
                  <span data-en>Can't find what you need? <a href="/iletisim">Drop us a note</a> — we reply within 24 hours.</span>
                </p>
              </aside>

              <div className="faq-list" role="list">

                <div className="faq-item is-open" role="listitem">
                  <button className="faq-q" type="button" aria-expanded="true">
                    <span className="num">Q · 01</span>
                    <span>
                      <span data-tr>Binam kentsel dönüşüm kapsamına nasıl alınır?</span>
                      <span data-en>How do I get my building into the urban-renewal scheme?</span>
                    </span>
                    <span className="ico" aria-hidden="true"></span>
                  </button>
                  <div className="faq-a"><div><div className="faq-a-inner">
                    <p>
                      <span data-tr>Bakanlık lisanslı bir kuruluştan Deprem Risk Raporu alınır. Karot ve statik testler sonucunda yapı "riskli" çıkarsa 6306 sayılı kanun kapsamına otomatik girer. Piran, başvurudan tapudan yıkım iznine kadar tüm yazışmaları sizin adınıza yürütür.</span>
                      <span data-en>You commission a Seismic Risk Report from a Ministry-licensed lab. If core and structural testing flag the building as "risky," it automatically falls under Law 6306. Piran handles every filing — from application to demolition permit.</span>
                    </p>
                  </div></div></div>
                </div>

                <div className="faq-item" role="listitem">
                  <button className="faq-q" type="button" aria-expanded="false">
                    <span className="num">Q · 02</span>
                    <span>
                      <span data-tr>Kira yardımı nedir, kimler faydalanabilir?</span>
                      <span data-en>What is rent assistance and who qualifies?</span>
                    </span>
                    <span className="ico" aria-hidden="true"></span>
                  </button>
                  <div className="faq-a"><div><div className="faq-a-inner">
                    <p>
                      <span data-tr>Riskli yapı ilan edilen binalarda Çevre ve Şehircilik Bakanlığı tarafından 18 aya kadar kira yardımı verilir. Hem malik hem kiracı, hisseleri oranında ve yıllık güncel bedel üzerinden faydalanır. Aynı kişi hem kira yardımı hem faiz desteğinden eş zamanlı yararlanamaz.</span>
                      <span data-en>Buildings flagged "risky" qualify for up to 18 months of rent assistance from the Ministry. Both owners and tenants benefit, pro-rata. The same person cannot receive both rent assistance and the interest subsidy at once.</span>
                    </p>
                  </div></div></div>
                </div>

                <div className="faq-item" role="listitem">
                  <button className="faq-q" type="button" aria-expanded="false">
                    <span className="num">Q · 03</span>
                    <span>
                      <span data-tr>Tüm süreç ne kadar sürer?</span>
                      <span data-en>How long does the whole process take?</span>
                    </span>
                    <span className="ico" aria-hidden="true"></span>
                  </button>
                  <div className="faq-a"><div><div className="faq-a-inner">
                    <p>
                      <span data-tr>Risk raporundan anahtar teslime kadar tipik süre 24 ile 36 ay arasındadır. Hak sahibi sayısı, parselin imar durumu ve seçilen kalite çizgisi bu süreyi etkiler. Piran her aşama için açık takvimi sözleşmede taahhüt eder.</span>
                      <span data-en>A typical timeline runs 24 to 36 months from risk report to handover. Stakeholder count, parcel zoning and the chosen finish level all factor in.</span>
                    </p>
                  </div></div></div>
                </div>

                <div className="faq-item" role="listitem">
                  <button className="faq-q" type="button" aria-expanded="false">
                    <span className="num">Q · 04</span>
                    <span>
                      <span data-tr>Salt çoğunluk nedir, anlaşmayan azınlık ne olur?</span>
                      <span data-en>What is the simple majority — and what happens to dissenters?</span>
                    </span>
                    <span className="ico" aria-hidden="true"></span>
                  </button>
                  <div className="faq-a"><div><div className="faq-a-inner">
                    <p>
                      <span data-tr>9 Kasım 2023&apos;te yürürlüğe giren 7471 sayılı kanun ile 6306 sayılı kanundaki 2/3 çoğunluk şartı kaldırıldı; karar artık hisseleri oranında <strong>salt çoğunluk</strong> (yarıdan bir fazla) ile alınabiliyor. Anlaşmaya katılmayan paydaşların arsa payı, Bakanlık denetiminde rayiç bedel üzerinden açık artırma usulüyle anlaşan paydaşlara satılır. Piran, hukuki ve teknik tarafı sizin adınıza yürütür.</span>
                      <span data-en>Law 7471 (in force since 9 November 2023) removed the 2/3 majority requirement of Law 6306; decisions can now be made by a <strong>simple share majority</strong> (one more than half). Shares of stakeholders who do not join the agreement are sold to the agreeing parties by public auction at market value under Ministry supervision. Piran handles the legal and technical work on your behalf.</span>
                    </p>
                  </div></div></div>
                </div>

                <div className="faq-item" role="listitem">
                  <button className="faq-q" type="button" aria-expanded="false">
                    <span className="num">Q · 05</span>
                    <span>
                      <span data-tr>Hibe, kredi ve faiz desteği nasıl çalışır?</span>
                      <span data-en>How do grants, credit and interest subsidy work?</span>
                    </span>
                    <span className="ico" aria-hidden="true"></span>
                  </button>
                  <div className="faq-a"><div><div className="faq-a-inner">
                    <p>
                      <span data-tr>Bakanlık üç farklı destek sunar: doğrudan hibe, düşük faizli kredi ve kira yardımı. Aynı kişi hibe ile kira yardımını birlikte alamaz; ancak bunlardan birini krediyle birleştirebilir. Piran, kendi finansman profilinize göre en uygun karışımı hesaplar ve başvuru evraklarını biz hazırlarız.</span>
                      <span data-en>The Ministry offers three instruments: a direct grant, a low-rate loan and rent assistance. The same person cannot stack a grant with rent assistance, but either can be combined with the loan. Piran models the optimal mix for your financial profile and handles the paperwork.</span>
                    </p>
                  </div></div></div>
                </div>

                <div className="faq-item" role="listitem">
                  <button className="faq-q" type="button" aria-expanded="false">
                    <span className="num">Q · 06</span>
                    <span>
                      <span data-tr>Müteahhit seçimi ve sözleşme süreci nasıl ilerler?</span>
                      <span data-en>How does contractor selection and contracting work?</span>
                    </span>
                    <span className="ico" aria-hidden="true"></span>
                  </button>
                  <div className="faq-a"><div><div className="faq-a-inner">
                    <p>
                      <span data-tr>Hak sahipleri, projeyi kendileri yürütebileceği gibi, anahtar teslim usulüyle bir müteahhide de devredebilir. Piran her iki modelde de ihale şartnamesi, teknik şartname ve sözleşme metnini hazırlar; iş ilerleme ödemelerini, kalite kontrolünü ve teslim öncesi kabulü bağımsız olarak denetler.</span>
                      <span data-en>Owners can either run construction themselves or hand it over to a turnkey contractor. Piran prepares the tender, technical specification and contract for both models — and independently audits progress payments, quality control and pre-handover acceptance.</span>
                    </p>
                  </div></div></div>
                </div>

                <div className="faq-item" role="listitem">
                  <button className="faq-q" type="button" aria-expanded="false">
                    <span className="num">Q · 07</span>
                    <span>
                      <span data-tr>&quot;Yarısı Bizden&quot; kampanyası nedir, kim faydalanabilir?</span>
                      <span data-en>What is the &quot;Yarısı Bizden&quot; campaign and who can benefit?</span>
                    </span>
                    <span className="ico" aria-hidden="true"></span>
                  </button>
                  <div className="faq-a"><div><div className="faq-a-inner">
                    <p>
                      <span data-tr>Çevre, Şehircilik ve İklim Değişikliği Bakanlığı&apos;nın 2023&apos;te başlattığı ve 31 Aralık 2026&apos;ya kadar uzatılan kentsel dönüşüm destek paketidir. İstanbul&apos;daki 39 ilçeyi kapsar. Riskli yapı raporu alan binalarda her bağımsız bölüm için 875.000 TL hibe + 875.000 TL kredi + 125.000 TL taşınma yardımı verilir. Başvuru ve evrak süreçlerinin tamamını biz yönetiyoruz. Detaylı bilgi için Bakanlığın <a href="https://www.csb.gov.tr/yarisi-bizden-de-merak-edilen-sorular-ve-yanitlari-bakanlik-faaliyetleri-41630" target="_blank" rel="noopener noreferrer">kampanya sayfasına</a> bakabilirsiniz.</span>
                      <span data-en>A Ministry of Environment, Urbanism &amp; Climate Change program launched in 2023, extended through 31 December 2026. It covers 39 districts of Istanbul. Each unit in a building with a risk report receives ₺875,000 grant + ₺875,000 credit + ₺125,000 relocation assistance. We manage the entire application and paperwork on your behalf. See the Ministry&apos;s <a href="https://www.csb.gov.tr/yarisi-bizden-de-merak-edilen-sorular-ve-yanitlari-bakanlik-faaliyetleri-41630" target="_blank" rel="noopener noreferrer">official campaign page</a> for details.</span>
                    </p>
                  </div></div></div>
                </div>

                <div className="faq-item" role="listitem">
                  <button className="faq-q" type="button" aria-expanded="false">
                    <span className="num">Q · 08</span>
                    <span>
                      <span data-tr>İstanbul&apos;a özel 3 milyon TL&apos;lik yeni destek paketi nedir?</span>
                      <span data-en>What is the new ₺3 million Istanbul support package?</span>
                    </span>
                    <span className="ico" aria-hidden="true"></span>
                  </button>
                  <div className="faq-a"><div><div className="faq-a-inner">
                    <p>
                      <span data-tr>Çevre, Şehircilik ve İklim Değişikliği Bakanlığı&apos;nın 3 Nisan 2026&apos;da duyurduğu, Dünya Bankası finansmanlı &quot;İklim ve Afetlere Dayanıklı Şehirler Projesi&quot; kapsamındaki yeni destek paketidir. Acil dönüşmesi gereken konutlara kadar 3 milyon TL kredi imkânı sağlar: inşaat süresince 1 yıl ödemesiz, 180 ay (15 yıl) vade ve aylık 0,69 faizle (yıllık maliyet %10&apos;un altında). Başvurular Bakanlık duyurusu ile birlikte açıldı. <a href="https://csb.gov.tr/haberler/bakan-kurum-istanbul-un-donusumu-icin-yeni-destek-paketini-acikladi-304634" target="_blank" rel="noopener noreferrer">Bakanlık duyurusu</a>.</span>
                      <span data-en>Announced by the Ministry of Environment, Urbanism &amp; Climate Change on 3 April 2026 under the World Bank-funded &quot;Climate and Disaster-Resilient Cities Project&quot;. Provides up to ₺3 million in credit support for residences requiring urgent transformation: 1 year payment-free during construction, 180-month (15-year) maturity, monthly 0.69% interest (annual cost below 10%). Applications opened with the Ministry announcement. <a href="https://csb.gov.tr/haberler/bakan-kurum-istanbul-un-donusumu-icin-yeni-destek-paketini-acikladi-304634" target="_blank" rel="noopener noreferrer">Ministry announcement</a>.</span>
                    </p>
                  </div></div></div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
             CTA — full-bleed accent
             ========================================================= */}
        <section className="cta" aria-labelledby="cta-h">
          <div className="shell">
            <div className="cta-grid">
              <div>
                <div className="meta-line eyebrow" style={{marginBottom: "20px", color: "rgba(255,255,255,.55)"}}>
                  <span data-tr>06 · İLK ADIM</span><span data-en>06 · NEXT STEP</span>
                </div>
                <h2 id="cta-h">
                  <span data-tr>Binanız sürecin <span className="knockout">neresinde</span> olursa olsun, <span className="knockout">başlayabiliriz.</span></span>
                  <span data-en>Wherever your <span className="knockout">building</span> is in the process, <span className="knockout">we can start.</span></span>
                </h2>
                <p className="lead">
                  <span data-tr>İlk değerlendirme ücretsizdir. Adres ve kısa bilginizi bırakın; 24 saat içinde lisanslı keşif ekibimizle randevunuzu planlayalım.</span>
                  <span data-en>The first consultation is free. Share an address and a short note — we&apos;ll line up a site visit within 24 hours.</span>
                </p>
              </div>
              <div className="cta-actions">
                <span className="label"><span data-tr>Doğrudan arayın</span><span data-en>Call us directly</span></span>
                <a href="tel:+908503464652" className="phone">0850 346 46 52</a>
                <a href="/iletisim" className="btn btn-primary" style={{marginTop: "8px"}}>
                  <span data-tr>Keşif planla</span><span data-en>Book a site visit</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                </a>
              </div>
            </div>
            <dl className="cta-meta">
              <div><dt><span data-tr>Adres</span><span data-en>Address</span></dt><dd>Küçük Çamlıca Mah. Libadiye Cad. No 52<br />Üsküdar / İstanbul</dd></div>
              <div><dt><span data-tr>E-posta</span><span data-en>Email</span></dt><dd>info@pirangyd.com</dd></div>
              <div><dt><span data-tr>Çalışma saatleri</span><span data-en>Hours</span></dt><dd><span data-tr>Pzt–Cum · 09:00–18:30</span><span data-en>Mon–Fri · 09:00–18:30</span></dd></div>
              <div><dt><span data-tr>Yanıt</span><span data-en>Response</span></dt><dd><span data-tr>24 saat içinde</span><span data-en>Within 24 hours</span></dd></div>
            </dl>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
