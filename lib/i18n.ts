export const locales = ['en', 'ru', 'kz'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export const localeNames: Record<Locale, string> = {
  en: 'EN',
  ru: 'RU',
  kz: 'KZ',
};
