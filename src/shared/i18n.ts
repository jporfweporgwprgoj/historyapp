import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './localization/en.json';
import ru from './localization/ru.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      ru: {
        translation: ru,
      },
    },
    lng: 'ru',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
