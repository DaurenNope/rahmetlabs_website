import { notFound } from 'next/navigation';
import { isValidLocale } from '../../../lib/locales';
import { getDictionary } from '../../../lib/content';
import WorkList from '../../../components/WorkList';
import FinalCta from '../../../components/FinalCta';
import Reveal from '../../../components/Reveal';
import JsonLd from '../../../components/JsonLd';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    title: dict.meta.portfolio.title,
    description: dict.meta.portfolio.description,
    alternates: { canonical: `https://rahmetlabs.com/${locale}/portfolio` },
  };
}

export default async function PortfolioPage({ params }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dict = getDictionary(locale);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: dict.meta.portfolio.title,
    description: dict.meta.portfolio.description,
    url: `https://rahmetlabs.com/${locale}/portfolio`,
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <section className="border-b border-hairline/70 pb-16 pt-40 md:pb-20 md:pt-52">
        <div className="mx-auto max-w-content px-5 md:px-10 lg:px-16">
          <Reveal variant="fade" className="max-w-[820px]">
            <p className="kicker mb-8">{dict.work.kicker}</p>
            <h1 className="mb-7 text-display font-bold text-ink">{dict.work.heading}</h1>
            <p className="max-w-[56ch] text-[1.08rem] leading-[1.75] text-ink-muted">{dict.work.subheading}</p>
          </Reveal>
        </div>
      </section>

      <div className="[&>section]:border-t-0 [&>section]:py-16 md:[&>section]:py-20">
        <WorkList work={dict.work} locale={locale} headingId="work-full-heading" />
      </div>

      <FinalCta cta={dict.cta} locale={locale} />
    </>
  );
}
