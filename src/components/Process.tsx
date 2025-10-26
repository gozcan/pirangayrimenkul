import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Process = () => {
  const { t } = useTranslation();

  const steps = [
    {
      number: '01',
      title: t('process.steps.contact.title'),
      description: t('process.steps.contact.description'),
      features: t('process.steps.contact.details', {
        returnObjects: true,
      }) as string[],
      gradient: 'from-slate-600 to-slate-700',
      bgColor: 'bg-slate-50',
      borderColor: 'border-slate-200',
    },
    {
      number: '02',
      title: t('process.steps.analysis.title'),
      description: t('process.steps.analysis.description'),
      features: t('process.steps.analysis.details', {
        returnObjects: true,
      }) as string[],
      gradient: 'from-slate-500 to-slate-600',
      bgColor: 'bg-slate-50',
      borderColor: 'border-slate-200',
    },
    {
      number: '03',
      title: t('process.steps.planning.title'),
      description: t('process.steps.planning.description'),
      features: t('process.steps.planning.details', {
        returnObjects: true,
      }) as string[],
      gradient: 'from-slate-600 to-slate-700',
      bgColor: 'bg-slate-50',
      borderColor: 'border-slate-200',
    },
    {
      number: '04',
      title: t('process.steps.implementation.title'),
      description: t('process.steps.implementation.description'),
      features: t('process.steps.implementation.details', {
        returnObjects: true,
      }) as string[],
      gradient: 'from-slate-500 to-slate-600',
      bgColor: 'bg-slate-50',
      borderColor: 'border-slate-200',
    },
    {
      number: '05',
      title: t('process.steps.monitoring.title'),
      description: t('process.steps.monitoring.description'),
      features: t('process.steps.monitoring.details', {
        returnObjects: true,
      }) as string[],
      gradient: 'from-slate-600 to-slate-700',
      bgColor: 'bg-slate-50',
      borderColor: 'border-slate-200',
    },
    {
      number: '06',
      title: t('process.steps.completion.title'),
      description: t('process.steps.completion.description'),
      features: t('process.steps.completion.details', {
        returnObjects: true,
      }) as string[],
      gradient: 'from-slate-500 to-slate-600',
      bgColor: 'bg-slate-50',
      borderColor: 'border-slate-200',
    },
  ];

  return (
    <section
      id="process"
      className="relative scroll-mt-8 py-8 bg-blue-50 overflow-hidden"
    >
      {/* Circuit Board Lines */}
      <div className="absolute inset-0 opacity-20">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="circuit"
              x="0"
              y="0"
              width="200"
              height="200"
              patternUnits="userSpaceOnUse"
            >
              <line
                x1="0"
                y1="50"
                x2="100"
                y2="50"
                stroke="rgb(59 130 246)"
                strokeWidth="1"
              />
              <line
                x1="100"
                y1="50"
                x2="100"
                y2="150"
                stroke="rgb(59 130 246)"
                strokeWidth="1"
              />
              <line
                x1="100"
                y1="150"
                x2="200"
                y2="150"
                stroke="rgb(59 130 246)"
                strokeWidth="1"
              />
              <circle
                cx="100"
                cy="50"
                r="3"
                fill="rgb(59 130 246)"
              />
              <circle
                cx="100"
                cy="150"
                r="3"
                fill="rgb(59 130 246)"
              />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#circuit)"
          />
        </svg>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 right-40 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-40 w-64 h-64 bg-sky-200/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <div className="px-6 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200 rounded-full">
              <span className="text-sm font-bold text-blue-600">
                {t('process.subtitle').toUpperCase()}
              </span>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700">
              {t('process.title')}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Profesyonel gayrimenkul danışmanlığı sürecimiz, başarı odaklı 6
            adımdan oluşur
          </p>
        </motion.div>

        {/* Process Steps - Vertical Timeline */}
        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative mb-16 last:mb-0"
            >
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left Side - Content (alternates with visual on mobile) */}
                <div
                  className={`${index % 2 === 1 ? 'lg:order-2' : ''} space-y-6`}
                >
                  {/* Step Number Badge */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`inline-flex items-center gap-4 backdrop-blur-xl ${step.bgColor} border-2 ${step.borderColor} rounded-2xl px-6 py-3 shadow-lg`}
                  >
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-md`}
                    >
                      <span className="text-white font-black text-2xl">
                        {step.number}
                      </span>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                        Adım
                      </div>
                      <div
                        className={`text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r ${step.gradient}`}
                      >
                        {step.number} / 06
                      </div>
                    </div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-3xl lg:text-4xl font-black text-slate-800">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3">
                    {step.features.map((feature, fIndex) => (
                      <motion.div
                        key={fIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.15 + fIndex * 0.1,
                        }}
                        className="flex items-center gap-3"
                      >
                        <div
                          className={`w-6 h-6 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center flex-shrink-0`}
                        >
                          <span className="text-white text-xs font-bold">
                            ✓
                          </span>
                        </div>
                        <span className="text-slate-700 font-medium">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Right Side - Visual Card */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative group"
                  >
                    {/* Main Card */}
                    <div
                      className={`relative backdrop-blur-xl bg-white border-2 ${step.borderColor} rounded-3xl p-8 shadow-xl overflow-hidden`}
                    >
                      {/* Gradient Background */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
                      />

                      {/* Content */}
                      <div className="relative z-10">
                        {/* Large Number Display */}
                        <div
                          className={`text-9xl font-black bg-clip-text text-transparent bg-gradient-to-br ${step.gradient} opacity-20 leading-none mb-4`}
                        >
                          {step.number}
                        </div>

                        {/* Progress Bar */}
                        <div className="mb-6">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-bold text-slate-500">
                              İLERLEME
                            </span>
                            <span
                              className={`text-xs font-bold bg-clip-text text-transparent bg-gradient-to-r ${step.gradient}`}
                            >
                              {Math.round(((index + 1) / steps.length) * 100)}%
                            </span>
                          </div>
                          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{
                                width: `${((index + 1) / steps.length) * 100}%`,
                              }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 1,
                                delay: index * 0.15 + 0.3,
                              }}
                              className={`h-full bg-gradient-to-r ${step.gradient} rounded-full`}
                            />
                          </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="grid grid-cols-3 gap-3">
                          {[...Array(6)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.3,
                                delay: index * 0.15 + i * 0.05,
                              }}
                              className={`h-16 rounded-xl ${step.bgColor} border ${step.borderColor} flex items-center justify-center`}
                            >
                              <div
                                className={`w-2 h-2 rounded-full bg-gradient-to-br ${step.gradient}`}
                              />
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Accent Line */}
                      <div
                        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.gradient}`}
                      />
                    </div>

                    {/* Floating Accent */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
                      className={`absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-gradient-to-br ${step.gradient} opacity-20 blur-xl`}
                    />
                  </motion.div>
                </div>
              </div>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.5 }}
                  className="hidden lg:block absolute left-1/2 -bottom-8 w-0.5 h-16 bg-gradient-to-b from-slate-300 to-transparent transform -translate-x-1/2 origin-top"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="relative inline-block">
            <div className="relative backdrop-blur-xl bg-gradient-to-r from-slate-700 to-slate-800 rounded-3xl p-12 border border-white/10 shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />

              <div className="relative z-10 max-w-2xl mx-auto">
                <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                  {t('process.cta.title')}
                </h3>
                <p className="text-white/90 text-lg mb-8">
                  {t('process.cta.description')}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a
                    href="#contact"
                    className="group px-8 py-4 bg-white text-purple-600 rounded-xl font-bold hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2"
                  >
                    <span>{t('process.cta.button')}</span>
                    <span className="text-xl group-hover:translate-x-1 transition-transform inline-block">
                      →
                    </span>
                  </a>
                  <a
                    href="tel:+905301234567"
                    className="px-8 py-4 bg-white/10 backdrop-blur-xl text-white border-2 border-white/30 rounded-xl font-bold hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
                  >
                    <span className="text-xl">☎</span>
                    <span>{t('process.cta.callNow')}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Decorative Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-slate-600 to-slate-700 rounded-3xl opacity-15 blur-2xl -z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
