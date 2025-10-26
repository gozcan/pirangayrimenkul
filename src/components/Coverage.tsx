import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Coverage = () => {
  const { t } = useTranslation();

  const districts = [
    // Avrupa Yakası
    { name: 'Beşiktaş', zone: 'Avrupa', color: 'blue', active: true },
    { name: 'Şişli', zone: 'Avrupa', color: 'blue', active: true },
    { name: 'Kadıköy', zone: 'Asya', color: 'purple', active: true },
    { name: 'Üsküdar', zone: 'Asya', color: 'purple', active: true },
    { name: 'Sarıyer', zone: 'Avrupa', color: 'blue', active: true },
    { name: 'Beyoğlu', zone: 'Avrupa', color: 'blue', active: true },
    { name: 'Fatih', zone: 'Avrupa', color: 'blue', active: true },
    { name: 'Eyüpsultan', zone: 'Avrupa', color: 'blue', active: true },
    { name: 'Kağıthane', zone: 'Avrupa', color: 'blue', active: true },
    { name: 'Gaziosmanpaşa', zone: 'Avrupa', color: 'blue', active: true },
    { name: 'Bayrampaşa', zone: 'Avrupa', color: 'blue', active: true },
    { name: 'Esenler', zone: 'Avrupa', color: 'blue', active: true },
    { name: 'Güngören', zone: 'Avrupa', color: 'blue', active: true },
    { name: 'Zeytinburnu', zone: 'Avrupa', color: 'blue', active: true },
    { name: 'Bakırköy', zone: 'Avrupa', color: 'blue', active: true },
    { name: 'Bahçelievler', zone: 'Avrupa', color: 'blue', active: true },
    { name: 'Küçükçekmece', zone: 'Avrupa', color: 'blue', active: true },
    { name: 'Avcılar', zone: 'Avrupa', color: 'blue', active: true },
    { name: 'Beylikdüzü', zone: 'Avrupa', color: 'blue', active: true },
    { name: 'Esenyurt', zone: 'Avrupa', color: 'blue', active: true },
    { name: 'Başakşehir', zone: 'Avrupa', color: 'blue', active: true },
    { name: 'Arnavutköy', zone: 'Avrupa', color: 'blue', active: true },
    // Asya Yakası
    { name: 'Ataşehir', zone: 'Asya', color: 'purple', active: true },
    { name: 'Maltepe', zone: 'Asya', color: 'purple', active: true },
    { name: 'Kartal', zone: 'Asya', color: 'purple', active: true },
    { name: 'Pendik', zone: 'Asya', color: 'purple', active: true },
    { name: 'Tuzla', zone: 'Asya', color: 'purple', active: true },
    { name: 'Sultanbeyli', zone: 'Asya', color: 'purple', active: true },
    { name: 'Sancaktepe', zone: 'Asya', color: 'purple', active: true },
    { name: 'Çekmeköy', zone: 'Asya', color: 'purple', active: true },
    { name: 'Ümraniye', zone: 'Asya', color: 'purple', active: true },
    { name: 'Beykoz', zone: 'Asya', color: 'purple', active: true },
    { name: 'Şile', zone: 'Asya', color: 'purple', active: true },
    { name: 'Çatalca', zone: 'Avrupa', color: 'blue', active: false },
    { name: 'Silivri', zone: 'Avrupa', color: 'blue', active: false },
  ];

  const stats = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      value: t('coverage.stats.projects.value'),
      label: t('coverage.stats.projects.label'),
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      value: t('coverage.stats.satisfaction.value'),
      label: t('coverage.stats.satisfaction.label'),
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      value: t('coverage.stats.experience.value'),
      label: t('coverage.stats.experience.label'),
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      value: t('coverage.stats.clients.value'),
      label: t('coverage.stats.clients.label'),
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section
      id="coverage"
      className="relative scroll-mt-8 py-8 bg-linear-to-b from-slate-50 to-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: '1s' }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6"
          >
            <svg
              className="w-5 h-5 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="text-sm font-bold text-blue-700">
              {t('coverage.badge')}
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 via-purple-600 to-pink-600">
              {t('coverage.title')}
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t('coverage.subtitle')}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Card Background Glow */}
              <div
                className={`absolute -inset-1 bg-linear-to-r ${stat.gradient} rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition duration-500`}
              />

              {/* Card */}
              <div className="relative backdrop-blur-xl bg-white rounded-2xl p-6 border border-slate-200 shadow-lg h-full">
                <div
                  className={`w-14 h-14 rounded-xl bg-linear-to-br ${stat.gradient} flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {stat.icon}
                </div>
                <div
                  className={`text-4xl font-black bg-clip-text text-transparent bg-linear-to-r ${stat.gradient} mb-2`}
                >
                  {stat.value}
                </div>
                <div className="text-slate-600 text-sm font-semibold">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Districts Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Avrupa Yakası */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative backdrop-blur-xl bg-white rounded-3xl p-8 border border-slate-200 shadow-xl h-full">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-linear-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl blur-2xl" />

              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-xl">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-800">
                      {t('coverage.zones.european')}
                    </h3>
                    <p className="text-blue-600 font-semibold">
                      {t('coverage.zones.europeanCount')}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {districts
                    .filter((d) => d.zone === 'Avrupa' && d.active)
                    .map((district, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, y: -3 }}
                        transition={{ duration: 0.2, delay: index * 0.03 }}
                        className="relative group cursor-pointer"
                      >
                        <div className="absolute inset-0 bg-linear-to-br from-blue-500 to-cyan-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                        <div className="relative bg-linear-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 group-hover:border-blue-400 rounded-xl px-4 py-3 transition-all duration-300">
                          <p className="text-sm font-bold text-blue-700 text-center">
                            {district.name}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Asya Yakası */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative backdrop-blur-xl bg-white rounded-3xl p-8 border border-slate-200 shadow-xl h-full">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-linear-to-br from-purple-500/10 to-pink-500/10 rounded-3xl blur-2xl" />

              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-xl">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-800">
                      {t('coverage.zones.asian')}
                    </h3>
                    <p className="text-purple-600 font-semibold">
                      {t('coverage.zones.asianCount')}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {districts
                    .filter((d) => d.zone === 'Asya' && d.active)
                    .map((district, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, y: -3 }}
                        transition={{ duration: 0.2, delay: index * 0.03 }}
                        className="relative group cursor-pointer"
                      >
                        <div className="absolute inset-0 bg-linear-to-br from-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                        <div className="relative bg-linear-to-br from-purple-50 to-pink-50 border-2 border-purple-200 group-hover:border-purple-400 rounded-xl px-4 py-3 transition-all duration-300">
                          <p className="text-sm font-bold text-purple-700 text-center">
                            {district.name}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-block backdrop-blur-xl bg-linear-to-r from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 shadow-2xl">
            <h3 className="text-2xl font-black text-white mb-3">
              {t('coverage.cta.title')}
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl">
              {t('coverage.cta.subtitle')}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-semibold text-white">
                  {t('coverage.cta.support')}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-semibold text-white">
                  {t('coverage.cta.evaluation')}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-semibold text-white">
                  {t('coverage.cta.appointment')}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Coverage;
