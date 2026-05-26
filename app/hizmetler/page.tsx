import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title:
    "Kentsel Dönüşüm, Değerleme, İnşaat ve Yatırım Hizmetleri",
  description:
    "İstanbul'da kentsel dönüşüm danışmanlığı, SPK lisanslı gayrimenkul değerleme, anahtar teslim inşaat ve yatırım danışmanlığı. 6306-7471 sayılı kanun süreçleri, risk raporu, salt çoğunluk, hibe ve kira yardımı.",
  keywords: [
    "kentsel dönüşüm danışmanlığı",
    "İstanbul kentsel dönüşüm şirketi",
    "Üsküdar kentsel dönüşüm",
    "Anadolu Yakası kentsel dönüşüm",
    "SPK lisanslı değerleme",
    "gayrimenkul değerleme İstanbul",
    "anahtar teslim inşaat",
    "müteahhit danışmanlık",
    "yatırım danışmanlığı",
    "Yarısı Bizden",
    "kira yardımı başvurusu",
  ],
  alternates: {
    canonical: "https://www.pirangyd.com/hizmetler",
    languages: {
      tr: "https://www.pirangyd.com/hizmetler",
      en: "https://www.pirangyd.com/hizmetler?lang=en",
    },
  },
  openGraph: {
    title: "Kentsel Dönüşüm, Değerleme, İnşaat ve Yatırım Hizmetleri",
    description:
      "İstanbul'da risk raporundan anahtar teslime kadar dört hizmet, tek muhatap.",
    url: "https://www.pirangyd.com/hizmetler",
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
      name: "Hizmetler",
      item: "https://www.pirangyd.com/hizmetler",
    },
  ],
};

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(BREADCRUMB_JSON_LD),
          }}
        />
        {/* Page hero */}
        <section className="page-hero">
          <div className="shell">
            <div className="page-hero-bar">
              <div className="left"><span className="dot-pulse"></span>&nbsp;&nbsp;OFİS · KÜÇÜK ÇAMLICA / İST · 41°00′N 29°03′E</div>
              <div className="center"><span data-tr>HİZMETLER · DÖRT DİSİPLİN</span><span data-en>SERVICES · FOUR DISCIPLINES</span></div>
              <div className="right">SCALE 1:1 · DRWG · PRN/2026/SVC</div>
            </div>

            <div className="page-hero-grid">
              <div>
                <div className="page-hero-tag">
                  <span className="num">02</span>
                  <span className="bar"></span>
                  <span data-tr>Hizmetler Kataloğu</span><span data-en>Service Catalogue</span>
                </div>
                <h1>
                  <span data-tr>Dört bölüm. <span className="ghost">Bir</span> <span className="accent">çatı</span>.</span>
                  <span data-en>Four disciplines. <span className="ghost">One</span> <span className="accent">roof</span>.</span>
                </h1>
              </div>
              <div className="page-hero-aside">
                <nav className="breadcrumb" aria-label="Ekmek kırıntısı">
                  <a href="/"><span data-tr>Anasayfa</span><span data-en>Home</span></a>
                  <span>/</span>
                  <span><span data-tr>Hizmetler</span><span data-en>Services</span></span>
                </nav>
                <p>
                  <span data-tr>Kentsel dönüşüm, gayrimenkul değerleme, anahtar teslim inşaat ve kurumsal yatırım danışmanlığı — her biri kendi başına butik bir firma niteliğinde, ama tek bir sözleşme altında.</span>
                  <span data-en>Urban renewal, valuation, turnkey construction and institutional investment advisory — each a boutique practice in its own right, but always under one contract.</span>
                </p>
                <dl className="meta-block">
                  <div><dt><span data-tr>Bölüm sayısı</span><span data-en>Departments</span></dt><dd>04</dd></div>
                  <div><dt><span data-tr>Sözleşme</span><span data-en>Contracts</span></dt><dd>01</dd></div>
                  <div><dt><span data-tr>İlçe</span><span data-en>Districts</span></dt><dd>23</dd></div>
                  <div><dt><span data-tr>Lisans</span><span data-en>Licenses</span></dt><dd>SPK · ÇŞB</dd></div>
                </dl>
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
              <span>ANAHTAR TESLİM İNŞAAT</span><span className="dia"></span>
              <span>YATIRIM DANIŞMANLIĞI</span><span className="dia"></span>
              <span>6306 SAYILI KANUN</span><span className="dia"></span>
              <span>RİSK RAPORU</span><span className="dia"></span>
              <span>KİRA YARDIMI</span><span className="dia"></span>
            </div>
            <div>
              <span>KENTSEL DÖNÜŞÜM</span><span className="dia"></span>
              <span>SPK DEĞERLEME</span><span className="dia"></span>
              <span>ANAHTAR TESLİM İNŞAAT</span><span className="dia"></span>
              <span>YATIRIM DANIŞMANLIĞI</span><span className="dia"></span>
              <span>6306 SAYILI KANUN</span><span className="dia"></span>
              <span>RİSK RAPORU</span><span className="dia"></span>
              <span>KİRA YARDIMI</span><span className="dia"></span>
            </div>
          </div>
        </div>

        {/* 01 — Kentsel Dönüşüm */}
        <section className="long-section" id="kentsel-donusum">
          <div className="shell">
            <div className="svc-row">
              <div className="svc-head">
                <div className="label">
                  <span>D / 01</span>
                  <span><span data-tr>BÖLÜM</span><span data-en>DEPARTMENT</span></span>
                </div>
                <div className="num-big">01</div>
                <h2>
                  <span data-tr>Kentsel Dönüşüm</span>
                  <span data-en>Urban Transformation</span>
                </h2>
                <div className="tags">
                  <span className="tag">6306</span>
                  <span className="tag"><span data-tr>Risk Raporu</span><span data-en>Risk Report</span></span>
                  <span className="tag"><span data-tr>Hak Sahipleri</span><span data-en>Stakeholders</span></span>
                  <span className="tag"><span data-tr>Kira Yardımı</span><span data-en>Rent Aid</span></span>
                </div>
              </div>
              <div className="svc-body">
                <p className="lead">
                  <span data-tr>6306 sayılı kanun kapsamında riskli yapı tespitinden anahtar teslime kadar tüm sürecin yönetimi. Bina ölçeğinden mahalle ölçeğine, münferit malikten hak sahipleri kuruluna kadar her büyüklükte projeyi tek dosyada yürütüyoruz.</span>
                  <span data-en>Full management of the Law 6306 process — from risky-building assessment to handover. Single-owner buildings or neighbourhood-scale schemes, every job in one file.</span>
                </p>

                <div className="svc-list">
                  <div className="item"><div className="n">01</div><div><h4><span data-tr>Riskli Yapı Tespiti</span><span data-en>Risky-Building Assessment</span></h4><p><span data-tr>Bakanlık lisanslı kuruluş, karot ve statik analiz, idare onayı.</span><span data-en>Ministry-licensed lab, core sampling, structural analysis, authority filing.</span></p></div></div>
                  <div className="item"><div className="n">02</div><div><h4><span data-tr>Hak Sahipleri Yönetimi</span><span data-en>Stakeholder Management</span></h4><p><span data-tr>Salt çoğunluk toplantısı, pay tablosu, noter sözleşmesi, anlaşmazlık çözümü.</span><span data-en>Simple majority meetings, share allocation table, notarized contracts, dispute resolution.</span></p></div></div>
                  <div className="item"><div className="n">03</div><div><h4><span data-tr>Kira Yardımı &amp; Faiz Desteği</span><span data-en>Rent Aid &amp; Subsidy</span></h4><p><span data-tr>Bakanlık başvurusu, 18 ay kira yardımı, anlaşmalı banka faiz desteği.</span><span data-en>Ministry application, 18-month rent assistance, partner-bank interest subsidy.</span></p></div></div>
                  <div className="item"><div className="n">04</div><div><h4><span data-tr>"Yarısı Bizden" Programı</span><span data-en>"Half from Us" Programme</span></h4><p><span data-tr>Düşük gelirli vatandaşlar için yapım maliyetinin %50'sine kadar devlet desteği.</span><span data-en>Up to 50% construction-cost support for qualifying low-income owners.</span></p></div></div>
                  <div className="item"><div className="n">05</div><div><h4><span data-tr>Yıkım &amp; Ruhsat</span><span data-en>Demolition &amp; Permits</span></h4><p><span data-tr>Yıkım ruhsatı, çevre güvenliği, atık yönetimi, yeni yapı ruhsatı.</span><span data-en>Demolition permit, environmental safety, waste management, new build permit.</span></p></div></div>
                  <div className="item"><div className="n">06</div><div><h4><span data-tr>Hak Sahipleri Paneli</span><span data-en>Stakeholder Dashboard</span></h4><p><span data-tr>Pay, ödeme planı ve teslim takvimini 7/24 takip eden malik portalı.</span><span data-en>24/7 owner portal tracking share, payment plan and delivery schedule.</span></p></div></div>
                </div>

                <div className="svc-deliv">
                  <div className="label"><span data-tr>Teslim Belgeleri</span><span data-en>Deliverables</span></div>
                  <div className="docs">
                    <span className="doc"><span data-tr>Risk Raporu</span><span data-en>Risk Report</span></span>
                    <span className="doc"><span data-tr>Pay Tablosu</span><span data-en>Share Table</span></span>
                    <span className="doc"><span data-tr>Sözleşme</span><span data-en>Contract</span></span>
                    <span className="doc"><span data-tr>Ruhsat</span><span data-en>Permit</span></span>
                    <span className="doc"><span data-tr>İskân</span><span data-en>Occupancy</span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 02 — Değerleme */}
        <section className="long-section" id="degerleme">
          <div className="shell">
            <div className="svc-row">
              <div className="svc-head">
                <div className="label"><span>D / 02</span><span><span data-tr>BÖLÜM</span><span data-en>DEPARTMENT</span></span></div>
                <div className="num-big">02</div>
                <h2>
                  <span data-tr>Gayrimenkul Değerleme</span>
                  <span data-en>Property Valuation</span>
                </h2>
                <div className="tags">
                  <span className="tag">SPK</span>
                  <span className="tag"><span data-tr>Konut</span><span data-en>Residential</span></span>
                  <span className="tag"><span data-tr>Ticari</span><span data-en>Commercial</span></span>
                  <span className="tag"><span data-tr>Arsa</span><span data-en>Land</span></span>
                  <span className="tag">BDDK</span>
                </div>
              </div>
              <div className="svc-body">
                <p className="lead">
                  <span data-tr>SPK lisanslı uzman değerleme uzmanlarımız konut, ticari, sanayi, arsa ve karma kullanım için bankalar, fonlar ve yargı süreçlerinde kabul gören raporlar hazırlar. Karşılaştırmalı satış, gelir yaklaşımı ve maliyet yöntemi — uygun olan modelde.</span>
                  <span data-en>Our SPK-licensed appraisers produce reports for residential, commercial, industrial, land and mixed-use assets — accepted by banks, funds and the courts. Comparable sales, income capitalisation or cost approach, whichever fits.</span>
                </p>

                <div className="svc-list">
                  <div className="item"><div className="n">01</div><div><h4><span data-tr>Konut Değerleme</span><span data-en>Residential Appraisal</span></h4><p><span data-tr>Daire, villa, müstakil ev — kredi, satış, miras paylaşımı için.</span><span data-en>Apartments, villas, detached homes — for financing, sale, inheritance.</span></p></div></div>
                  <div className="item"><div className="n">02</div><div><h4><span data-tr>Ticari Gayrimenkul</span><span data-en>Commercial Real Estate</span></h4><p><span data-tr>Plaza, ofis, mağaza, AVM, otel — gelir yaklaşımı ve kira analizi.</span><span data-en>Plazas, offices, retail, malls, hotels — income approach with rent analysis.</span></p></div></div>
                  <div className="item"><div className="n">03</div><div><h4><span data-tr>Arsa &amp; Parsel</span><span data-en>Land &amp; Parcel</span></h4><p><span data-tr>İmar haklarına göre değerleme, parsel toplama fizibilitesi.</span><span data-en>Zoning-based valuation, parcel-assembly feasibility studies.</span></p></div></div>
                  <div className="item"><div className="n">04</div><div><h4><span data-tr>Karma Kullanım</span><span data-en>Mixed-Use</span></h4><p><span data-tr>Konut + ticari + ofis kombinasyonları için karma değerleme.</span><span data-en>Blended valuation for residential + retail + office combinations.</span></p></div></div>
                  <div className="item"><div className="n">05</div><div><h4><span data-tr>İpotek &amp; Teminat</span><span data-en>Mortgage &amp; Collateral</span></h4><p><span data-tr>BDDK uyumlu banka raporları, ipotek ve teminat değerlemesi.</span><span data-en>BDDK-compliant bank reports for mortgage and collateral.</span></p></div></div>
                  <div className="item"><div className="n">06</div><div><h4><span data-tr>Yargı &amp; Tahkim</span><span data-en>Litigation &amp; Arbitration</span></h4><p><span data-tr>Mahkeme uzmanlık raporu, tahkim ve KDV uyuşmazlıkları için.</span><span data-en>Court expertise reports, arbitration and VAT-dispute appraisals.</span></p></div></div>
                </div>

                <div className="svc-deliv">
                  <div className="label"><span data-tr>Teslim Belgeleri</span><span data-en>Deliverables</span></div>
                  <div className="docs">
                    <span className="doc"><span data-tr>Değerleme Raporu</span><span data-en>Appraisal Report</span></span>
                    <span className="doc"><span data-tr>Kira Analizi</span><span data-en>Rent Analysis</span></span>
                    <span className="doc"><span data-tr>Karşılaştırma</span><span data-en>Comparables</span></span>
                    <span className="doc"><span data-tr>Fizibilite</span><span data-en>Feasibility</span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 03 — İnşaat */}
        <section className="long-section" id="insaat">
          <div className="shell">
            <div className="svc-row">
              <div className="svc-head">
                <div className="label"><span>D / 03</span><span><span data-tr>BÖLÜM</span><span data-en>DEPARTMENT</span></span></div>
                <div className="num-big">03</div>
                <h2>
                  <span data-tr>İnşaat &amp; Anahtar Teslim</span>
                  <span data-en>Construction &amp; Turnkey</span>
                </h2>
                <div className="tags">
                  <span className="tag"><span data-tr>Mimari</span><span data-en>Architecture</span></span>
                  <span className="tag"><span data-tr>Statik</span><span data-en>Structural</span></span>
                  <span className="tag">MEP</span>
                  <span className="tag"><span data-tr>İnce İş</span><span data-en>Finishes</span></span>
                  <span className="tag"><span data-tr>Peyzaj</span><span data-en>Landscape</span></span>
                </div>
              </div>
              <div className="svc-body">
                <p className="lead">
                  <span data-tr>Kazıdan kat irtifakına, kaba inşaattan ince işlere, mimari detaydan peyzaja kadar anahtar teslim yapım. Tüm yan kollar (mimari, statik, mekanik, elektrik) bünyemizde; alt yüklenicilik yok, sorumluluk paslaşılmaz.</span>
                  <span data-en>From groundworks to title registration, shell to finishes, architectural detail to landscape — full turnkey delivery. Every discipline (design, structural, MEP, electrical) is in-house: no subcontracted bottlenecks.</span>
                </p>

                <div className="svc-list">
                  <div className="item"><div className="n">01</div><div><h4><span data-tr>Mimari Tasarım</span><span data-en>Architectural Design</span></h4><p><span data-tr>Avan, uygulama ve ihale projeleri; iç mimari koordinasyon.</span><span data-en>Concept, working and tender drawings; interior coordination.</span></p></div></div>
                  <div className="item"><div className="n">02</div><div><h4><span data-tr>Statik &amp; Geoteknik</span><span data-en>Structural &amp; Geotechnical</span></h4><p><span data-tr>Zemin etüdü, betonarme/çelik hesaplar, deprem yönetmeliği uyumu.</span><span data-en>Soil survey, RC/steel calculations, seismic-code compliance.</span></p></div></div>
                  <div className="item"><div className="n">03</div><div><h4><span data-tr>Mekanik &amp; Elektrik</span><span data-en>MEP &amp; Electrical</span></h4><p><span data-tr>Isıtma-soğutma, sıhhi tesisat, yangın algılama, zayıf akım, yenilenebilir entegrasyon.</span><span data-en>HVAC, plumbing, fire detection, low-voltage, renewables integration.</span></p></div></div>
                  <div className="item"><div className="n">04</div><div><h4><span data-tr>Kaba İnşaat</span><span data-en>Shell &amp; Core</span></h4><p><span data-tr>Kazı, iksa, temel, betonarme — kendi şantiye kadromuzla.</span><span data-en>Excavation, shoring, foundation, RC works — with our own site crews.</span></p></div></div>
                  <div className="item"><div className="n">05</div><div><h4><span data-tr>İnce İşler &amp; İç Mekan</span><span data-en>Finishes &amp; Interiors</span></h4><p><span data-tr>Kapı-pencere, sıva, boya, parke, mutfak, banyo, gardırop.</span><span data-en>Joinery, plaster, paint, flooring, kitchens, bathrooms, wardrobes.</span></p></div></div>
                  <div className="item"><div className="n">06</div><div><h4><span data-tr>Peyzaj &amp; Ortak Alan</span><span data-en>Landscape &amp; Common Areas</span></h4><p><span data-tr>Bahçe, sulama, otopark, oyun ve fitness alanları.</span><span data-en>Garden, irrigation, parking, play and fitness zones.</span></p></div></div>
                </div>

                <div className="svc-deliv">
                  <div className="label"><span data-tr>Teslim Belgeleri</span><span data-en>Deliverables</span></div>
                  <div className="docs">
                    <span className="doc"><span data-tr>İnşaat Ruhsatı</span><span data-en>Building Permit</span></span>
                    <span className="doc"><span data-tr>İskân Belgesi</span><span data-en>Occupancy</span></span>
                    <span className="doc">EKB</span>
                    <span className="doc"><span data-tr>Yapı Denetim</span><span data-en>Site Audit</span></span>
                    <span className="doc"><span data-tr>2 Yıl Garanti</span><span data-en>2-Yr Warranty</span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 04 — Yatırım */}
        <section className="long-section" id="yatirim">
          <div className="shell">
            <div className="svc-row">
              <div className="svc-head">
                <div className="label"><span>D / 04</span><span><span data-tr>BÖLÜM</span><span data-en>DEPARTMENT</span></span></div>
                <div className="num-big">04</div>
                <h2>
                  <span data-tr>Yatırım Danışmanlığı</span>
                  <span data-en>Investment Advisory</span>
                </h2>
                <div className="tags">
                  <span className="tag"><span data-tr>Fizibilite</span><span data-en>Feasibility</span></span>
                  <span className="tag"><span data-tr>Arsa Toplama</span><span data-en>Land Assembly</span></span>
                  <span className="tag"><span data-tr>Portföy</span><span data-en>Portfolio</span></span>
                  <span className="tag"><span data-tr>Çıkış</span><span data-en>Exit</span></span>
                </div>
              </div>
              <div className="svc-body">
                <p className="lead">
                  <span data-tr>Kurumsal yatırımcı, aile ofisi ve gayrimenkul fonları için butik danışmanlık. Bölge analizi, arsa toplama, fizibilite çalışmaları, getiri modellemesi ve çıkış stratejisi — operasyonun dört boyutunu da bilen bir ekiple.</span>
                  <span data-en>Boutique advisory for institutional investors, family offices and real-estate funds. District analysis, land assembly, feasibility, return modelling and exit strategy — from a team that knows construction inside out.</span>
                </p>

                <div className="svc-list">
                  <div className="item"><div className="n">01</div><div><h4><span data-tr>Bölge &amp; Pazar Analizi</span><span data-en>District &amp; Market Analysis</span></h4><p><span data-tr>İlçe bazında talep, arz, kira/satış endeksi, kentsel dönüşüm potansiyeli.</span><span data-en>District-level demand, supply, rent/sale indices, urban-renewal potential.</span></p></div></div>
                  <div className="item"><div className="n">02</div><div><h4><span data-tr>Arsa Toplama</span><span data-en>Land Assembly</span></h4><p><span data-tr>Birden çok parselin tek projeye dönüştürülmesi için hukuki ve teknik koordinasyon.</span><span data-en>Legal and technical coordination to merge multiple parcels into one project.</span></p></div></div>
                  <div className="item"><div className="n">03</div><div><h4><span data-tr>Fizibilite &amp; Modelleme</span><span data-en>Feasibility &amp; Modelling</span></h4><p><span data-tr>İnşaat maliyeti, kira getirisi, kat karşılığı oranı, IRR ve geri ödeme süresi.</span><span data-en>Construction cost, rental yield, share-of-build ratio, IRR and payback period.</span></p></div></div>
                  <div className="item"><div className="n">04</div><div><h4><span data-tr>Portföy Yönetimi</span><span data-en>Portfolio Management</span></h4><p><span data-tr>Bireysel ya da kurumsal portföylerin değer takibi, yeniden dengeleme ve raporlama.</span><span data-en>Tracking value, rebalancing and reporting for individual or institutional portfolios.</span></p></div></div>
                  <div className="item"><div className="n">05</div><div><h4><span data-tr>Kat Karşılığı Müzakere</span><span data-en>Share-Deal Negotiation</span></h4><p><span data-tr>Arsa sahibi ile müteahhit arasında dengeli kat karşılığı sözleşme müzakeresi.</span><span data-en>Balancing landowner and developer interests in build-share contracts.</span></p></div></div>
                  <div className="item"><div className="n">06</div><div><h4><span data-tr>Çıkış Stratejisi</span><span data-en>Exit Strategy</span></h4><p><span data-tr>Toplu satış, parça satış veya kira modeli — pazara uygun çıkış planı.</span><span data-en>Bulk sale, unit sale or hold-and-let — an exit plan matched to the market.</span></p></div></div>
                </div>

                <div className="svc-deliv">
                  <div className="label"><span data-tr>Teslim Belgeleri</span><span data-en>Deliverables</span></div>
                  <div className="docs">
                    <span className="doc"><span data-tr>Pazar Raporu</span><span data-en>Market Report</span></span>
                    <span className="doc"><span data-tr>Fizibilite</span><span data-en>Feasibility</span></span>
                    <span className="doc"><span data-tr>Finansal Model</span><span data-en>Financial Model</span></span>
                    <span className="doc"><span data-tr>Çıkış Planı</span><span data-en>Exit Plan</span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta" aria-labelledby="cta-h">
          <div className="shell">
            <div className="cta-grid">
              <div>
                <div className="meta-line"><span className="chip">→</span><span data-tr>BAŞLANGIÇ · ÜCRETSİZ KEŞİF</span><span data-en>START · FREE ASSESSMENT</span></div>
                <h2 id="cta-h">
                  <span data-tr>Hangi bölüm? <span className="knockout">Tüm bölümleri</span> tanıyalım.</span>
                  <span data-en>Which department? <span className="knockout">Let's meet them all.</span></span>
                </h2>
                <p className="lead">
                  <span data-tr>20 dakikalık ücretsiz görüşmede, hangi disiplinlerin işinize değdiğini birlikte belirleyelim.</span>
                  <span data-en>In a 20-minute free call we'll map out which disciplines actually matter for your case.</span>
                </p>
              </div>
              <div className="cta-actions">
                <span className="label"><span data-tr>Doğrudan arayın</span><span data-en>Call us directly</span></span>
                <a href="tel:+908503464652" className="phone">0850 346 46 52</a>
                <a href="/iletisim" className="btn btn-primary"><span data-tr>Keşif planla</span><span data-en>Book a visit</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5 12h14M13 5l7 7-7 7" /></svg></a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
