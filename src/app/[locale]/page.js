import { isValidLocale } from '../../lib/locales';
import { getDictionary } from '../../lib/content';
import { notFound } from 'next/navigation';
import Hero from '../../components/Hero';
import ChaosToSystem from '../../components/ChaosToSystem';
import Services from '../../components/Services';
import Work from '../../components/Work';
import Process from '../../components/Process';
import Why from '../../components/Why';
import TerminalPanel from '../../components/TerminalPanel';
import Button from '../../components/Button';
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
    mainEntity: dict.services.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <>
      <JsonLd data={faqJsonLd} />
      <Hero locale={locale} hero={dict.hero} />
      <ChaosToSystem hero={dict.hero} />
      <Services locale={locale} services={dict.services} />
      <Work locale={locale} work={dict.work} items={dict.work.positions.slice(0, 4)} />
      <Process process={dict.process} />
      <Why why={dict.why} />
      <TerminalPanel>
        <div className="flex flex-col gap-8 py-16 lg:flex-row lg:items-center lg:justify-between lg:py-24">
          <div className="max-w-xl">
            <h2 className="text-headline text-ink">{dict.about.ctaHeading}</h2>
            <p className="mt-4 text-ink-muted">{dict.about.ctaSubheading}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href={`/${locale}/contact`}>{dict.about.ctaPrimary}</Button>
            <Button href={`/${locale}/portfolio`} variant="ghost" arrow={false}>
              {dict.about.ctaSecondary}
            </Button>
          </div>
        </div>
      </TerminalPanel>
    </>
  );
}
