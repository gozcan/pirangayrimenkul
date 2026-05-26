import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./styles/styles.css";
import "./styles/home.css";
import "./styles/pages.css";
import Scripts from "./components/Scripts";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pirangyd.com"),
  title:
    "Piran Gayrimenkul — İstanbul Kentsel Dönüşüm, Değerleme, İnşaat ve Yatırım Danışmanlığı",
  description:
    "İstanbul'da kentsel dönüşüm, gayrimenkul değerleme, inşaat ve yatırım danışmanlığı. 15 yılı aşkın deneyim, lisanslı ekip, anahtar teslim süreç yönetimi. Risk raporundan teslime kadar tek muhatap.",
  keywords: [
    "kentsel dönüşüm",
    "gayrimenkul değerleme",
    "inşaat danışmanlığı",
    "yatırım danışmanlığı",
    "İstanbul",
    "riskli yapı",
    "6306 sayılı kanun",
    "kira yardımı",
    "anahtar teslim",
    "piran gayrimenkul",
  ],
  authors: [{ name: "Piran Gayrimenkul" }],
  robots: { index: true, follow: true, "max-image-preview": "large" } as never,
  alternates: {
    canonical: "https://www.pirangyd.com/",
    languages: {
      tr: "https://www.pirangyd.com/",
      en: "https://www.pirangyd.com/?lang=en",
      "x-default": "https://www.pirangyd.com/",
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Piran Gayrimenkul",
    title:
      "Piran Gayrimenkul — İstanbul'da Kentsel Dönüşüm, Değerleme, İnşaat ve Yatırım Danışmanlığı",
    description:
      "Risk tespitinden anahtar teslime kadar tek muhatap. İstanbul'un yenilenen siluetinde, 15+ yıl deneyimle.",
    url: "https://www.pirangyd.com/",
    images: ["https://www.pirangyd.com/og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#efece6",
};

const realEstateAgentJsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Piran Gayrimenkul",
  description:
    "İstanbul'da kentsel dönüşüm, gayrimenkul değerleme, inşaat ve yatırım danışmanlığı hizmetleri.",
  url: "https://www.pirangyd.com/",
  telephone: "+90 212 000 00 00",
  email: "info@pirangyd.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "İstanbul",
    addressRegion: "İstanbul",
    addressCountry: "TR",
  },
  areaServed: "İstanbul",
  knowsLanguage: ["tr", "en"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" data-bg-theme="sand" data-display-font="sans">
      <head>
        {/* Fonts: Bricolage Grotesque + Geist + Geist Mono + Fraunces */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wdth,wght@12..96,75..100,400..800&family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500&family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD: RealEstateAgent */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(realEstateAgentJsonLd),
          }}
        />
        {/* Read saved language preference before paint so we don't flash TR for EN users. */}
        <Script
          id="piran-lang-bootstrap"
          strategy="beforeInteractive"
        >{`try{var l=localStorage.getItem('piran.lang');if(l==='en'){document.documentElement.classList.add('lang-en');}}catch(_){}`}</Script>
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
