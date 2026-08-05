export const locales = ['en', 'ru', 'kz'];
export const defaultLocale = 'ru';

export const localeNames = {
  en: 'EN',
  ru: 'RU',
  kz: 'KZ',
};

export const htmlLang = {
  en: 'en',
  ru: 'ru',
  kz: 'kk',
};

export function isValidLocale(locale) {
  return locales.includes(locale);
}
