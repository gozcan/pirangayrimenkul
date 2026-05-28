import type { Metadata } from "next";
import LegalLayout from "../components/LegalLayout";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description:
    "6698 sayılı Kişisel Verilerin Korunması Kanunu uyarınca Piran Gayrimenkul aydınlatma metni: işlenen veriler, amaçlar, aktarım ve haklarınız.",
  alternates: {
    canonical: "https://www.pirangyd.com/kvkk",
    languages: {
      tr: "https://www.pirangyd.com/kvkk",
      en: "https://www.pirangyd.com/kvkk?lang=en",
    },
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <LegalLayout
      eyebrowTr="KVKK · YASAL"
      eyebrowEn="KVKK · LEGAL"
      titleTr="KVKK Aydınlatma Metni"
      titleEn="KVKK Information Notice"
      breadcrumbTr="KVKK"
      breadcrumbEn="KVKK"
      ledeTr="6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında, Piran Gayrimenkul tarafından işlenen kişisel verilerinize ilişkin bilgilendirme metnidir."
      ledeEn="Information notice on personal data processed by Piran Gayrimenkul under Turkish Law No. 6698 on the Protection of Personal Data."
      revisedTr="26 Mayıs 2026"
      revisedEn="26 May 2026"
    >
      <h2><span data-tr>1. Veri Sorumlusunun Kimliği</span><span data-en>1. Identity of the Data Controller</span></h2>
      <p>
        <span data-tr>İşbu aydınlatma metni, <strong>Piran Gayrimenkul</strong> tarafından, KVKK m. 10 ve Aydınlatma Yükümlülüğünün Yerine Getirilmesinde Uyulacak Usul ve Esaslar Hakkında Tebliğ uyarınca hazırlanmıştır.</span>
        <span data-en>This notice is published by <strong>Piran Gayrimenkul</strong> under Article 10 of Law No. 6698 and the related Communiqué on the Procedures and Principles for Fulfilment of the Obligation to Inform.</span>
      </p>
      <ul>
        <li><strong><span data-tr>Unvan:</span><span data-en>Trade name:</span></strong> Piran Gayrimenkul</li>
        <li><strong><span data-tr>Adres:</span><span data-en>Address:</span></strong> Küçük Çamlıca Mah. Libadiye Cad. No 52, Üsküdar / İstanbul</li>
        <li><strong><span data-tr>Telefon:</span><span data-en>Phone:</span></strong> 0850 346 46 52</li>
        <li><strong><span data-tr>E-posta:</span><span data-en>Email:</span></strong> info@pirangyd.com</li>
      </ul>

      <h2><span data-tr>2. İşlenen Kişisel Veriler</span><span data-en>2. Personal Data Processed</span></h2>
      <p>
        <span data-tr>Hizmet ilişkisi ve web sitesi kullanımı kapsamında aşağıdaki veri kategorileri işlenebilir:</span>
        <span data-en>The following categories may be processed in the course of providing our services and through the use of our website:</span>
      </p>
      <ul>
        <li><span data-tr><strong>Kimlik:</strong> ad-soyad, T.C. kimlik numarası (sözleşme tarafıysanız).</span><span data-en><strong>Identity:</strong> name, T.C. ID number (where you are a contracting party).</span></li>
        <li><span data-tr><strong>İletişim:</strong> telefon, e-posta, adres.</span><span data-en><strong>Contact:</strong> phone, email, address.</span></li>
        <li><span data-tr><strong>Müşteri/işlem:</strong> talep notları, görüşme ve toplantı kayıtları, sözleşme bilgileri.</span><span data-en><strong>Client / transaction:</strong> request notes, meeting records, contract data.</span></li>
        <li><span data-tr><strong>Finansal:</strong> fatura ve ödeme bilgileri (yalnızca sözleşme tarafıysanız).</span><span data-en><strong>Financial:</strong> invoice and payment data (only for contracting parties).</span></li>
        <li><span data-tr><strong>Hukuki işlem:</strong> yetkili kurumlarla yapılan yazışmalar.</span><span data-en><strong>Legal:</strong> correspondence with public authorities.</span></li>
        <li><span data-tr><strong>İşlem güvenliği:</strong> IP adresi, çerez verisi, log kayıtları.</span><span data-en><strong>Transaction security:</strong> IP address, cookie data, log records.</span></li>
      </ul>

      <h2><span data-tr>3. İşleme Amaçları ve Hukuki Sebep</span><span data-en>3. Purposes and Lawful Bases</span></h2>
      <p>
        <span data-tr>Verileriniz aşağıdaki amaçlarla, KVKK m. 5/2 (sözleşmenin kurulması veya ifası için zorunluluk, hukuki yükümlülük, meşru menfaat) ve gerektiğinde m. 5/1 (açık rıza) hukuki sebeplerine dayalı olarak işlenir:</span>
        <span data-en>Data is processed for the purposes below, based on the lawful grounds in Article 5/2 (necessity for the establishment or performance of a contract, legal obligation, legitimate interest) and where required, Article 5/1 (explicit consent):</span>
      </p>
      <ul>
        <li><span data-tr>Hizmet sunumu, sözleşme yönetimi ve müşteri ilişkilerinin yürütülmesi.</span><span data-en>Service delivery, contract management and client relations.</span></li>
        <li><span data-tr>Yasal yükümlülüklerin yerine getirilmesi (örn. 6306 sayılı kanun süreçleri, vergi, SGK).</span><span data-en>Compliance with legal obligations (Law 6306 processes, tax, social security).</span></li>
        <li><span data-tr>Talep, şikâyet ve geri bildirimlerin değerlendirilmesi.</span><span data-en>Evaluation of inquiries, complaints and feedback.</span></li>
        <li><span data-tr>Web sitesinin güvenliği ve performans ölçümü.</span><span data-en>Website security and performance measurement.</span></li>
      </ul>

      <h2><span data-tr>4. Aktarım</span><span data-en>4. Data Transfer</span></h2>
      <p>
        <span data-tr>Kişisel verileriniz; yasal yükümlülükler kapsamında yetkili kamu kurum ve kuruluşlarına (Çevre, Şehircilik ve İklim Değişikliği Bakanlığı, belediyeler, mahkemeler), sözleşme ilişkisi içinde olduğumuz tedarikçilerimize (yapı denetim firması, noter, mali müşavir, hosting sağlayıcı) ve açık rızanız bulunması hâlinde diğer üçüncü taraflara aktarılabilir.</span>
        <span data-en>Data may be shared with public authorities (Ministry of Environment, Urbanism &amp; Climate Change, municipalities, courts), contracted processors (building inspection firm, notary, accountant, hosting provider) and, where you have given explicit consent, with other third parties.</span>
      </p>

      <h2><span data-tr>5. Toplama Yöntemi</span><span data-en>5. Method of Collection</span></h2>
      <p>
        <span data-tr>Veriler; web sitesi formları, e-posta yazışmaları, telefon görüşmeleri, basılı veya elektronik sözleşmeler aracılığıyla ve hukuki yükümlülükler kapsamında üçüncü taraflardan elde edilir.</span>
        <span data-en>Data is collected via web forms, email correspondence, phone calls, paper or electronic contracts, and from third parties where required by law.</span>
      </p>

      <h2><span data-tr>6. KVKK m. 11 Kapsamındaki Haklarınız</span><span data-en>6. Your Rights under Article 11</span></h2>
      <p>
        <span data-tr>Her ilgili kişi kendisine ait kişisel veriler hakkında aşağıdaki haklara sahiptir:</span>
        <span data-en>Every data subject has the following rights regarding their personal data:</span>
      </p>
      <ul>
        <li><span data-tr>İşlenip işlenmediğini öğrenme.</span><span data-en>Learn whether data is being processed.</span></li>
        <li><span data-tr>İşlenmişse buna ilişkin bilgi talep etme.</span><span data-en>Request information about such processing.</span></li>
        <li><span data-tr>İşleme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme.</span><span data-en>Learn the purpose and whether use is consistent with the purpose.</span></li>
        <li><span data-tr>Aktarıldığı üçüncü tarafları öğrenme.</span><span data-en>Know the third parties to whom data has been transferred.</span></li>
        <li><span data-tr>Eksik veya yanlış işlenmişse düzeltilmesini isteme.</span><span data-en>Request correction of incomplete or inaccurate data.</span></li>
        <li><span data-tr>Silinmesini veya yok edilmesini talep etme.</span><span data-en>Request deletion or destruction.</span></li>
        <li><span data-tr>Otomatik sistemlerle analiz sonucu aleyhinize bir sonuç çıkmasına itiraz etme.</span><span data-en>Object to outcomes derived solely from automated analysis.</span></li>
        <li><span data-tr>Kanuna aykırı işleme nedeniyle uğranılan zararın giderilmesini talep etme.</span><span data-en>Claim compensation for damages caused by unlawful processing.</span></li>
      </ul>

      <h2><span data-tr>7. Başvuru Yolu</span><span data-en>7. How to Apply</span></h2>
      <p>
        <span data-tr>Başvurularınızı; ıslak imzalı bir dilekçe ile <strong>Küçük Çamlıca Mah. Libadiye Cad. No 52, Üsküdar / İstanbul</strong> adresine veya elektronik ortamda <a href="mailto:info@pirangyd.com">info@pirangyd.com</a> adresine iletebilirsiniz. Başvurular en geç 30 gün içinde ücretsiz olarak sonuçlandırılır.</span>
        <span data-en>You may submit a wet-signed petition to <strong>Küçük Çamlıca Mah. Libadiye Cad. No 52, Üsküdar / İstanbul</strong> or send an email to <a href="mailto:info@pirangyd.com">info@pirangyd.com</a>. Applications are answered within 30 days at no charge.</span>
      </p>
    </LegalLayout>
  );
}
