import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// SVG Icon Components
const getStepIcon = (
  serviceId: string,
  stepIndex: number,
  gradient: string
) => {
  const iconClass = 'w-12 h-12';

  // Kentsel Dönüşüm Icons
  if (serviceId === 'urbanTransformation') {
    switch (stepIndex) {
      case 0: // İlk Değerlendirme - Taşınmazın teknik ve yasal analizi
        return (
          <svg
            className={iconClass}
            viewBox="0 0 24 24"
            fill="none"
          >
            <rect
              x="4"
              y="6"
              width="16"
              height="14"
              rx="2"
              className="stroke-blue-600"
              strokeWidth="1.5"
            />
            <path
              d="M4 10h16"
              className="stroke-blue-500"
              strokeWidth="1.5"
            />
            <circle
              cx="8"
              cy="13"
              r="1.5"
              className="fill-blue-600"
            />
            <circle
              cx="12"
              cy="13"
              r="1.5"
              className="fill-blue-600"
            />
            <circle
              cx="16"
              cy="13"
              r="1.5"
              className="fill-blue-600"
            />
            <path
              d="M7 17h10M9 17v-2M15 17v-2"
              className="stroke-blue-500"
              strokeWidth="1.5"
            />
            <circle
              cx="19"
              cy="6"
              r="3"
              className="fill-blue-500 stroke-blue-700"
              strokeWidth="1.5"
            />
            <path
              d="M17.5 6l1 1 2-2"
              className="stroke-white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        );
      case 1: // Proje Planlama - Dönüşüm sürecinin detaylı planlaması
        return (
          <svg
            className={iconClass}
            viewBox="0 0 24 24"
            fill="none"
          >
            <rect
              x="3"
              y="5"
              width="18"
              height="16"
              rx="2"
              className="stroke-blue-700"
              strokeWidth="1.5"
            />
            <path
              d="M3 9h18M7 5v4M17 5v4"
              className="stroke-blue-600"
              strokeWidth="1.5"
            />
            <rect
              x="6"
              y="12"
              width="3"
              height="3"
              className="fill-blue-500"
            />
            <rect
              x="10.5"
              y="12"
              width="3"
              height="3"
              className="fill-blue-400"
            />
            <rect
              x="15"
              y="12"
              width="3"
              height="3"
              className="fill-blue-400"
            />
            <rect
              x="6"
              y="16"
              width="3"
              height="2"
              className="fill-blue-400"
            />
            <circle
              cx="12"
              cy="17"
              r="1"
              className="fill-blue-600 animate-pulse"
            />
          </svg>
        );
      case 2: // Değer Tespiti - Gayrimenkulün gerçek değerini belirleme
        return (
          <svg
            className={iconClass}
            viewBox="0 0 24 24"
            fill="none"
          >
            <rect
              x="6"
              y="4"
              width="12"
              height="16"
              rx="2"
              className="stroke-blue-700"
              strokeWidth="1.5"
            />
            <path
              d="M10 8h4M10 12h4"
              className="stroke-blue-500"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle
              cx="12"
              cy="16"
              r="3"
              className="fill-blue-600"
            />
            <text
              x="12"
              y="18.5"
              fontSize="5"
              fontWeight="bold"
              textAnchor="middle"
              className="fill-white"
            >
              ₺
            </text>
            <path
              d="M17 4l2 2-2 2M19 6H15"
              className="stroke-blue-500"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        );
      case 3: // Müzakere Süreci - Hak sahipleri adına profesyonel müzakere
        return (
          <svg
            className={iconClass}
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              cx="8"
              cy="8"
              r="3"
              className="fill-blue-500"
            />
            <circle
              cx="16"
              cy="8"
              r="3"
              className="fill-blue-600"
            />
            <path
              d="M5 21v-2a4 4 0 014-4h1M19 21v-2a4 4 0 00-4-4h-1"
              className="stroke-blue-700"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M10 15h4"
              className="stroke-blue-600"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle
              cx="12"
              cy="15"
              r="1.5"
              className="fill-blue-700 animate-pulse"
            />
            <path
              d="M6 12l2 2 2-2M18 12l-2 2-2-2"
              className="stroke-blue-500"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case 4: // Yasal İşlemler - Tüm yasal süreçleri takip ve yönetme
        return (
          <svg
            className={iconClass}
            viewBox="0 0 24 24"
            fill="none"
          >
            <rect
              x="5"
              y="3"
              width="14"
              height="18"
              rx="2"
              className="stroke-blue-700"
              strokeWidth="1.5"
            />
            <path
              d="M9 7h6M9 11h6M9 15h4"
              className="stroke-blue-500"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle
              cx="17"
              cy="18"
              r="4"
              className="fill-green-500 stroke-green-700"
              strokeWidth="1.5"
            />
            <path
              d="M15 18l1.5 1.5 3-3"
              className="stroke-white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 3V1M12 3L9 1M12 3l3-1"
              className="stroke-blue-600"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        );
      case 5: // Proje Tamamlama - Yeni gayrimenkulün teslimine kadar
        return (
          <svg
            className={iconClass}
            viewBox="0 0 24 24"
            fill="none"
          >
            <rect
              x="5"
              y="9"
              width="14"
              height="12"
              className="stroke-blue-700"
              strokeWidth="1.5"
            />
            <path
              d="M5 9L12 3l7 6"
              className="stroke-blue-700"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect
              x="9"
              y="12"
              width="2"
              height="3"
              className="fill-blue-500"
            />
            <rect
              x="13"
              y="12"
              width="2"
              height="3"
              className="fill-blue-500"
            />
            <rect
              x="9"
              y="16"
              width="6"
              height="5"
              className="fill-blue-600"
            />
            <circle
              cx="12"
              cy="18"
              r="0.5"
              className="fill-white"
            />
            <path
              d="M8 21l2-2 2 2 2-2 2 2"
              className="stroke-green-600"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="17"
              cy="6"
              r="2"
              className="fill-blue-600 animate-pulse"
            />
          </svg>
        );
      default:
        return null;
    }
  }

  // Gayrimenkul Değerleme Icons
  if (serviceId === 'valuation') {
    switch (stepIndex) {
      case 0: // İlk Görüşme
        return (
          <svg
            className={iconClass}
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              cx="12"
              cy="12"
              r="9"
              className="stroke-purple-500"
              strokeWidth="1.5"
            />
            <path
              d="M12 8v4M12 16h.01"
              className="stroke-purple-600"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle
              cx="12"
              cy="8"
              r="2"
              className="fill-purple-400"
            />
          </svg>
        );
      case 1: // Pazar Araştırması
        return (
          <svg
            className={iconClass}
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              cx="11"
              cy="11"
              r="7"
              className="stroke-purple-600"
              strokeWidth="1.5"
            />
            <path
              d="M21 21l-4.35-4.35"
              className="stroke-purple-600"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle
              cx="11"
              cy="11"
              r="3"
              className="fill-purple-400 opacity-50"
            />
            <path
              d="M8 11h6M11 8v6"
              className="stroke-purple-600"
              strokeWidth="1.5"
            />
          </svg>
        );
      case 2: // Fiziksel İnceleme
        return (
          <svg
            className={iconClass}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M3 10h7v10H3zM14 6h7v14h-7z"
              className="stroke-purple-600 fill-purple-400 opacity-40"
              strokeWidth="1.5"
            />
            <circle
              cx="6.5"
              cy="14"
              r="1"
              className="fill-purple-600"
            />
            <circle
              cx="17.5"
              cy="12"
              r="1"
              className="fill-purple-600"
            />
            <path
              d="M6 6l5 5m5-5l-5 5"
              className="stroke-purple-500"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        );
      case 3: // Değerleme Raporu
        return (
          <svg
            className={iconClass}
            viewBox="0 0 24 24"
            fill="none"
          >
            <rect
              x="6"
              y="3"
              width="12"
              height="18"
              rx="2"
              className="stroke-purple-600"
              strokeWidth="1.5"
            />
            <path
              d="M10 7h4M10 11h4M10 15h2"
              className="stroke-purple-400"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <text
              x="16"
              y="19"
              fontSize="8"
              className="fill-purple-600 font-bold"
            >
              ₺
            </text>
          </svg>
        );
      case 4: // Yatırım Önerileri
        return (
          <svg
            className={iconClass}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M3 17l6-6 4 4 8-8"
              className="stroke-purple-600"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="9"
              cy="11"
              r="1.5"
              className="fill-purple-500"
            />
            <circle
              cx="13"
              cy="15"
              r="1.5"
              className="fill-purple-500"
            />
            <circle
              cx="21"
              cy="9"
              r="1.5"
              className="fill-purple-600 animate-pulse"
            />
            <path
              d="M21 9v-4h-4"
              className="stroke-purple-600"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        );
      case 5: // Takip Hizmeti
        return (
          <svg
            className={iconClass}
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              cx="12"
              cy="12"
              r="9"
              className="stroke-purple-500"
              strokeWidth="1.5"
            />
            <path
              d="M12 6v6l4 2"
              className="stroke-purple-600"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle
              cx="12"
              cy="12"
              r="2"
              className="fill-purple-600"
            />
          </svg>
        );
      default:
        return null;
    }
  }

  // İnşaat Yönetimi Icons
  if (serviceId === 'construction') {
    switch (stepIndex) {
      case 0: // Arsa Seçimi
        return (
          <svg
            className={iconClass}
            viewBox="0 0 24 24"
            fill="none"
          >
            <rect
              x="4"
              y="4"
              width="16"
              height="16"
              rx="2"
              className="stroke-amber-600"
              strokeWidth="1.5"
            />
            <path
              d="M4 12h16M12 4v16"
              className="stroke-amber-400"
              strokeWidth="1"
              strokeDasharray="2 2"
            />
            <circle
              cx="12"
              cy="12"
              r="3"
              className="fill-amber-500 opacity-60"
            />
            <path
              d="M12 9v6M9 12h6"
              className="stroke-amber-700"
              strokeWidth="1.5"
            />
          </svg>
        );
      case 1: // Proje Planlaması
        return (
          <svg
            className={iconClass}
            viewBox="0 0 24 24"
            fill="none"
          >
            <rect
              x="5"
              y="5"
              width="14"
              height="14"
              rx="1"
              className="stroke-amber-600"
              strokeWidth="1.5"
            />
            <path
              d="M5 9h14M9 5v14"
              className="stroke-amber-400"
              strokeWidth="1"
            />
            <rect
              x="10"
              y="10"
              width="3"
              height="3"
              className="fill-amber-500"
            />
            <rect
              x="14"
              y="10"
              width="3"
              height="3"
              className="fill-amber-400"
            />
            <rect
              x="10"
              y="14"
              width="3"
              height="3"
              className="fill-amber-400"
            />
          </svg>
        );
      case 2: // Maliyet Analizi
        return (
          <svg
            className={iconClass}
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              cx="12"
              cy="12"
              r="9"
              className="stroke-amber-600"
              strokeWidth="1.5"
            />
            <text
              x="12"
              y="16"
              fontSize="10"
              textAnchor="middle"
              className="fill-amber-600 font-bold"
            >
              ₺
            </text>
            <path
              d="M12 4v3M12 17v3"
              className="stroke-amber-500"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle
              cx="12"
              cy="12"
              r="3"
              className="fill-amber-400 opacity-30"
            />
          </svg>
        );
      case 3: // Sözleşme
        return (
          <svg
            className={iconClass}
            viewBox="0 0 24 24"
            fill="none"
          >
            <rect
              x="6"
              y="3"
              width="12"
              height="18"
              rx="2"
              className="stroke-amber-600"
              strokeWidth="1.5"
            />
            <path
              d="M10 7h4M10 11h4M10 15h4"
              className="stroke-amber-400"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M10 19l2 2 4-4"
              className="stroke-green-600"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case 4: // Şantiye Kurulumu
        return (
          <svg
            className={iconClass}
            viewBox="0 0 24 24"
            fill="none"
          >
            <rect
              x="4"
              y="14"
              width="6"
              height="6"
              className="stroke-amber-600 fill-amber-400 opacity-40"
              strokeWidth="1.5"
            />
            <rect
              x="14"
              y="10"
              width="6"
              height="10"
              className="stroke-amber-600 fill-amber-500 opacity-50"
              strokeWidth="1.5"
            />
            <path
              d="M7 11V8l3-3 3 3v3"
              className="stroke-amber-600"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="10"
              cy="5"
              r="1.5"
              className="fill-amber-600 animate-pulse"
            />
          </svg>
        );
      case 5: // Teslim
        return (
          <svg
            className={iconClass}
            viewBox="0 0 24 24"
            fill="none"
          >
            <rect
              x="5"
              y="8"
              width="14"
              height="12"
              className="stroke-amber-600"
              strokeWidth="1.5"
            />
            <path
              d="M5 8L12 3l7 5"
              className="stroke-amber-600"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 13l2 2 4-4"
              className="stroke-green-600"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect
              x="10"
              y="17"
              width="4"
              height="3"
              className="fill-amber-500"
            />
          </svg>
        );
      default:
        return null;
    }
  }

  // Kurumsal Danışmanlık Icons
  if (serviceId === 'investment') {
    switch (stepIndex) {
      case 0: // Durum Analizi
        return (
          <svg
            className={iconClass}
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              cx="12"
              cy="12"
              r="3"
              className="fill-emerald-400"
            />
            <circle
              cx="12"
              cy="12"
              r="7"
              className="stroke-emerald-500"
              strokeWidth="1.5"
              strokeDasharray="3 3"
            />
            <circle
              cx="12"
              cy="12"
              r="10"
              className="stroke-emerald-400"
              strokeWidth="1"
              strokeDasharray="2 2"
            />
            <path
              d="M12 2v4M12 18v4M2 12h4M18 12h4"
              className="stroke-emerald-600"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        );
      case 1: // Hedef Belirleme
        return (
          <svg
            className={iconClass}
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              cx="12"
              cy="12"
              r="3"
              className="fill-emerald-500"
            />
            <circle
              cx="12"
              cy="12"
              r="6"
              className="stroke-emerald-500"
              strokeWidth="1.5"
            />
            <circle
              cx="12"
              cy="12"
              r="9"
              className="stroke-emerald-400"
              strokeWidth="1.5"
            />
            <path
              d="M12 3v3M21 12h-3"
              className="stroke-emerald-600"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        );
      case 2: // Stratejik Planlama
        return (
          <svg
            className={iconClass}
            viewBox="0 0 24 24"
            fill="none"
          >
            <rect
              x="4"
              y="4"
              width="16"
              height="16"
              rx="2"
              className="stroke-emerald-600"
              strokeWidth="1.5"
            />
            <path
              d="M4 8h16M8 4v16M12 8v12M16 8v12M4 12h16M4 16h16"
              className="stroke-emerald-400 opacity-30"
              strokeWidth="1"
            />
            <circle
              cx="10"
              cy="10"
              r="1.5"
              className="fill-emerald-600"
            />
            <circle
              cx="14"
              cy="14"
              r="1.5"
              className="fill-emerald-500"
            />
          </svg>
        );
      case 3: // Uygulama Planı
        return (
          <svg
            className={iconClass}
            viewBox="0 0 24 24"
            fill="none"
          >
            <rect
              x="5"
              y="3"
              width="14"
              height="18"
              rx="2"
              className="stroke-emerald-600"
              strokeWidth="1.5"
            />
            <path
              d="M9 7h6M9 11h6M9 15h4"
              className="stroke-emerald-400"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <rect
              x="15"
              y="15"
              width="6"
              height="6"
              rx="3"
              className="fill-emerald-500"
            />
            <path
              d="M16.5 18l1.5 1.5 3-3"
              className="stroke-white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case 4: // İcra ve Takip
        return (
          <svg
            className={iconClass}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M3 3l18 18"
              className="stroke-emerald-400"
              strokeWidth="1"
              strokeDasharray="2 2"
            />
            <circle
              cx="6"
              cy="6"
              r="2"
              className="fill-emerald-400"
            />
            <circle
              cx="12"
              cy="12"
              r="2"
              className="fill-emerald-500"
            />
            <circle
              cx="18"
              cy="18"
              r="2"
              className="fill-emerald-600 animate-pulse"
            />
            <path
              d="M6 6L12 12M12 12L18 18"
              className="stroke-emerald-600"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        );
      case 5: // Performans Raporu
        return (
          <svg
            className={iconClass}
            viewBox="0 0 24 24"
            fill="none"
          >
            <rect
              x="4"
              y="14"
              width="3"
              height="6"
              rx="1"
              className="fill-emerald-400"
            />
            <rect
              x="10.5"
              y="10"
              width="3"
              height="10"
              rx="1"
              className="fill-emerald-500"
            />
            <rect
              x="17"
              y="6"
              width="3"
              height="14"
              rx="1"
              className="fill-emerald-600"
            />
            <path
              d="M5.5 13L12 9L18.5 5"
              className="stroke-emerald-700"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle
              cx="18.5"
              cy="5"
              r="1.5"
              className="fill-emerald-700 animate-pulse"
            />
          </svg>
        );
      default:
        return null;
    }
  }

  return null;
};

const ServiceDetails = () => {
  const { t } = useTranslation();

  const serviceKeys = [
    'urbanTransformation',
    'valuation',
    'construction',
    'investment',
  ];

  const services = serviceKeys.map((key) => {
    const stepsObject = t(`serviceDetails.services.${key}.steps`, {
      returnObjects: true,
    }) as Record<string, { title: string; description: string }>;

    const stepsArray = Object.values(stepsObject || {});

    return {
      id: key,
      title: t(`serviceDetails.services.${key}.title`),
      subtitle: t(`serviceDetails.services.${key}.subtitle`),
      gradient:
        key === 'urbanTransformation' || key === 'construction'
          ? 'from-slate-600 to-slate-700'
          : 'from-slate-500 to-slate-600',
      bgColor: 'bg-slate-50',
      borderColor: 'border-slate-200',
      steps: stepsArray.map((step) => ({
        ...step,
        icon: '',
      })),
    };
  });

  return (
    <section
      id="services"
      className="relative scroll-mt-8 py-8 bg-blue-50 overflow-hidden"
    >
      {/* Dot Grid Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgb(59 130 246 / 0.15) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Wave-like Curves */}
      <div className="absolute top-0 left-0 right-0 h-64 opacity-20">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 300"
          preserveAspectRatio="none"
        >
          <path
            d="M0,100 Q300,50 600,100 T1200,100 L1200,0 L0,0 Z"
            fill="url(#wave1)"
          />
          <defs>
            <linearGradient
              id="wave1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="0%"
                stopColor="rgb(59 130 246 / 0.3)"
              />
              <stop
                offset="100%"
                stopColor="rgb(14 165 233 / 0.3)"
              />
            </linearGradient>
          </defs>
        </svg>
      </div>

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
            <div className="px-6 py-2 bg-gradient-to-r from-slate-500/10 to-slate-600/10 border border-slate-300 rounded-full">
              <span className="text-sm font-bold text-slate-700">
                {t('serviceDetails.subtitle').toUpperCase()}
              </span>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700">
              {t('serviceDetails.title')}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t('serviceDetails.description')}
          </p>
        </motion.div>

        {/* Services */}
        <div className="space-y-24">
          {services.map((service, serviceIndex) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
              className="relative"
            >
              {/* Service Header */}
              <div className="text-center mb-12">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  className={`inline-block px-8 py-4 backdrop-blur-xl ${service.bgColor} border-2 ${service.borderColor} rounded-2xl mb-4 shadow-lg`}
                >
                  <h3
                    className={`text-3xl md:text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r ${service.gradient}`}
                  >
                    {service.title}
                  </h3>
                  <p className="text-slate-600 font-medium mt-1">
                    {service.subtitle}
                  </p>
                </motion.div>
              </div>

              {/* Steps Grid - 3 columns */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {service.steps.map((step, stepIndex) => (
                  <motion.div
                    key={stepIndex}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: stepIndex * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group relative"
                  >
                    {/* Card */}
                    <div className="relative h-full backdrop-blur-xl bg-white border-2 border-slate-200 group-hover:border-slate-300 rounded-2xl p-6 transition-all duration-300 shadow-lg group-hover:shadow-2xl overflow-hidden">
                      {/* Gradient Background on Hover */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                      />

                      {/* Step Number Badge */}
                      <div
                        className={`absolute -top-3 -right-3 w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <span className="text-white font-black text-lg">
                          {stepIndex + 1}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="relative z-10 pt-2">
                        {/* Icon */}
                        <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                          {getStepIcon(service.id, stepIndex, service.gradient)}
                        </div>

                        {/* Title */}
                        <h4 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-slate-900">
                          {step.title}
                        </h4>

                        {/* Description */}
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      {/* Bottom Accent Line */}
                      <div
                        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Divider (except last) */}
              {serviceIndex < services.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="mt-24 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent origin-center"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
