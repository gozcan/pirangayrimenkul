import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const FAQ = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = [
    'urbanTransformation',
    'valuation',
    'construction',
    'general',
  ];

  const faqs = categories.map((cat, catIndex) => ({
    category: t(`faq.categories.${cat}.title`),
    gradient:
      catIndex % 2 === 0
        ? 'from-slate-600 to-slate-700'
        : 'from-slate-500 to-slate-600',
    questions: t(`faq.categories.${cat}.questions`, {
      returnObjects: true,
    }) as Array<{ q: string; a: string }>,
  }));

  return (
    <section
      id="faq"
      className="relative scroll-mt-8 py-8 bg-slate-50 overflow-hidden"
    >
      {/* Diagonal Lines Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 50px,
            rgb(100 116 139 / 0.08) 50px,
            rgb(100 116 139 / 0.08) 52px
          )`,
          }}
        />
      </div>

      {/* Large Geometric Shapes */}
      <div className="absolute top-20 right-20 w-72 h-72 opacity-15">
        <div className="absolute inset-0 border-4 border-slate-300 rounded-full" />
        <div className="absolute inset-12 border-4 border-blue-300 rounded-full" />
        <div className="absolute inset-24 border-4 border-slate-300 rounded-full" />
      </div>

      <div className="absolute bottom-20 left-20 w-56 h-56 border-4 border-slate-300/40 rounded-3xl rotate-12" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-slate-200/50 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 via-purple-600 to-amber-600">
              {t('faq.title')}
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            {t('faq.subtitle')}
          </p>
        </motion.div>

        {/* FAQ Categories */}
        <div className="max-w-5xl mx-auto space-y-12">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              {/* Category Title */}
              <div className="mb-6">
                <h3
                  className={`text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r ${category.gradient} mb-2`}
                >
                  {category.category}
                </h3>
                <div
                  className={`h-1 w-20 bg-linear-to-r ${category.gradient} rounded-full`}
                />
              </div>

              {/* Questions */}
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 10 + faqIndex;
                  const isOpen = openIndex === globalIndex;

                  return (
                    <motion.div
                      key={faqIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: faqIndex * 0.05 }}
                      className="backdrop-blur-xl bg-white/90 rounded-xl border border-slate-200 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      {/* Question */}
                      <button
                        onClick={() =>
                          setOpenIndex(isOpen ? null : globalIndex)
                        }
                        className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors duration-200"
                      >
                        <span className="text-lg font-bold text-slate-800 flex-1">
                          {faq.q}
                        </span>
                        <div
                          className={`flex-shrink-0 w-8 h-8 rounded-full bg-linear-to-br ${
                            category.gradient
                          } flex items-center justify-center transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        >
                          <span className="text-white text-xl font-bold">
                            {isOpen ? '−' : '+'}
                          </span>
                        </div>
                      </button>

                      {/* Answer */}
                      <motion.div
                        initial={false}
                        animate={{
                          height: isOpen ? 'auto' : 0,
                          opacity: isOpen ? 1 : 0,
                        }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4 pt-2">
                          <div
                            className={`h-1 w-full bg-linear-to-r ${category.gradient} rounded-full mb-4 opacity-20`}
                          />
                          <p className="text-slate-600 leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block backdrop-blur-xl bg-white/90 rounded-2xl p-8 border border-slate-200 shadow-lg">
            <p className="text-slate-700 text-lg mb-4">
              {t('faq.contactCta.question')}
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-linear-to-r from-blue-500 to-purple-600 text-white rounded-xl font-bold hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              {t('faq.contactCta.button')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
