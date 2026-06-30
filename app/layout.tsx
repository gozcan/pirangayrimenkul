import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './styles/styles.css';
import './styles/home.css';
import './styles/pages.css';
import Scripts from './components/Scripts';

const SITE_URL = 'https://www.pirangyd.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      'Kentsel Dönüşüm İstanbul · Piran Gayrimenkul — Risk Raporundan Anahtar Teslime',
    template: '%s · Piran Gayrimenkul',
  },
  description:
    "İstanbul'da kentsel dönüşüm danışmanlığı. 6306 sayılı kanun kapsamında risk raporu, salt çoğunluk anlaşması, hibe ve kira yardımı başvurusu, anahtar teslim inşaat. 15+ yıl deneyim, lisanslı ekip. Üsküdar Küçük Çamlıca ofis. Ücretsiz keşif.",
  keywords: [
    'kentsel dönüşüm',
    'İstanbul kentsel dönüşüm',
    'kentsel dönüşüm danışmanlığı',
    'kentsel dönüşüm şirketi',
    'Üsküdar kentsel dönüşüm',
    'Küçük Çamlıca kentsel dönüşüm',
    'Anadolu Yakası kentsel dönüşüm',
    'riskli yapı raporu',
    'riskli bina',
    '6306 sayılı kanun',
    '7471 sayılı kanun',
    'salt çoğunluk',
    'kira yardımı',
    'Yarısı Bizden',
    'Yarısı Bizden kampanyası',
    'kentsel dönüşüm hibe',
    'kentsel dönüşüm kredi',
    'anahtar teslim inşaat',
    'müteahhit seçimi',
    'gayrimenkul değerleme',
    'SPK lisanslı değerleme',
    'inşaat danışmanlığı',
    'yatırım danışmanlığı',
    'piran gayrimenkul',
    'pirangyd',
  ],
  authors: [{ name: 'Piran Gayrimenkul' }],
  creator: 'Piran Gayrimenkul',
  publisher: 'Piran Gayrimenkul',
  category: 'Real Estate',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: SITE_URL + '/',
    languages: {
      tr: SITE_URL + '/',
      en: SITE_URL + '/?lang=en',
      'x-default': SITE_URL + '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    alternateLocale: 'en_US',
    siteName: 'Piran Gayrimenkul',
    title:
      'Kentsel Dönüşüm İstanbul · Piran Gayrimenkul — Risk Raporundan Anahtar Teslime',
    description:
      "İstanbul'da 15+ yıllık kentsel dönüşüm danışmanlığı. Risk raporu, salt çoğunluk, hibe ve kira yardımı, anahtar teslim. Üsküdar ofisten 39 ilçeye.",
    url: SITE_URL + '/',
    images: [
      {
        url: '/logo.svg',
        width: 1200,
        height: 630,
        alt: 'Piran Gayrimenkul — Kentsel Dönüşüm İstanbul',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kentsel Dönüşüm İstanbul · Piran Gayrimenkul',
    description:
      'Risk raporundan anahtar teslime kadar tek muhatap. 15+ yıl deneyim, lisanslı ekip.',
    images: ['/logo.svg'],
  },
  verification: {
    // Add real values when accounts are set up:
    // google: 'xxxxxxxxxxxxxx',
    // yandex: 'xxxxxxxxxxxxxx',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#efece6',
};

/**
 * Sitewide LocalBusiness / RealEstateAgent schema.
 *
 * This is the canonical company record for Google Knowledge Graph and is
 * placed in the root layout so it's rendered on every page.
 */
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['RealEstateAgent', 'LocalBusiness'],
  '@id': SITE_URL + '/#organization',
  name: 'Piran Gayrimenkul',
  legalName: 'Piran Gayrimenkul',
  alternateName: ['Piran', 'Pirangyd'],
  description:
    "İstanbul'da kentsel dönüşüm, gayrimenkul değerleme, inşaat ve yatırım danışmanlığı. 6306 sayılı kanun süreçleri, risk raporu, hibe ve kira yardımı başvurusu, anahtar teslim inşaat yönetimi.",
  url: SITE_URL + '/',
  logo: SITE_URL + '/logo.svg',
  image: SITE_URL + '/logo.svg',
  telephone: '+908503464652',
  email: 'info@pirangyd.com',
  priceRange: '₺₺',
  foundingDate: '2010',
  parentOrganization: {
    '@type': 'Organization',
    name: 'Ekşioğlu Grup',
    url: 'https://eksioglugrup.tr/',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Küçük Çamlıca Mah. Libadiye Cad. No 52',
    addressLocality: 'Üsküdar',
    addressRegion: 'İstanbul',
    postalCode: '34696',
    addressCountry: 'TR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 41.0089,
    longitude: 29.0581,
  },
  hasMap:
    'https://www.google.com/maps/search/?api=1&query=K%C3%BC%C3%A7%C3%BCk+%C3%87aml%C4%B1ca+Mah.+Libadiye+Cad.+No+52+%C3%9Csk%C3%BCdar',
  areaServed: [
    { '@type': 'City', name: 'İstanbul' },
    { '@type': 'AdministrativeArea', name: 'Üsküdar' },
    { '@type': 'AdministrativeArea', name: 'Kadıköy' },
    { '@type': 'AdministrativeArea', name: 'Ataşehir' },
    { '@type': 'AdministrativeArea', name: 'Ümraniye' },
    { '@type': 'AdministrativeArea', name: 'Maltepe' },
    { '@type': 'AdministrativeArea', name: 'Beşiktaş' },
    { '@type': 'AdministrativeArea', name: 'Şişli' },
    { '@type': 'AdministrativeArea', name: 'Sarıyer' },
    { '@type': 'AdministrativeArea', name: 'Bakırköy' },
  ],
  knowsAbout: [
    'kentsel dönüşüm',
    '6306 sayılı kanun',
    '7471 sayılı kanun',
    'riskli yapı tespiti',
    'Yarısı Bizden kampanyası',
    'gayrimenkul değerleme',
    'SPK değerleme',
    'anahtar teslim inşaat',
    'kira yardımı',
    'yatırım danışmanlığı',
  ],
  knowsLanguage: ['tr', 'en'],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:30',
    },
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+908503464652',
      contactType: 'customer service',
      areaServed: 'TR',
      availableLanguage: ['Turkish', 'English'],
    },
  ],
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Kentsel Dönüşüm Danışmanlığı',
        serviceType: 'Urban Transformation Advisory',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Gayrimenkul Değerleme',
        serviceType: 'Property Valuation',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Anahtar Teslim İnşaat',
        serviceType: 'Turnkey Construction Management',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Yatırım Danışmanlığı',
        serviceType: 'Real Estate Investment Advisory',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="tr"
      data-bg-theme="sand"
      data-display-font="sans"
    >
      <head>
        {/* Fonts: Bricolage Grotesque + Geist + Geist Mono + Fraunces */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="canonical"
          href="https://www.pirangyd.com/"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wdth,wght@12..96,75..100,400..800&family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500&family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD: LocalBusiness / RealEstateAgent (sitewide) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
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
