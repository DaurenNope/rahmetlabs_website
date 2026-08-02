import { notFound } from 'next/navigation';
import { isValidLocale } from '../../../lib/locales';
import { getDictionary } from '../../../lib/content';
import About from '../../../components/About';
import Principles from '../../../components/Principles';
import JsonLd from '../../../components/JsonLd';
import { breadcrumbJsonLd } from '../../../lib/schema';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    title: dict.meta.about.title,
    description: dict.meta.about.description,
    alternates: { canonical: `https://rahmetlabs.com/${locale}/about` },
  };
}

export default async function AboutPage({ params }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dict = getDictionary(locale);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: dict.meta.about.title,
    description: dict.meta.about.description,
    url: `https://rahmetlabs.com/${locale}/about`,
  };
  const aboutLabel = dict.nav.links.find((l) => l.href === '/about')?.label || 'About';
  const bc = breadcrumbJsonLd([
    { name: 'Rahmet Labs', url: `https://rahmetlabs.com/${locale}` },
    { name: aboutLabel, url: `https://rahmetlabs.com/${locale}/about` },
  ]);

  return (
    <>
      <JsonLd data={jsonLd} />
      <JsonLd data={bc} />
      <About locale={locale} about={dict.about} />
    </>
  );
}
