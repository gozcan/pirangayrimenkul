import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

interface FooterProps {
  onNavigate?: (page: 'home' | 'privacy' | 'terms' | 'kvkk') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t } = useTranslation('common');

  const quickLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const services = [
    { name: t('services.urbanTransformation.title'), href: '#services' },
    { name: t('services.realEstate.title'), href: '#services' },
    { name: t('services.construction.title'), href: '#services' },
    { name: t('services.corporate.title'), href: '#services' },
  ];

  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      {/* Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0">
        <svg
          className="relative block w-full h-16"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-slate-900"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-black mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-400">
              Piran Gayrimenkul
            </h3>
            <p className="text-slate-400 mb-6 leading-relaxed text-sm">
              {t('footer.description')}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold text-white mb-4">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-200 text-sm inline-block hover:translate-x-1 transform"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold text-white mb-4">
              {t('footer.services')}
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-slate-400 hover:text-purple-400 transition-colors duration-200 text-sm inline-block hover:translate-x-1 transform"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold text-white mb-4">
              {t('footer.contact')}
            </h4>
            <div className="space-y-3">
              <div className="text-slate-400 text-sm leading-relaxed">
                Küçük Çamlıca Mah. Libadiye Cad. No:52 Üsküdar/İstanbul
              </div>
              <a
                href="tel:+908503464652"
                className="block text-slate-400 hover:text-blue-400 transition-colors duration-200 text-sm"
              >
                +90 850 346 46 52
              </a>
              <a
                href="mailto:info@pirangyd.com"
                className="block text-slate-400 hover:text-blue-400 transition-colors duration-200 text-sm"
              >
                info@pirangyd.com
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Piran Gayrimenkul.{' '}
              {t('footer.rights')}
            </p>
            <div className="flex gap-6 text-sm">
              <button
                onClick={() => onNavigate?.('privacy')}
                className="text-slate-400 hover:text-white transition-colors duration-200"
              >
                {t('legal.privacy.title')}
              </button>
              <button
                onClick={() => onNavigate?.('terms')}
                className="text-slate-400 hover:text-white transition-colors duration-200"
              >
                {t('legal.terms.title')}
              </button>
              <button
                onClick={() => onNavigate?.('kvkk')}
                className="text-slate-400 hover:text-white transition-colors duration-200"
              >
                {t('legal.kvkk.title')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
