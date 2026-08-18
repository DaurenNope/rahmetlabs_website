import type { MetadataRoute } from 'next';
import { locales } from '@/lib/i18n';

const pages = ['', '/services', '/portfolio', '/about', '/contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((lang) =>
    pages.map((page) => ({
      url: `https://rahmetlabs.com/${lang}${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: page === '' ? (lang === 'en' ? 1 : 0.9) : 0.7,
    })),
  );
}
