import type { Metadata } from "next";
import LegalLayout from "../components/LegalLayout";

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description:
    "Piran Gayrimenkul çerez politikası: kullandığımız çerezler, amaçları, saklama süreleri ve tarayıcı üzerinden çerez yönetimi.",
  alternates: {
    canonical: "https://www.pirangyd.com/cerez-politikasi",
    languages: {
      tr: "https://www.pirangyd.com/cerez-politikasi",
      en: "https://www.pirangyd.com/cerez-politikasi?lang=en",
    },
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <LegalLayout
      eyebrowTr="ÇEREZ · YASAL"
      eyebrowEn="COOKIES · LEGAL"
      titleTr="Çerez Politikası"
      titleEn="Cookie Policy"
      breadcrumbTr="Çerez Politikası"
      breadcrumbEn="Cookies"
      ledeTr="Bu metin, www.pirangyd.com adresinde kullandığımız çerezlerin türlerini, amaçlarını ve nasıl yönetebileceğinizi açıklar."
      ledeEn="This page explains the cookies we use on www.pirangyd.com, their purposes and how to manage them."
      revisedTr="26 Mayıs 2026"
      revisedEn="26 May 2026"
    >
      <h2><span data-tr>1. Çerez Nedir?</span><span data-en>1. What Are Cookies?</span></h2>
      <p>
        <span data-tr>Çerez (cookie), ziyaret ettiğiniz internet sitelerinin tarayıcınız aracılığıyla cihazınıza yerleştirdiği küçük metin dosyalarıdır. Çerezler, web sitesinin doğru çalışması, dil tercihinizin hatırlanması ve site kullanımının ölçülmesi gibi amaçlarla kullanılır.</span>
        <span data-en>A cookie is a small text file placed on your device by the websites you visit. Cookies are used to make sites work correctly, remember your language preference, and measure usage.</span>
      </p>

      <h2><span data-tr>2. Kullandığımız Çerezler</span><span data-en>2. Cookies We Use</span></h2>
      <p>
        <span data-tr>Pirangyd.com&apos;da yalnızca site işlevselliği için zorunlu olan birinci taraf çerezler kullanılır. Reklam veya kişisel profilleme amaçlı üçüncü taraf çerezi yerleştirmeyiz.</span>
        <span data-en>Pirangyd.com uses only essential first-party cookies needed for site functionality. We do not place third-party cookies for advertising or personal profiling.</span>
      </p>

      <h3><span data-tr>2.1 Zorunlu Çerezler</span><span data-en>2.1 Essential Cookies</span></h3>
      <ul>
        <li>
          <span data-tr><code>piran.lang</code> · <strong>localStorage anahtarı.</strong> Seçtiğiniz dil tercihinizi (TR / EN) hatırlamak için kullanılır. Saklama süresi: tarayıcı önbelleği boşaltılana kadar. İptal: tarayıcı ayarlarınızdan silebilirsiniz.</span>
          <span data-en><code>piran.lang</code> · <strong>localStorage key.</strong> Stores your language choice (TR / EN). Retention: until you clear browser storage. Removal: clear via browser settings.</span>
        </li>
      </ul>

      <h3><span data-tr>2.2 Performans Çerezleri</span><span data-en>2.2 Performance Cookies</span></h3>
      <p>
        <span data-tr>Şu an aktif bir analitik araç kullanmıyoruz. İleride Google Analytics, Plausible veya benzeri bir araç eklersek bu sayfayı güncelleyecek ve gerektiğinde açık rızanızı alacağız.</span>
        <span data-en>We do not currently run an analytics tool. If we add Google Analytics, Plausible or similar in the future, we will update this page and request explicit consent where required.</span>
      </p>

      <h2><span data-tr>3. Üçüncü Taraf Hizmetleri</span><span data-en>3. Third-Party Services</span></h2>
      <p>
        <span data-tr>Web sitemiz, görsel tutarlılık için Google Fonts servisinden font dosyası yükler. Bu istek sırasında IP adresiniz Google tarafından log&apos;lanabilir. Bunun dışında üçüncü taraf izleyici veya reklam ağı kullanmıyoruz.</span>
        <span data-en>For visual consistency the site loads font files from Google Fonts. Google may log your IP during that request. We use no other third-party trackers or advertising networks.</span>
      </p>

      <h2><span data-tr>4. Çerezleri Nasıl Yönetirsiniz?</span><span data-en>4. How to Manage Cookies</span></h2>
      <p>
        <span data-tr>Tarayıcınızın ayarlarından çerezleri silebilir, engelleyebilir veya çerez yerleştirildiğinde uyarı almasını sağlayabilirsiniz. İlgili sayfalar:</span>
        <span data-en>You can delete, block or be notified about cookies through your browser&apos;s settings. Reference pages:</span>
      </p>
      <ul>
        <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
        <li><a href="https://support.mozilla.org/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
        <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer">Apple Safari</a></li>
        <li><a href="https://support.microsoft.com/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
      </ul>
      <p>
        <span data-tr>Zorunlu çerezleri devre dışı bırakırsanız sitenin bazı bölümleri beklenen şekilde çalışmayabilir.</span>
        <span data-en>If you disable essential cookies, some parts of the site may not function as expected.</span>
      </p>

      <h2><span data-tr>5. Politika Güncellemeleri</span><span data-en>5. Policy Updates</span></h2>
      <p>
        <span data-tr>Bu politikayı zaman zaman güncelleyebiliriz. Güncel tarih sayfanın başında yer alır.</span>
        <span data-en>We may update this policy from time to time. The current revision date appears at the top of the page.</span>
      </p>

      <h2><span data-tr>6. İletişim</span><span data-en>6. Contact</span></h2>
      <p>
        <span data-tr>Çerezlerle ilgili sorularınız için: <a href="mailto:info@pirangyd.com">info@pirangyd.com</a></span>
        <span data-en>For cookie-related questions: <a href="mailto:info@pirangyd.com">info@pirangyd.com</a></span>
      </p>
    </LegalLayout>
  );
}
