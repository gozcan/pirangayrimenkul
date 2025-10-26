import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const KVKK = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen py-24 bg-slate-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(to right, rgb(100 116 139 / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(100 116 139 / 0.1) 1px, transparent 1px)
          `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-black mb-8">
            <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 via-purple-600 to-amber-600">
              {t('legal.kvkk.title')}
            </span>
          </h1>

          <div className="prose prose-slate max-w-none">
            <div className="backdrop-blur-xl bg-white/90 rounded-2xl p-8 border border-slate-200 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">
                {t('legal.kvkk.intro.title')}
              </h2>
              <p className="text-slate-600 leading-relaxed">
                {t('legal.kvkk.intro.content')}
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/90 rounded-2xl p-8 border border-slate-200 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">
                {t('legal.kvkk.controller.title')}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                {t('legal.kvkk.controller.content')}
              </p>
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="text-slate-700 font-semibold mb-2">
                  Piran Gayrimenkul Danışmanlık
                </p>
                <p className="text-slate-600 text-sm">
                  Adres: Küçük Çamlıca Mah. Libadiye Cad. No:52 Üsküdar/İstanbul
                </p>
                <p className="text-slate-600 text-sm">
                  E-posta: info@pirangayrimenkul.com
                </p>
                <p className="text-slate-600 text-sm">
                  Telefon: +90 530 123 45 67
                </p>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-white/90 rounded-2xl p-8 border border-slate-200 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">
                {t('legal.kvkk.processing.title')}
              </h2>
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                <li>{t('legal.kvkk.processing.item1')}</li>
                <li>{t('legal.kvkk.processing.item2')}</li>
                <li>{t('legal.kvkk.processing.item3')}</li>
                <li>{t('legal.kvkk.processing.item4')}</li>
                <li>{t('legal.kvkk.processing.item5')}</li>
              </ul>
            </div>

            <div className="backdrop-blur-xl bg-white/90 rounded-2xl p-8 border border-slate-200 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">
                {t('legal.kvkk.purposes.title')}
              </h2>
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                <li>{t('legal.kvkk.purposes.item1')}</li>
                <li>{t('legal.kvkk.purposes.item2')}</li>
                <li>{t('legal.kvkk.purposes.item3')}</li>
                <li>{t('legal.kvkk.purposes.item4')}</li>
              </ul>
            </div>

            <div className="backdrop-blur-xl bg-white/90 rounded-2xl p-8 border border-slate-200 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">
                {t('legal.kvkk.rights.title')}
              </h2>
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                <li>{t('legal.kvkk.rights.item1')}</li>
                <li>{t('legal.kvkk.rights.item2')}</li>
                <li>{t('legal.kvkk.rights.item3')}</li>
                <li>{t('legal.kvkk.rights.item4')}</li>
                <li>{t('legal.kvkk.rights.item5')}</li>
                <li>{t('legal.kvkk.rights.item6')}</li>
                <li>{t('legal.kvkk.rights.item7')}</li>
                <li>{t('legal.kvkk.rights.item8')}</li>
              </ul>
            </div>

            <div className="backdrop-blur-xl bg-white/90 rounded-2xl p-8 border border-slate-200 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">
                {t('legal.kvkk.application.title')}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                {t('legal.kvkk.application.content')}
              </p>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="text-slate-700 font-semibold mb-2">
                  {t('legal.kvkk.application.methods')}
                </p>
                <ul className="list-disc list-inside space-y-1 text-slate-600 text-sm">
                  <li>{t('legal.kvkk.application.method1')}</li>
                  <li>{t('legal.kvkk.application.method2')}</li>
                  <li>{t('legal.kvkk.application.method3')}</li>
                </ul>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-white/90 rounded-2xl p-8 border border-slate-200 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">
                {t('legal.kvkk.security.title')}
              </h2>
              <p className="text-slate-600 leading-relaxed">
                {t('legal.kvkk.security.content')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default KVKK;
