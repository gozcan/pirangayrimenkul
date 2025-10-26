import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const About: React.FC = () => {
  const { t } = useTranslation('common');
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const features = [
    {
      title: t('about.features.team.title'),
      description: t('about.features.team.description'),
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: t('about.features.quality.title'),
      description: t('about.features.quality.description'),
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: t('about.features.focus.title'),
      description: t('about.features.focus.description'),
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      title: t('about.features.innovation.title'),
      description: t('about.features.innovation.description'),
      gradient: 'from-emerald-500 to-teal-500',
    },
  ];

  const stats = [
    {
      label: t('about.stats.activeProjects'),
      value: '50+',
      color: 'from-blue-400 to-cyan-400',
    },
    {
      label: t('about.stats.successRate'),
      value: '%98',
      color: 'from-purple-400 to-pink-400',
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative scroll-mt-32 py-8 bg-blue-50 overflow-hidden"
    >
      {/* Grid Pattern with Gradient */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(to right, rgb(59 130 246 / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(59 130 246 / 0.1) 1px, transparent 1px)
          `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Plus Signs Decoration */}
      <div className="absolute top-40 left-20 text-6xl font-light text-blue-200/40 select-none">
        +
      </div>
      <div className="absolute bottom-32 right-32 text-8xl font-light text-blue-200/30 select-none">
        +
      </div>
      <div className="absolute top-1/2 right-16 text-5xl font-light text-blue-200/35 select-none">
        +
      </div>

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-50/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 via-purple-600 to-amber-600">
                {t('about.title')}
              </span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {t('about.description')}
            </p>

            {/* Features */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative backdrop-blur-xl bg-white/90 rounded-xl p-4 border border-slate-200 hover:border-slate-300 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  {/* Gradient accent line */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b ${feature.gradient} rounded-l-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  <div className="pl-2">
                    <h3 className="text-lg font-bold text-slate-800 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8"
            ></motion.div>
          </motion.div>

          {/* Right Column - Stats Visualization */}
          <motion.div
            style={{ y, opacity }}
            className="relative"
          >
            {/* Main gradient card */}
            <div className="relative backdrop-blur-xl bg-white/90 rounded-2xl p-12 border border-slate-200 shadow-xl">
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-purple-500/10 to-amber-500/10 rounded-2xl" />

              <div className="relative z-10 text-center">
                <p className="text-slate-600 font-medium text-lg mb-2">
                  {t('about.tagline.line1')}
                </p>
                <p className="text-slate-800 font-black text-2xl mb-8">
                  {t('about.tagline.line2')}
                </p>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-6 mt-8">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className="backdrop-blur-xl bg-white/90 rounded-xl p-6 border border-slate-200 shadow-md"
                    >
                      <p
                        className={`text-3xl font-black bg-clip-text text-transparent bg-linear-to-r ${stat.color} mb-2`}
                      >
                        {stat.value}
                      </p>
                      <p className="text-slate-600 text-sm">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Decorative glow elements */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />
            </div>

            {/* Floating accent cards */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -top-6 -left-6 backdrop-blur-xl bg-emerald-50 border border-emerald-300 rounded-xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-emerald-700">
                  {t('about.badges.coverage')}
                </span>
              </div>
              <p className="text-lg font-bold text-emerald-800 mt-1">
                {t('about.badges.coverageValue')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 -right-6 backdrop-blur-xl bg-amber-50 border border-amber-300 rounded-xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-amber-700">
                  {t('about.badges.experience')}
                </span>
              </div>
              <p className="text-lg font-bold text-amber-800 mt-1">
                {t('about.badges.experienceValue')}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
