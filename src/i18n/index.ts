import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation files
import trCommon from '../locales/tr/common.json';
import enCommon from '../locales/en/common.json';

const resources = {
  tr: {
    common: trCommon,
  },
  en: {
    common: enCommon,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'tr', // Default language (Turkish)
  fallbackLng: 'tr',
  debug: false,
  ns: ['common'],
  defaultNS: 'common',
  keySeparator: '.',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
