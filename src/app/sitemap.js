import { locales, htmlLang } from '../lib/locales';

const baseUrl = 'https://rahmetlabs.com';
const routes = ['', '/services', '/portfolio', '/about', '/contact'];

export default function sitemap() {
  const currentDate = new Date().toISOString();

  return routes.flatMap((route) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: currentDate,
      changeFrequency: route === '' ? 'weekly' : 'monthly',
      priority: route === '' ? 1 : 0.8,
      alternates: {
        languages: { 'x-default': `${baseUrl}${route}`, ...Object.fromEntries(locales.map((loc) => [htmlLang[loc], `${baseUrl}/${loc}${route}`])) },
      },
    }))
  );
}
