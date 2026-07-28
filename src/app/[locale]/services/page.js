import { notFound } from 'next/navigation';
import { isValidLocale } from '../../../lib/locales';
import { getDictionary } from '../../../lib/content';
import Services from '../../../components/Services';
import JsonLd from '../../../components/JsonLd';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    title: dict.meta.services.title,
    description: dict.meta.services.description,
    alternates: { canonical: `https://rahmetlabs.com/${locale}/services` },
  };
}

export default async function ServicesPage({ params }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dict = getDictionary(locale);

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: dict.services.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <>
      <JsonLd data={faqJsonLd} />
      <Services locale={locale} services={dict.services} full />
    </>
  );
}
