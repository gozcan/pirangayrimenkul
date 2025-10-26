import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '#home', label: t('nav.home') || 'Ana Sayfa' },
    { href: '#services', label: t('nav.services') || 'Hizmetler' },
    { href: '#about', label: t('nav.about') || 'Hakkımızda' },
    { href: '#coverage', label: t('nav.coverage') || 'Çalışma Alanımız' },
    { href: '#process', label: t('nav.process') || 'Süreç' },
    { href: '#faq', label: t('nav.faq') || 'SSS' },
    { href: '#contact', label: t('nav.contact') || 'İletişim' },
  ];

  const toggleLanguage = () => {
    const newLang = i18n.language === 'tr' ? 'en' : 'tr';
    i18n.changeLanguage(newLang);
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsMenuOpen(false);

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Glassmorphism Effect */}
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-xl border-b border-white/10"></div>

      <div className="relative container mx-auto px-6">
        <div className="flex items-center justify-between h-28">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group"
          >
            <div className="relative py-2">
              <div className="absolute inset-0 bg-blue-500/20 blur-xl group-hover:bg-blue-500/30 transition-all duration-300"></div>
              <img
                src="/logo.svg"
                alt="Piran Gayrimenkul"
                className="h-16 md:h-20 w-auto relative z-10 filter brightness-0 invert group-hover:scale-105 transition-transform duration-300 my-2"
              />
            </div>
          </a>

          {/* Desktop Navigation - Moved to Right */}
          <div className="hidden lg:flex items-center gap-8">
            <nav className="flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="relative text-gray-300 hover:text-white font-medium transition-colors duration-300 group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white font-medium transition-all duration-300"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm">
                {i18n.language === 'tr' ? 'TR' : 'EN'}
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-28 left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-b border-white/10">
          <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-gray-300 hover:text-white font-medium py-2 hover:pl-4 transition-all duration-300"
              >
                {item.label}
              </a>
            ))}

            <div className="pt-4 border-t border-white/10">
              <button
                onClick={toggleLanguage}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white font-medium transition-all duration-300"
              >
                <Globe className="w-4 h-4" />
                <span>{i18n.language === 'tr' ? 'TR' : 'EN'}</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
