import Link from "next/link";

export default function Footer() {
  return (
    <footer className="foot" role="contentinfo">
      <div className="shell">
        <div className="foot-grid">
          <div>
            <div className="brand-large">
              Piran<span className="accent-dot">.</span>
            </div>
            <p className="brand-tag">
              <span data-tr>
                Gayrimenkul danışmanlığında 15+ yıl. Kentsel dönüşüm, değerleme,
                inşaat ve yatırım — tek çatı altında, tek sözleşme.
              </span>
              <span data-en>
                15+ years in property advisory. Urban renewal, valuation,
                construction and investment — one roof, one contract.
              </span>
            </p>
          </div>
          <div>
            <h4>
              <span data-tr>Hizmetler</span>
              <span data-en>Services</span>
            </h4>
            <ul>
              <li>
                <Link href="/hizmetler#kentsel-donusum">
                  <span data-tr>Kentsel Dönüşüm</span>
                  <span data-en>Urban Transformation</span>
                </Link>
              </li>
              <li>
                <Link href="/hizmetler#degerleme">
                  <span data-tr>Gayrimenkul Değerleme</span>
                  <span data-en>Property Valuation</span>
                </Link>
              </li>
              <li>
                <Link href="/hizmetler#insaat">
                  <span data-tr>İnşaat &amp; Anahtar Teslim</span>
                  <span data-en>Construction &amp; Turnkey</span>
                </Link>
              </li>
              <li>
                <Link href="/hizmetler#yatirim">
                  <span data-tr>Yatırım Danışmanlığı</span>
                  <span data-en>Investment Advisory</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>
              <span data-tr>Şirket</span>
              <span data-en>Company</span>
            </h4>
            <ul>
              <li>
                <Link href="/hakkimizda">
                  <span data-tr>Hakkımızda</span>
                  <span data-en>About</span>
                </Link>
              </li>
              <li>
                <Link href="/#process">
                  <span data-tr>Süreç</span>
                  <span data-en>Process</span>
                </Link>
              </li>
              <li>
                <Link href="/#faq">S.S.S / FAQ</Link>
              </li>
              <li>
                <Link href="/iletisim">
                  <span data-tr>İletişim</span>
                  <span data-en>Contact</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>
              <span data-tr>İletişim</span>
              <span data-en>Contact</span>
            </h4>
            <ul>
              <li>0850 346 46 52</li>
              <li>info@pirangyd.com</li>
              <li>Küçük Çamlıca, Üsküdar</li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <div>
            © <span data-year>2026</span> PIRAN GAYRİMENKUL ·{" "}
            <span data-tr>TÜM HAKLARI SAKLIDIR</span>
            <span data-en>ALL RIGHTS RESERVED</span>
          </div>
          <div style={{ display: "flex", gap: 24 }}>
            <a href="#">
              <span data-tr>GİZLİLİK</span>
              <span data-en>PRIVACY</span>
            </a>
            <a href="#">KVKK</a>
            <a href="#">
              <span data-tr>ÇEREZ POLİTİKASI</span>
              <span data-en>COOKIES</span>
            </a>
          </div>
        </div>
        <div
          style={{
            opacity: 0.7,
            fontSize: 13,
            marginTop: 16,
            display: "flex",
            flexWrap: "wrap",
            gap: 18,
            alignItems: "center",
          }}
        >
          <span>
            <span data-tr>Piran bir</span>
            <span data-en>Piran is part of</span>{" "}
            <a
              href="https://eksioglugrup.tr/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "underline", textUnderlineOffset: 3 }}
            >
              Ekşioğlu Grup
            </a>{" "}
            <span data-tr>şirketidir.</span>
            <span data-en>group.</span>
          </span>
          <span style={{ opacity: 0.65 }}>
            Design ·{" "}
            <a
              href="https://www.ponton.com.tr/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "underline", textUnderlineOffset: 3 }}
            >
              Ponton Studio
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
