import { notFound } from 'next/navigation';
import { isValidLocale } from '../../../lib/locales';
import { getDictionary } from '../../../lib/content';
import Contact from '../../../components/Contact';
import FinalCta from '../../../components/FinalCta';
import JsonLd from '../../../components/JsonLd';
import { breadcrumbJsonLd } from '../../../lib/schema';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    title: dict.meta.contact.title,
    description: dict.meta.contact.description,
    alternates: { canonical: `https://rahmetlabs.com/${locale}/contact` },
  };
}

export default async function ContactPage({ params }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dict = getDictionary(locale);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: dict.meta.contact.title,
    description: dict.meta.contact.description,
    url: `https://rahmetlabs.com/${locale}/contact`,
    mainEntity: {
      '@type': 'ProfessionalService',
      name: 'Rahmet Labs',
      email: 'rahmetlabs@gmail.com',
      telephone: '+77088413062',
    },
  };
  const bc = breadcrumbJsonLd([
    { name: 'Rahmet Labs', url: `https://rahmetlabs.com/${locale}` },
    { name: dict.nav.cta, url: `https://rahmetlabs.com/${locale}/contact` },
  ]);

  return (
    <>
      <JsonLd data={jsonLd} />
      <JsonLd data={bc} />
      <Contact contact={dict.contact} locale={locale} />
    </>
  );
}
