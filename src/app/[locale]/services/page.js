import { notFound } from 'next/navigation';
import { isValidLocale } from '../../../lib/locales';
import { getDictionary } from '../../../lib/content';
import Services from '../../../components/Services';
import Process from '../../../components/Process';
import FinalCta from '../../../components/FinalCta';
import Reveal from '../../../components/Reveal';
import Accordion from '../../../components/Accordion';
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
  const sp = dict.servicesPage;

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: dict.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <>
      <JsonLd data={faqJsonLd} />

      {/* page header */}
      <section className="border-b border-hairline/70 pb-20 pt-40 md:pb-28 md:pt-52">
        <div className="mx-auto max-w-content px-5 md:px-10 lg:px-16">
          <Reveal variant="fade" className="max-w-[820px]">
            <p className="kicker mb-8">{sp.kicker}</p>
            <h1 className="mb-7 text-display font-bold text-ink">
              {sp.heading}
            </h1>
            <p className="max-w-[60ch] text-[1.08rem] leading-[1.75] text-ink-muted">
              {sp.subheading}
            </p>
          </Reveal>
        </div>
      </section>

      <Services services={dict.whatWeBuild} locale={locale} sectionId="capabilities" />

      {/* engagement models */}
      <section className="border-t border-hairline/70 py-28 md:py-36" aria-labelledby="engagement-heading">
        <div className="mx-auto max-w-content px-5 md:px-10 lg:px-16">
          <Reveal variant="fade" className="mb-12">
            <h2 id="engagement-heading" className="text-headline font-bold text-ink">
              {sp.engagementHeading}
            </h2>
          </Reveal>
          <div className="ltr-stagger grid gap-px overflow-hidden rounded-panel bg-hairline/60 md:grid-cols-3">
            {sp.engagement.map((e, i) => (
              <Reveal as="article" key={e.title} variant="fade" className="group relative bg-paper p-8 transition-colors duration-700 hover:bg-card md:p-10">
                <span aria-hidden="true" className="mb-6 block font-mono text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-signal/90">
                  ENG. {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mb-3 font-sans text-[1.25rem] font-bold tracking-tight text-ink">{e.title}</h3>
                <p className="text-[0.95rem] leading-[1.7] text-ink-muted">{e.detail}</p>
                <span aria-hidden="true" className="absolute bottom-0 left-0 h-[2px] w-0 bg-signal transition-all duration-700 ease-reveal group-hover:w-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Process process={dict.process} />

      {/* FAQ */}
      <section className="border-t border-hairline/70 py-28 md:py-36" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-content px-5 md:px-10 lg:px-16">
          <div className="grid gap-12 md:grid-cols-12">
            <Reveal variant="fade" className="md:col-span-4">
              <h2 id="faq-heading" className="text-headline font-bold text-ink">
                {sp.faqHeading}
              </h2>
            </Reveal>
            <div className="md:col-span-8">
              <Accordion items={dict.faq} />
            </div>
          </div>
        </div>
      </section>

      <FinalCta
        cta={{ ...dict.cta, kicker: sp.ctaHeading, heading: sp.ctaHeading, headingAccent: '', subheading: sp.ctaSubheading }}
        locale={locale}
      />
    </>
  );
}
