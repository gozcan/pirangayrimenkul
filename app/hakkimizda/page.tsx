import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Hakkımızda — Piran Gayrimenkul",
  description: "15+ yıl deneyim. Lisanslı ekip, şeffaf süreç, anahtar teslim sorumluluk.",
  alternates: { canonical: "https://www.pirangyd.com/hakkimizda" },
};

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        {/* Page hero */}
        <section className="page-hero">
          <div className="shell">
            <div className="page-hero-bar">
              <div className="left"><span className="dot-pulse"></span>&nbsp;&nbsp;OFİS · MASLAK / İST · 41°06′N 29°00′E</div>
              <div className="center"><span data-tr>HAKKIMIZDA · 2010 → 2026</span><span data-en>ABOUT · 2010 → 2026</span></div>
              <div className="right">SCALE 1:1 · DRWG · PRN/2026/ABT</div>
            </div>

            <div className="page-hero-grid">
              <div>
                <div className="page-hero-tag">
                  <span className="num">03</span>
                  <span className="bar"></span>
                  <span data-tr>Şirket Profili</span><span data-en>Company Profile</span>
                </div>
                <h1>
                  <span data-tr>On beş yıl, <span className="accent">tek bir</span> <span className="ink">dosya</span>.</span>
                  <span data-en>Fifteen years, <span className="accent">one</span> <span className="ink">file</span>.</span>
                </h1>
              </div>
              <div className="page-hero-aside">
                <nav className="breadcrumb">
                  <a href="/"><span data-tr>Anasayfa</span><span data-en>Home</span></a>
                  <span>/</span>
                  <span><span data-tr>Hakkımızda</span><span data-en>About</span></span>
                </nav>
                <p>
                  <span data-tr>Piran, 2010'da Maslak'ta küçük bir değerleme ofisi olarak başladı. Bugün dört bölümlü bir gayrimenkul firması — kentsel dönüşümden inşaata, değerlemeden yatırım danışmanlığına; ama hâlâ aynı tek dosya, aynı tek imza ile.</span>
                  <span data-en>Piran began in 2010 as a small valuation office in Maslak. Today we run four departments — urban renewal, construction, valuation and investment advisory — yet still under a single file, signed by a single hand.</span>
                </p>
                <dl className="meta-block">
                  <div><dt><span data-tr>Kuruluş</span><span data-en>Founded</span></dt><dd>2010</dd></div>
                  <div><dt><span data-tr>Ekip</span><span data-en>Team</span></dt><dd>32</dd></div>
                  <div><dt><span data-tr>Proje</span><span data-en>Projects</span></dt><dd>142</dd></div>
                  <div><dt><span data-tr>Sicil</span><span data-en>Record</span></dt><dd>0 / 0</dd></div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* Marquee */}
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            <div>
              <span>2010 KURULDU</span><span className="dia"></span>
              <span>142 PROJE</span><span className="dia"></span>
              <span>2860 DAİRE</span><span className="dia"></span>
              <span>23 İLÇE</span><span className="dia"></span>
              <span>32 KİŞİLİK EKİP</span><span className="dia"></span>
              <span>SPK LİSANSLI</span><span className="dia"></span>
              <span>ÇŞB AKREDİTE</span><span className="dia"></span>
            </div>
            <div>
              <span>2010 KURULDU</span><span className="dia"></span>
              <span>142 PROJE</span><span className="dia"></span>
              <span>2860 DAİRE</span><span className="dia"></span>
              <span>23 İLÇE</span><span className="dia"></span>
              <span>32 KİŞİLİK EKİP</span><span className="dia"></span>
              <span>SPK LİSANSLI</span><span className="dia"></span>
              <span>ÇŞB AKREDİTE</span><span className="dia"></span>
            </div>
          </div>
        </div>

        {/* Story */}
        <section className="story">
          <div className="shell">
            <div className="label"><span data-tr>01 · HİKAYE</span><span data-en>01 · STORY</span></div>

            <p>
              <span data-tr>Mehmet Piran, 2010 yılında Maslak'ta üç odalı bir ofiste başladı. SPK değerleme uzmanlığını yeni almıştı; ilk müşterileri komşu apartmanlardı. O yıl Türkiye, 6306 sayılı kanun için hazırlık yapıyordu — yıkım izinleri, riskli yapı raporları ve kira yardımları henüz bugünkü şekline ulaşmamıştı.</span>
              <span data-en>Mehmet Piran started in 2010, in a three-room office in Maslak. He had just earned his SPK valuation licence; his first clients were neighbouring apartment buildings. Turkey was at that moment drafting Law 6306 — demolition permits, risky-building reports and rent-assistance schemes had not yet taken their current shape.</span>
            </p>

            <p>
              <span data-tr>İlk büyük dönüşüm projesinde Mehmet, üç farklı firmadan teklif aldıktan sonra fark etti: aynı binaya bakan üç firma birbirinden farklı yanıt veriyordu, hiçbiri tüm soruyu cevaplamıyordu. Ortaya çıkan boşluk Piran'ı bugünkü çatısına dönüştürdü: değerleme, kentsel dönüşüm danışmanlığı, inşaat ve yatırım — hepsi aynı koridordan, aynı sözleşmeden, aynı imzadan.</span>
              <span data-en>On his first major transformation project Mehmet noticed something: three different firms looking at the same building gave three different answers — and none of them answered every question. The gap is what shaped Piran into what it is today: valuation, advisory, construction and investment, all in one corridor, one contract, one signature.</span>
            </p>

            <blockquote className="quote">
              <span data-tr>"Bir binayı yenilemek, on tarafın masada olduğu bir müzakeredir. Bizim işimiz, müzakerenin doğru tarafında olmak — malik tarafında, mahalle tarafında, kanun tarafında."</span>
              <span data-en>"Renovating a building is a negotiation with ten parties at the table. Our job is to be on the right side of it — the owner's, the neighbourhood's, the law's."</span>
              <footer><span data-tr>M. Piran · Kurucu, 2010</span><span data-en>M. Piran · Founder, 2010</span></footer>
            </blockquote>

            <p>
              <span data-tr>Bugün 32 kişilik bir ekibiz: 8 mimar, 6 mühendis, 4 değerleme uzmanı, 3 hukukçu, 7 şantiye yöneticisi ve 4 destek personeli. İstanbul'un 23 ilçesinde 142 proje tamamladık, 2.860 daire teslim ettik. On beş yıl ve şimdiye kadar tek bir ciddi iş kazası ya da hukuki uyuşmazlık kaydımız yok. Bu istatistik bir hediye değil — kararların temelidir.</span>
              <span data-en>Today we are 32 people: 8 architects, 6 engineers, 4 appraisers, 3 lawyers, 7 site managers and 4 support staff. We have delivered 142 projects across 23 Istanbul districts, 2,860 units. Fifteen years in and we still log zero serious site incidents and zero lawsuits. That figure isn't a gift — it's a discipline.</span>
            </p>
          </div>
        </section>

        {/* Principles */}
        <section className="principles">
          <div className="shell">
            <header className="sec-head">
              <div>
                <div className="meta-line">
                  <span className="chip solid">02</span>
                  <span data-tr>İlkeler · Operasyon Felsefesi</span><span data-en>Principles · Operating Code</span>
                </div>
                <h2>
                  <span data-tr>Beş ilke. <span className="accent">Hepsi yazılı.</span></span>
                  <span data-en>Five principles. <span className="accent">All written down.</span></span>
                </h2>
              </div>
              <p className="lead">
                <span data-tr>Sözleşmemizin ekinde imzalı olarak yer alır. İhlal halinde nasıl davranılacağı da yazılıdır — boş söz değil.</span>
                <span data-en>They sit signed in our contract addendum. The process for violations is written too — these are commitments, not slogans.</span>
              </p>
            </header>

            <div className="principles-grid">
              <article className="principle-card">
                <div className="index">— 01</div>
                <h3>
                  <span data-tr>Tek dosya, tek imza.</span>
                  <span data-en>One file, one signature.</span>
                </h3>
                <p>
                  <span data-tr>Müşterinin tek bir muhatabı vardır. Alt yüklenicilerle sorumluluk paylaşımı yapılmaz; her şey bizim çatımız altında imzalanır.</span>
                  <span data-en>You speak to one contact. Responsibility is not shared with subcontractors; everything is signed under our roof.</span>
                </p>
              </article>
              <article className="principle-card">
                <div className="index">— 02</div>
                <h3>
                  <span data-tr>Şeffaf hak paylaşımı.</span>
                  <span data-en>Transparent stakeholder shares.</span>
                </h3>
                <p>
                  <span data-tr>Her malik payını, ödeme planını ve teslim takvimini hak sahipleri panelinden 7/24 görür. Yan masada anlaşma yapılmaz.</span>
                  <span data-en>Every owner tracks their share, payment plan and schedule on a 24/7 dashboard. No side-table deals.</span>
                </p>
              </article>
              <article className="principle-card">
                <div className="index">— 03</div>
                <h3>
                  <span data-tr>Bağımsız denetim.</span>
                  <span data-en>Independent inspection.</span>
                </h3>
                <p>
                  <span data-tr>Yapı denetimini bizden bağımsız bir firma yürütür; rapor maliklere doğrudan iletilir. Kendi işimizi kendimiz onaylamayız.</span>
                  <span data-en>Site inspection is run by a firm independent of us; the report goes straight to the owners. We do not sign off our own work.</span>
                </p>
              </article>
              <article className="principle-card">
                <div className="index">— 04</div>
                <h3>
                  <span data-tr>Mahalle ölçeği.</span>
                  <span data-en>Neighbourhood scale.</span>
                </h3>
                <p>
                  <span data-tr>Tek bir bina için bile gölge analizi, sokak silueti ve komşuluk dengesi tasarımın merkezindedir. Parsel sınırında durmayız.</span>
                  <span data-en>Even for a single building, shadow study, streetscape and adjacency sit at the heart of the design. We do not stop at the parcel line.</span>
                </p>
              </article>
              <article className="principle-card">
                <div className="index">— 05</div>
                <h3>
                  <span data-tr>Sözle değil, sözleşme ile.</span>
                  <span data-en>By contract, not by handshake.</span>
                </h3>
                <p>
                  <span data-tr>Her taahhüt — süre, kalite, fiyat, ceza — yazılıdır. İhlal halinde tahkim maddesi devrededir. "Sonra konuşuruz" demeyiz.</span>
                  <span data-en>Every commitment — duration, quality, price, penalty — is in writing. Disputes go to the contract's arbitration clause. We don't "talk about it later."</span>
                </p>
              </article>
              <article className="principle-card">
                <div className="index">— 06</div>
                <h3>
                  <span data-tr>0 / 0 disiplini.</span>
                  <span data-en>The 0 / 0 discipline.</span>
                </h3>
                <p>
                  <span data-tr>On beş yıl, sıfır ciddi iş kazası, sıfır mahkeme kaydı. Bu sayı bir hedef değil; mevcut sistemin sonucudur.</span>
                  <span data-en>Fifteen years, zero serious site incidents, zero lawsuits. The number is the result of the system, not a target.</span>
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="team">
          <div className="shell">
            <header className="sec-head">
              <div>
                <div className="meta-line">
                  <span className="chip solid">03</span>
                  <span data-tr>Liderlik · Tanıştırma</span><span data-en>Leadership · Introduction</span>
                </div>
                <h2>
                  <span data-tr>Karar masasında, <span className="accent">altı isim.</span></span>
                  <span data-en>Six names <span className="accent">at the decision table.</span></span>
                </h2>
              </div>
              <p className="lead">
                <span data-tr>Disiplinlerini bilen, ofisini bilen, sahayı bilen kişiler. İlk görüşmenizden teslim gününe kadar muhataplarınız bu altı kişiden biri olacak.</span>
                <span data-en>People who know their discipline, the office and the site. From first meeting to handover, your point of contact will be one of these six.</span>
              </p>
            </header>

            <div className="team-grid">
              <article className="team-card">
                <div className="avatar"><svg viewBox="0 0 100 125" preserveAspectRatio="xMidYMid slice"><rect width="100" height="125" fill="#1d4548" /><circle cx="50" cy="55" r="22" fill="#c94a26" /><rect x="22" y="80" width="56" height="80" fill="#c94a26" /></svg></div>
                <div className="role"><span data-tr>Kurucu &amp; CEO</span><span data-en>Founder &amp; CEO</span></div>
                <div className="name">Mehmet Piran</div>
                <p>
                  <span data-tr>İTÜ Mimarlık · SPK Değerleme Uzmanı. 2010'dan beri Piran'ı yönetiyor. Maslak ofisinde, kapısı açık.</span>
                  <span data-en>İTÜ Architecture · SPK Appraiser. Has led Piran since 2010. Open-door office in Maslak.</span>
                </p>
              </article>
              <article className="team-card">
                <div className="avatar"><svg viewBox="0 0 100 125" preserveAspectRatio="xMidYMid slice"><rect width="100" height="125" fill="#ebe4d3" /><circle cx="50" cy="55" r="22" fill="#14140f" /><rect x="22" y="80" width="56" height="80" fill="#14140f" /></svg></div>
                <div className="role"><span data-tr>Mimari Direktör</span><span data-en>Design Director</span></div>
                <div className="name">Selin Aksoy</div>
                <p>
                  <span data-tr>YTÜ Mimarlık, M.Arch (TU Delft). 14 yıllık konut + karma kullanım tecrübesi. Ekibin sokak siluetini düşünen ismi.</span>
                  <span data-en>YTÜ Architecture, M.Arch (TU Delft). 14 years of residential + mixed-use experience. The team's streetscape thinker.</span>
                </p>
              </article>
              <article className="team-card">
                <div className="avatar"><svg viewBox="0 0 100 125" preserveAspectRatio="xMidYMid slice"><rect width="100" height="125" fill="#c94a26" /><circle cx="50" cy="55" r="22" fill="#efece6" /><rect x="22" y="80" width="56" height="80" fill="#efece6" /></svg></div>
                <div className="role"><span data-tr>Statik &amp; İnşaat Müdürü</span><span data-en>Structural &amp; Site Director</span></div>
                <div className="name">Cem Demir</div>
                <p>
                  <span data-tr>İTÜ İnşaat Müh., 18 yıl şantiye. 2018 deprem yönetmeliği güncellemesinde bakanlık danışman kadrosunda.</span>
                  <span data-en>İTÜ Civil Eng., 18 years on site. Sat on the Ministry advisory panel for the 2018 seismic-code revision.</span>
                </p>
              </article>
              <article className="team-card">
                <div className="avatar"><svg viewBox="0 0 100 125" preserveAspectRatio="xMidYMid slice"><rect width="100" height="125" fill="#14140f" /><circle cx="50" cy="55" r="22" fill="#c94a26" /><rect x="22" y="80" width="56" height="80" fill="#c94a26" /></svg></div>
                <div className="role"><span data-tr>Değerleme Müdürü</span><span data-en>Valuation Director</span></div>
                <div className="name">Aylin Çelik</div>
                <p>
                  <span data-tr>SPK Lisanslı Değerleme Uzmanı, BDDK uyumlu banka raporlamada 12 yıl. Yargı uzmanlık raporlarımızı yönetir.</span>
                  <span data-en>SPK-licensed Appraiser, 12 years of BDDK-aligned bank reporting. Oversees our litigation appraisals.</span>
                </p>
              </article>
              <article className="team-card">
                <div className="avatar"><svg viewBox="0 0 100 125" preserveAspectRatio="xMidYMid slice"><rect width="100" height="125" fill="#1d4548" /><circle cx="50" cy="55" r="22" fill="#efece6" /><rect x="22" y="80" width="56" height="80" fill="#efece6" /></svg></div>
                <div className="role"><span data-tr>Hukuk Müşaviri</span><span data-en>General Counsel</span></div>
                <div className="name">Burak Yıldız</div>
                <p>
                  <span data-tr>İstanbul Barosu · Gayrimenkul Hukuku. 6306 sayılı kanun uygulamasında 9 yıl, hak sahipleri anlaşmazlıklarında uzman.</span>
                  <span data-en>Istanbul Bar · Real Estate Law. 9 years applying Law 6306, expert in stakeholder disputes.</span>
                </p>
              </article>
              <article className="team-card">
                <div className="avatar"><svg viewBox="0 0 100 125" preserveAspectRatio="xMidYMid slice"><rect width="100" height="125" fill="#ebe4d3" /><circle cx="50" cy="55" r="22" fill="#1d4548" /><rect x="22" y="80" width="56" height="80" fill="#1d4548" /></svg></div>
                <div className="role"><span data-tr>Yatırım &amp; Strateji</span><span data-en>Investment &amp; Strategy</span></div>
                <div className="name">Ece Karaca</div>
                <p>
                  <span data-tr>Boğaziçi Ekonomi, CFA Level III. Aile ofisleri ve gayrimenkul fonları için portföy danışmanlığı.</span>
                  <span data-en>Boğaziçi Economics, CFA Level III. Portfolio advisory for family offices and real-estate funds.</span>
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="certs">
          <div className="shell">
            <header className="sec-head" style={{borderBottomColor: "#2a2922"}}>
              <div>
                <div className="meta-line" style={{color: "#847e6c"}}>
                  <span className="chip" style={{background: "#1d1d17", color: "#fff", borderColor: "#2a2922"}}>04</span>
                  <span data-tr>Lisans &amp; Sertifika</span><span data-en>Licenses &amp; Certifications</span>
                </div>
                <h2 style={{color: "var(--paper-on-dark)"}}>
                  <span data-tr>Yazılı yetki, <span style={{color: "var(--accent)"}}>yazılı sorumluluk.</span></span>
                  <span data-en>Written authority, <span style={{color: "var(--accent)"}}>written responsibility.</span></span>
                </h2>
              </div>
              <p className="lead" style={{color: "#a8a18c"}}>
                <span data-tr>Her lisans bağımsız bir denetim demektir. Sigorta poliçemiz ve sözleşmemiz, lisansların gerektirdiği sorumluluğun tüm finansal sonuçlarını üstlenir.</span>
                <span data-en>Every licence is an independent audit. Our insurance and contract absorb the full financial weight of the duties they impose.</span>
              </p>
            </header>

            <div className="certs-grid">
              <article className="cert-card"><div className="code">L-01 · 2014</div><div className="name">SPK</div><div className="body"><span data-tr>Sermaye Piyasası Kurulu, Lisanslı Değerleme</span><span data-en>Capital Markets Board, Licensed Appraisal</span></div></article>
              <article className="cert-card"><div className="code">L-02 · 2016</div><div className="name">ÇŞB</div><div className="body"><span data-tr>Çevre ve Şehircilik Bakanlığı, Kentsel Dönüşüm</span><span data-en>Ministry of Env. &amp; Urban., Renewal</span></div></article>
              <article className="cert-card"><div className="code">L-03 · 2017</div><div className="name">TMMOB</div><div className="body"><span data-tr>Türk Mimar ve Mühendis Odaları Birliği</span><span data-en>Union of Chambers of Engineers &amp; Architects</span></div></article>
              <article className="cert-card"><div className="code">L-04 · 2019</div><div className="name">BDDK</div><div className="body"><span data-tr>Bankacılık Düzenleme &amp; Denetleme Kurulu</span><span data-en>Banking Regulation &amp; Supervision</span></div></article>
              <article className="cert-card"><div className="code">L-05 · 2021</div><div className="name">ISO 9001</div><div className="body"><span data-tr>Kalite Yönetim Sistemi</span><span data-en>Quality Management System</span></div></article>
              <article className="cert-card"><div className="code">L-06 · 2022</div><div className="name">ISO 14001</div><div className="body"><span data-tr>Çevre Yönetim Sistemi</span><span data-en>Environmental Management</span></div></article>
              <article className="cert-card"><div className="code">L-07 · 2022</div><div className="name">ISO 45001</div><div className="body"><span data-tr>İş Sağlığı &amp; Güvenliği</span><span data-en>Occupational H&amp;S</span></div></article>
              <article className="cert-card"><div className="code">L-08 · 2023</div><div className="name">CFA</div><div className="body"><span data-tr>Yatırım Stratejisi · CFA Institute</span><span data-en>Investment Strategy · CFA Institute</span></div></article>
              <article className="cert-card"><div className="code">L-09 · 2024</div><div className="name">LEED AP</div><div className="body"><span data-tr>Sürdürülebilir Yapı Akreditasyonu</span><span data-en>Sustainable Building Accred.</span></div></article>
              <article className="cert-card"><div className="code">L-10 · 2024</div><div className="name">İBB</div><div className="body"><span data-tr>İstanbul Büyükşehir Belediyesi, Yetkili Yüklenici</span><span data-en>Istanbul Metro. Mun., Authorised Contractor</span></div></article>
              <article className="cert-card"><div className="code">L-11 · 2024</div><div className="name">RICS</div><div className="body"><span data-tr>Royal Institution of Chartered Surveyors</span><span data-en>RICS Chartered Membership</span></div></article>
              <article className="cert-card"><div className="code">L-12 · 2025</div><div className="name">YÖK</div><div className="body"><span data-tr>Akademik İşbirliği · Mimarlık Okulları</span><span data-en>Academic Partnership · Arch. Schools</span></div></article>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta">
          <div className="shell">
            <div className="cta-grid">
              <div>
                <div className="meta-line"><span className="chip">→</span><span data-tr>OFİSE BUYURUN</span><span data-en>VISIT THE OFFICE</span></div>
                <h2>
                  <span data-tr>İlk önce <span className="knockout">çay içelim</span>, kararı sonra verirsiniz.</span>
                  <span data-en>Tea first. <span className="knockout">Decisions later.</span></span>
                </h2>
                <p className="lead">
                  <span data-tr>Maslak ofisimiz Pazartesi'den Cuma'ya 09:00–18:30 açık. Önceden randevu almanız bile gerekmiyor — uğrayın, ekibimizle tanışın.</span>
                  <span data-en>Our Maslak office is open Mon–Fri, 09:00–18:30. You don't need an appointment — drop by and meet the team.</span>
                </p>
              </div>
              <div className="cta-actions">
                <span className="label"><span data-tr>Adres</span><span data-en>Address</span></span>
                <a href="/iletisim" className="phone">Maslak Mah. AOS No: 8</a>
                <a href="/iletisim" className="btn btn-primary"><span data-tr>Yol tarifi al</span><span data-en>Get directions</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5 12h14M13 5l7 7-7 7" /></svg></a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
