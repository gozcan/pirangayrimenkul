import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const { t } = useTranslation('common');

  const services = [
    {
      title: t('services.urbanTransformation.title'),
      description: t('services.urbanTransformation.description'),
      gradient: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-400/30',
      hoverBorder: 'group-hover:border-blue-400/70',
      visual: (
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full"
        >
          {/* Urban Transformation - Buildings with Renovation Symbol */}
          {/* Old/Damaged Buildings Group */}
          <g opacity="0.5">
            <rect
              x="30"
              y="100"
              width="30"
              height="70"
              fill="currentColor"
              className="text-slate-400"
            />
            <rect
              x="35"
              y="110"
              width="8"
              height="8"
              fill="currentColor"
              className="text-slate-600"
            />
            <rect
              x="50"
              y="110"
              width="8"
              height="8"
              fill="currentColor"
              className="text-slate-600"
            />
            <rect
              x="35"
              y="125"
              width="8"
              height="8"
              fill="currentColor"
              className="text-slate-600"
            />
            <rect
              x="50"
              y="125"
              width="8"
              height="8"
              fill="currentColor"
              className="text-slate-600"
            />
            <rect
              x="35"
              y="140"
              width="8"
              height="8"
              fill="currentColor"
              className="text-slate-600"
            />
            <rect
              x="50"
              y="140"
              width="8"
              height="8"
              fill="currentColor"
              className="text-slate-600"
            />
            {/* Cracks on old building */}
            <path
              d="M 35 100 L 32 120 L 35 140"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-red-400"
            />
          </g>

          {/* Transformation Arrow/Circular Icon */}
          <g>
            <circle
              cx="100"
              cy="100"
              r="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="text-blue-500"
              strokeDasharray="60 10"
            />
            <path
              d="M 115 95 L 125 100 L 115 105"
              fill="currentColor"
              className="text-blue-600"
            />
            <path
              d="M 90 85 L 110 85 L 110 80 L 120 90 L 110 100 L 110 95 L 90 95 Z"
              fill="currentColor"
              className="text-blue-500 animate-pulse"
            />
          </g>

          {/* New Modern Buildings */}
          <g>
            {/* Main modern building */}
            <rect
              x="130"
              y="70"
              width="45"
              height="100"
              rx="2"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
              className="text-blue-500 stroke-blue-600"
            />

            {/* Windows pattern */}
            <rect
              x="137"
              y="80"
              width="8"
              height="10"
              rx="1"
              fill="currentColor"
              className="text-cyan-300"
            />
            <rect
              x="150"
              y="80"
              width="8"
              height="10"
              rx="1"
              fill="currentColor"
              className="text-cyan-300"
            />
            <rect
              x="163"
              y="80"
              width="8"
              height="10"
              rx="1"
              fill="currentColor"
              className="text-cyan-300"
            />

            <rect
              x="137"
              y="95"
              width="8"
              height="10"
              rx="1"
              fill="currentColor"
              className="text-cyan-300"
            />
            <rect
              x="150"
              y="95"
              width="8"
              height="10"
              rx="1"
              fill="currentColor"
              className="text-cyan-300"
            />
            <rect
              x="163"
              y="95"
              width="8"
              height="10"
              rx="1"
              fill="currentColor"
              className="text-cyan-300"
            />

            <rect
              x="137"
              y="110"
              width="8"
              height="10"
              rx="1"
              fill="currentColor"
              className="text-cyan-300"
            />
            <rect
              x="150"
              y="110"
              width="8"
              height="10"
              rx="1"
              fill="currentColor"
              className="text-cyan-300"
            />
            <rect
              x="163"
              y="110"
              width="8"
              height="10"
              rx="1"
              fill="currentColor"
              className="text-cyan-300"
            />

            <rect
              x="137"
              y="125"
              width="8"
              height="10"
              rx="1"
              fill="currentColor"
              className="text-cyan-300"
            />
            <rect
              x="150"
              y="125"
              width="8"
              height="10"
              rx="1"
              fill="currentColor"
              className="text-cyan-300"
            />
            <rect
              x="163"
              y="125"
              width="8"
              height="10"
              rx="1"
              fill="currentColor"
              className="text-cyan-300"
            />

            <rect
              x="137"
              y="140"
              width="8"
              height="10"
              rx="1"
              fill="currentColor"
              className="text-cyan-300"
            />
            <rect
              x="150"
              y="140"
              width="8"
              height="10"
              rx="1"
              fill="currentColor"
              className="text-cyan-300"
            />
            <rect
              x="163"
              y="140"
              width="8"
              height="10"
              rx="1"
              fill="currentColor"
              className="text-cyan-300"
            />

            <rect
              x="137"
              y="155"
              width="8"
              height="10"
              rx="1"
              fill="currentColor"
              className="text-cyan-300"
            />
            <rect
              x="150"
              y="155"
              width="8"
              height="10"
              rx="1"
              fill="currentColor"
              className="text-cyan-300"
            />
            <rect
              x="163"
              y="155"
              width="8"
              height="10"
              rx="1"
              fill="currentColor"
              className="text-cyan-300"
            />

            {/* Modern roof */}
            <path
              d="M 128 70 L 152.5 55 L 177 70 Z"
              fill="currentColor"
              className="text-blue-600"
            />

            {/* Sparkle/shine effects */}
            <circle
              cx="165"
              cy="75"
              r="3"
              fill="currentColor"
              className="text-white animate-pulse"
              opacity="0.8"
            />
            <circle
              cx="140"
              cy="65"
              r="2"
              fill="currentColor"
              className="text-white animate-pulse"
              opacity="0.6"
              style={{ animationDelay: '0.5s' }}
            />
          </g>

          {/* Green/Eco element */}
          <circle
            cx="70"
            cy="85"
            r="8"
            fill="currentColor"
            className="text-green-500"
            opacity="0.7"
          />
          <path
            d="M 70 80 L 70 90 M 67 85 L 73 85"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: t('services.realEstate.title'),
      description: t('services.realEstate.description'),
      gradient: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-400/30',
      hoverBorder: 'group-hover:border-purple-400/70',
      visual: (
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full"
        >
          {/* Real Estate Valuation - Document with Price Tag */}
          {/* Document */}
          <rect
            x="50"
            y="40"
            width="100"
            height="130"
            rx="5"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2"
            className="text-purple-400/20 stroke-purple-400"
          />

          {/* Document lines */}
          <line
            x1="65"
            y1="60"
            x2="135"
            y2="60"
            stroke="currentColor"
            strokeWidth="2"
            className="text-pink-400/50"
          />
          <line
            x1="65"
            y1="75"
            x2="120"
            y2="75"
            stroke="currentColor"
            strokeWidth="2"
            className="text-pink-400/50"
          />
          <line
            x1="65"
            y1="90"
            x2="135"
            y2="90"
            stroke="currentColor"
            strokeWidth="2"
            className="text-pink-400/50"
          />

          {/* Price tag icon */}
          <circle
            cx="100"
            cy="125"
            r="25"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2"
            className="text-pink-500 stroke-purple-500"
          />

          {/* Turkish Lira symbol (₺) */}
          <text
            x="100"
            y="135"
            fontSize="28"
            fontWeight="bold"
            textAnchor="middle"
            fill="white"
            className="font-bold"
          >
            ₺
          </text>

          {/* Sparkles */}
          <circle
            cx="140"
            cy="50"
            r="3"
            fill="currentColor"
            className="text-purple-400 animate-pulse"
          />
          <circle
            cx="60"
            cy="70"
            r="2"
            fill="currentColor"
            className="text-pink-400 animate-pulse"
            style={{ animationDelay: '0.5s' }}
          />
          <circle
            cx="130"
            cy="140"
            r="2"
            fill="currentColor"
            className="text-purple-400 animate-pulse"
            style={{ animationDelay: '1s' }}
          />
        </svg>
      ),
    },
    {
      title: t('services.construction.title'),
      description: t('services.construction.description'),
      gradient: 'from-amber-500/20 to-orange-500/20',
      borderColor: 'border-amber-400/30',
      hoverBorder: 'group-hover:border-amber-400/70',
      visual: (
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full"
        >
          {/* Construction Management - Crane */}
          {/* Crane tower */}
          <rect
            x="85"
            y="80"
            width="8"
            height="90"
            fill="currentColor"
            className="text-amber-500"
          />

          {/* Crane base */}
          <rect
            x="70"
            y="170"
            width="38"
            height="8"
            fill="currentColor"
            className="text-orange-600"
          />

          {/* Crane horizontal beam */}
          <rect
            x="40"
            y="75"
            width="120"
            height="5"
            fill="currentColor"
            className="text-amber-400"
          />

          {/* Crane arm */}
          <rect
            x="35"
            y="70"
            width="5"
            height="15"
            fill="currentColor"
            className="text-amber-500"
          />
          <rect
            x="155"
            y="70"
            width="5"
            height="15"
            fill="currentColor"
            className="text-amber-500"
          />

          {/* Hook and cable */}
          <line
            x1="130"
            y1="80"
            x2="130"
            y2="120"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-orange-400"
            strokeDasharray="3,3"
          />

          {/* Hook */}
          <circle
            cx="130"
            cy="125"
            r="4"
            fill="currentColor"
            className="text-orange-500 animate-pulse"
          />

          {/* Building under construction */}
          <rect
            x="100"
            y="130"
            width="40"
            height="40"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-amber-400/30 stroke-orange-400"
          />

          {/* Building windows */}
          <rect
            x="107"
            y="137"
            width="10"
            height="10"
            fill="currentColor"
            className="text-orange-500/50"
          />
          <rect
            x="123"
            y="137"
            width="10"
            height="10"
            fill="currentColor"
            className="text-orange-500/50"
          />
          <rect
            x="107"
            y="153"
            width="10"
            height="10"
            fill="currentColor"
            className="text-orange-500/50"
          />
          <rect
            x="123"
            y="153"
            width="10"
            height="10"
            fill="currentColor"
            className="text-orange-500/50"
          />

          {/* Movement indicator */}
          <path
            d="M 145 90 L 150 95 L 145 100"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-amber-400 animate-pulse"
            style={{ animationDelay: '0.5s' }}
          />
        </svg>
      ),
    },
    {
      title: t('services.corporate.title'),
      description: t('services.corporate.description'),
      gradient: 'from-emerald-500/20 to-teal-500/20',
      borderColor: 'border-emerald-400/30',
      hoverBorder: 'group-hover:border-emerald-400/70',
      visual: (
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full"
        >
          {/* Corporate Consulting - Business Handshake & Growth */}
          {/* Left hand */}
          <path
            d="M 50 110 L 70 110 L 70 100 L 80 100 L 80 95 L 85 95 L 85 100 L 90 100 L 90 110 L 95 110 L 95 130 L 50 130 Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-emerald-400 stroke-emerald-500"
          />

          {/* Right hand */}
          <path
            d="M 150 110 L 130 110 L 130 100 L 120 100 L 120 95 L 115 95 L 115 100 L 110 100 L 110 110 L 105 110 L 105 130 L 150 130 Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-teal-400 stroke-teal-500"
          />

          {/* Handshake connection */}
          <rect
            x="85"
            y="108"
            width="30"
            height="15"
            fill="currentColor"
            className="text-emerald-300/50"
          />

          {/* Growth arrow */}
          <path
            d="M 60 60 L 100 30 L 140 50"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            className="text-teal-500"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Arrow points */}
          <circle
            cx="60"
            cy="60"
            r="4"
            fill="currentColor"
            className="text-emerald-500"
          />
          <circle
            cx="100"
            cy="30"
            r="4"
            fill="currentColor"
            className="text-emerald-500 animate-pulse"
          />
          <circle
            cx="140"
            cy="50"
            r="4"
            fill="currentColor"
            className="text-teal-500"
          />

          {/* Arrow head */}
          <path
            d="M 140 50 L 135 45 M 140 50 L 135 55"
            stroke="currentColor"
            strokeWidth="3"
            className="text-teal-500"
            strokeLinecap="round"
          />

          {/* Document/contract icons */}
          <rect
            x="45"
            y="145"
            width="30"
            height="25"
            rx="2"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
            className="text-emerald-400/30 stroke-emerald-400"
          />
          <line
            x1="50"
            y1="152"
            x2="70"
            y2="152"
            stroke="currentColor"
            strokeWidth="1"
            className="text-emerald-500"
          />
          <line
            x1="50"
            y1="158"
            x2="65"
            y2="158"
            stroke="currentColor"
            strokeWidth="1"
            className="text-emerald-500"
          />
          <line
            x1="50"
            y1="164"
            x2="70"
            y2="164"
            stroke="currentColor"
            strokeWidth="1"
            className="text-emerald-500"
          />

          <rect
            x="125"
            y="145"
            width="30"
            height="25"
            rx="2"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
            className="text-teal-400/30 stroke-teal-400"
          />
          <line
            x1="130"
            y1="152"
            x2="150"
            y2="152"
            stroke="currentColor"
            strokeWidth="1"
            className="text-teal-500"
          />
          <line
            x1="130"
            y1="158"
            x2="145"
            y2="158"
            stroke="currentColor"
            strokeWidth="1"
            className="text-teal-500"
          />
          <line
            x1="130"
            y1="164"
            x2="150"
            y2="164"
            stroke="currentColor"
            strokeWidth="1"
            className="text-teal-500"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="services"
      className="relative scroll-mt-8 py-8 bg-slate-50 overflow-hidden"
    >
      {/* Creative Diagonal Stripes Background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-gradient-to-r from-blue-100/30 to-transparent transform -skew-x-12" />
          <div className="absolute top-0 left-1/4 w-1/2 h-full bg-gradient-to-r from-sky-100/20 to-transparent transform -skew-x-12" />
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-cyan-100/30 to-transparent transform skew-x-12" />
        </div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute top-20 right-20 w-32 h-32 border-2 border-blue-200/30 rounded-3xl rotate-12" />
      <div className="absolute bottom-40 left-10 w-40 h-40 border-2 border-sky-200/30 rounded-full" />
      <div className="absolute top-1/3 left-1/3 w-24 h-24 bg-blue-100/20 rounded-2xl -rotate-6" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 via-purple-600 to-amber-600">
              {t('services.title')}
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Glassmorphic Card */}
              <div
                className={`relative h-full backdrop-blur-xl bg-white/90 rounded-2xl p-6 border-2 ${service.borderColor} ${service.hoverBorder} transition-all duration-500 overflow-hidden shadow-lg hover:shadow-2xl`}
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Visual Icon */}
                <div className="relative z-10 w-full h-32 mb-4 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                  {service.visual}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
