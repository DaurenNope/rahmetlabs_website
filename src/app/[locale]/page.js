import { isValidLocale } from '../../lib/locales';
import { getDictionary } from '../../lib/content';
import { notFound } from 'next/navigation';
import Hero from '../../components/Hero';
import ThreadChapters from '../../components/ThreadChapters';
import Services from '../../components/Services';
import ManualVsSystem from '../../components/ManualVsSystem';
import WorkList from '../../components/WorkList';
import Process from '../../components/Process';
import Principles from '../../components/Principles';
import FinalCta from '../../components/FinalCta';
import Newsletter from '../../components/Newsletter';
import JsonLd from '../../components/JsonLd';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    title: dict.meta.home.title,
    description: dict.meta.home.description,
    alternates: { canonical: `https://rahmetlabs.com/${locale}` },
  };
}

export default async function Home({ params }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dict = getDictionary(locale);

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: dict.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: dict.meta.home.title,
    description: dict.meta.home.description,
    url: `https://rahmetlabs.com/${locale}`,
    about: { '@type': 'Organization', name: 'Rahmet Labs', url: 'https://rahmetlabs.com' },
  };

  return (
    <>
      <JsonLd data={pageJsonLd} />
      <JsonLd data={faqJsonLd} />
      <Hero locale={locale} hero={dict.hero} />
      <ThreadChapters chapters={dict.thread.chapters} />
      <Services services={dict.whatWeBuild} locale={locale} />
      <ManualVsSystem comparison={dict.comparison} />
      <WorkList work={dict.work} locale={locale} limit={4} />
      <Process process={dict.process} />
      <Principles principles={dict.principles} />
      <FinalCta cta={dict.cta} locale={locale} />
      <Newsletter locale={locale} />
    </>
  );
}
