import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const TermsOfService = () => {
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
              {t('legal.terms.title')}
            </span>
          </h1>

          <div className="prose prose-slate max-w-none">
            <div className="backdrop-blur-xl bg-white/90 rounded-2xl p-8 border border-slate-200 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">
                {t('legal.terms.acceptance.title')}
              </h2>
              <p className="text-slate-600 leading-relaxed">
                {t('legal.terms.acceptance.content')}
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/90 rounded-2xl p-8 border border-slate-200 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">
                {t('legal.terms.services.title')}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                {t('legal.terms.services.content')}
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                <li>{t('legal.terms.services.item1')}</li>
                <li>{t('legal.terms.services.item2')}</li>
                <li>{t('legal.terms.services.item3')}</li>
                <li>{t('legal.terms.services.item4')}</li>
              </ul>
            </div>

            <div className="backdrop-blur-xl bg-white/90 rounded-2xl p-8 border border-slate-200 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">
                {t('legal.terms.obligations.title')}
              </h2>
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                <li>{t('legal.terms.obligations.item1')}</li>
                <li>{t('legal.terms.obligations.item2')}</li>
                <li>{t('legal.terms.obligations.item3')}</li>
                <li>{t('legal.terms.obligations.item4')}</li>
              </ul>
            </div>

            <div className="backdrop-blur-xl bg-white/90 rounded-2xl p-8 border border-slate-200 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">
                {t('legal.terms.intellectual.title')}
              </h2>
              <p className="text-slate-600 leading-relaxed">
                {t('legal.terms.intellectual.content')}
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/90 rounded-2xl p-8 border border-slate-200 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">
                {t('legal.terms.limitation.title')}
              </h2>
              <p className="text-slate-600 leading-relaxed">
                {t('legal.terms.limitation.content')}
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/90 rounded-2xl p-8 border border-slate-200 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">
                {t('legal.terms.termination.title')}
              </h2>
              <p className="text-slate-600 leading-relaxed">
                {t('legal.terms.termination.content')}
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/90 rounded-2xl p-8 border border-slate-200 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">
                {t('legal.terms.law.title')}
              </h2>
              <p className="text-slate-600 leading-relaxed">
                {t('legal.terms.law.content')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TermsOfService;
