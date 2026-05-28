import type { Metadata } from "next";
import LegalLayout from "../components/LegalLayout";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description:
    "Piran Gayrimenkul gizlilik politikası: toplanan kişisel veriler, işleme amaçları, saklama süreleri ve haklarınız.",
  alternates: {
    canonical: "https://www.pirangyd.com/gizlilik",
    languages: {
      tr: "https://www.pirangyd.com/gizlilik",
      en: "https://www.pirangyd.com/gizlilik?lang=en",
    },
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <LegalLayout
      eyebrowTr="GİZLİLİK · YASAL"
      eyebrowEn="PRIVACY · LEGAL"
      titleTr="Gizlilik Politikası"
      titleEn="Privacy Policy"
      breadcrumbTr="Gizlilik"
      breadcrumbEn="Privacy"
      ledeTr="Piran Gayrimenkul olarak ziyaretçilerimiz ve müşterilerimizden topladığımız kişisel verileri nasıl işlediğimizi şeffaf biçimde açıklamayı önemsiyoruz."
      ledeEn="At Piran Gayrimenkul we believe in transparent disclosure of how we collect and process personal data from our website visitors and clients."
      revisedTr="26 Mayıs 2026"
      revisedEn="26 May 2026"
    >
      <h2><span data-tr>1. Veri Sorumlusu</span><span data-en>1. Data Controller</span></h2>
      <p>
        <span data-tr>İşbu Gizlilik Politikası&apos;nın tarafı, <strong>Piran Gayrimenkul</strong> (Küçük Çamlıca Mah. Libadiye Cad. No 52, Üsküdar / İstanbul) olup, 6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) uyarınca veri sorumlusu sıfatıyla hareket eder.</span>
        <span data-en>This Privacy Policy is published by <strong>Piran Gayrimenkul</strong> (Küçük Çamlıca Mah. Libadiye Cad. No 52, Üsküdar / İstanbul), acting as data controller under Turkish Law No. 6698 on the Protection of Personal Data.</span>
      </p>

      <h2><span data-tr>2. Topladığımız Veriler</span><span data-en>2. Data We Collect</span></h2>
      <p>
        <span data-tr>Hizmetlerimizden yararlanma sürecinde, sizden veya yasal olarak yetkili olduğunuz kişiler aracılığıyla aşağıdaki veri kategorilerini elde ederiz:</span>
        <span data-en>Through our services we collect the following categories of personal data — either directly from you or from individuals authorised on your behalf:</span>
      </p>
      <ul>
        <li><span data-tr><strong>Kimlik bilgileri:</strong> ad, soyad.</span><span data-en><strong>Identity:</strong> first and last name.</span></li>
        <li><span data-tr><strong>İletişim bilgileri:</strong> telefon numarası, e-posta adresi, adres.</span><span data-en><strong>Contact:</strong> phone number, email address, postal address.</span></li>
        <li><span data-tr><strong>Mülkiyet bilgileri:</strong> ilgili gayrimenkulün konumu, kat sayısı, mevcut durumu, hak sahibi sayısı.</span><span data-en><strong>Property:</strong> location, storey count, current status, number of stakeholders.</span></li>
        <li><span data-tr><strong>İşlem bilgileri:</strong> formlar üzerinden gönderdiğiniz mesajlar, görüşme kayıtları (yalnızca açık rıza ile).</span><span data-en><strong>Transactional:</strong> form submissions, meeting records (only with explicit consent).</span></li>
        <li><span data-tr><strong>Teknik bilgiler:</strong> IP adresi, tarayıcı bilgisi, çerez verisi, sayfa görüntülenme istatistikleri.</span><span data-en><strong>Technical:</strong> IP address, browser metadata, cookie data, page-view analytics.</span></li>
      </ul>

      <h2><span data-tr>3. İşleme Amaçları</span><span data-en>3. Processing Purposes</span></h2>
      <p>
        <span data-tr>Kişisel verilerinizi yalnızca aşağıdaki amaçlarla, KVKK m. 5 ve 6&apos;da belirtilen hukuki sebeplere dayalı olarak işleriz:</span>
        <span data-en>We process personal data only for the purposes below, relying on the lawful bases set out in Articles 5–6 of Law No. 6698:</span>
      </p>
      <ul>
        <li><span data-tr>Sunduğumuz danışmanlık, değerleme ve inşaat hizmetlerinin ifası.</span><span data-en>Performance of the advisory, valuation and construction services we offer.</span></li>
        <li><span data-tr>Sözleşmesel yükümlülüklerin yerine getirilmesi ve müşteri ilişkilerinin yönetilmesi.</span><span data-en>Fulfilment of contractual obligations and management of client relations.</span></li>
        <li><span data-tr>Mevzuattan kaynaklanan yükümlülüklerin yerine getirilmesi (örn. 6306 sayılı kanun, vergi mevzuatı).</span><span data-en>Compliance with statutory obligations (e.g. Law 6306, tax legislation).</span></li>
        <li><span data-tr>Web sitesi performansının ölçülmesi ve kullanıcı deneyiminin iyileştirilmesi.</span><span data-en>Measuring website performance and improving the user experience.</span></li>
      </ul>

      <h2><span data-tr>4. Aktarım</span><span data-en>4. Data Sharing</span></h2>
      <p>
        <span data-tr>Verileriniz, hizmetin gerektirdiği ölçüde ve sözleşmesel gizlilik yükümlülükleri altındaki tedarikçilerimizle (örn. hosting sağlayıcımız, e-posta servisi, mali müşavir) ve yasal yükümlülük durumunda yetkili kamu kurumlarıyla paylaşılır. Verileriniz reklam veya pazarlama amacıyla üçüncü taraflara satılmaz.</span>
        <span data-en>Data is shared only to the extent required by the service, with our processors under contractual confidentiality (hosting, email, accounting) and with public authorities where legally required. We do not sell personal data to third parties for advertising or marketing.</span>
      </p>

      <h2><span data-tr>5. Saklama Süresi</span><span data-en>5. Retention</span></h2>
      <p>
        <span data-tr>Veriler, ilgili işleme amacının gerektirdiği süre boyunca saklanır. Sözleşmeye dayalı veriler için saklama süresi, sözleşmenin sona ermesinden itibaren 10 yıldır (TBK m. 146). İletişim formu kayıtları, talebin sonuçlanmasından itibaren 2 yıl içinde silinir.</span>
        <span data-en>Data is retained only for as long as the processing purpose requires. Contract data is retained for 10 years after contract termination (Turkish Code of Obligations, Art. 146). Contact-form records are deleted within 2 years after the request is resolved.</span>
      </p>

      <h2><span data-tr>6. Haklarınız</span><span data-en>6. Your Rights</span></h2>
      <p>
        <span data-tr>KVKK m. 11 uyarınca; kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenme amacını sorgulama, eksik veya yanlış işlenmişse düzeltilmesini, KVKK&apos;da belirtilen şartlar çerçevesinde silinmesini veya yok edilmesini talep etme ve işlemenin sonucunda zarara uğramanız hâlinde tazminat talep etme haklarına sahipsiniz.</span>
        <span data-en>Under Article 11 of Law 6698 you have the right to: learn whether your data is being processed, request information about the purposes, request correction of inaccuracies, request deletion under the conditions of the law, and seek compensation for damages arising from unlawful processing.</span>
      </p>
      <p>
        <span data-tr>Bu haklarınızı kullanmak için <a href="mailto:info@pirangyd.com">info@pirangyd.com</a> adresine veya posta yolu ile kayıtlı adresimize başvurabilirsiniz. Başvurularınız en geç 30 gün içinde yanıtlanır.</span>
        <span data-en>To exercise these rights please contact <a href="mailto:info@pirangyd.com">info@pirangyd.com</a> or write to our registered address. We respond within 30 days at most.</span>
      </p>

      <h2><span data-tr>7. İletişim</span><span data-en>7. Contact</span></h2>
      <p>
        <span data-tr>Gizlilikle ilgili tüm sorularınız için: <a href="mailto:info@pirangyd.com">info@pirangyd.com</a> · <a href="tel:+908503464652">0850 346 46 52</a></span>
        <span data-en>For all privacy-related questions: <a href="mailto:info@pirangyd.com">info@pirangyd.com</a> · <a href="tel:+908503464652">0850 346 46 52</a></span>
      </p>
    </LegalLayout>
  );
}
