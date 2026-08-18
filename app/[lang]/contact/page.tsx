import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale } from '@/lib/i18n';
import { getDictionary } from '@/lib/content';
import Nav from '@/components/Nav';
import Reveal from '@/components/Reveal';
import PageHero from '@/components/PageHero';
import Magnetic from '@/components/Magnetic';
import Footer from '@/components/Footer';
import Divider from '@/components/Divider';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const m = getDictionary(lang).meta.contact;
  return { title: m.title, description: m.description, keywords: m.keywords };
}

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);
  const c = t.contact;
  const whatsapp = c.channels.find((ch) => ch.id === 'whatsapp')?.href ?? '#';

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: t.meta.contact.title,
      description: t.meta.contact.description,
      url: `https://rahmetlabs.com/${lang}/contact`,
      mainEntity: {
        '@type': 'Organization',
        name: 'Rahmet Labs',
        email: c.channels.find((ch) => ch.id === 'email')?.value,
        address: { '@type': 'PostalAddress', addressLocality: 'Almaty', addressCountry: 'KZ' },
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Rahmet Labs', item: `https://rahmetlabs.com/${lang}` },
        { '@type': 'ListItem', position: 2, name: t.meta.contact.title, item: `https://rahmetlabs.com/${lang}/contact` },
      ],
    },
  ];

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav locale={lang} t={t} />
      <PageHero
        title={c.heading}
        sub={c.subheading}
        motif="signal"
        meta={`${t.nav.cta} · 43.24°N 76.91°E`}
      >
        <div className="page-hero-cta">
          <Magnetic>
            <a className="btn-tumar" href={whatsapp} target="_blank" rel="noopener">
              {t.cta.primary}
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2 11L11 2M11 2H3.5M11 2V9.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </Magnetic>
        </div>
      </PageHero>

      <section className="section page-section">
        <div className="wrap">
          <Reveal className="sec-head">
            <h2>{c.channelsHeading}</h2>
          </Reveal>
          <div className="channels channels-bone">
            {c.channels.map((ch) => (
              <a key={ch.id} className="channel" href={ch.href} target="_blank" rel="noopener">
                <span className="channel-label mono">{ch.label}</span>
                <span className="channel-value">{ch.value}</span>
                <span className="channel-note mono">{ch.note}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Divider variant="on-bone" />

      <section className="section page-section">
        <div className="wrap">
          <Reveal className="sec-head">
            <h2>{c.guideHeading}</h2>
          </Reveal>
          <div className="steps">
            {c.guide.map((g) => (
              <Reveal key={g.code} className="step">
                <span className="step-ghost" aria-hidden="true">{g.code}</span>
                <span className="step-code mono">{g.code}</span>
                <h3 className="step-title">{g.title}</h3>
                <p className="step-desc">{g.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Divider variant="on-bone" />

      <section className="section page-section">
        <div className="wrap">
          <Reveal className="sec-head">
            <h2>{c.socialHeading}</h2>
          </Reveal>
          <div className="socials">
            {c.socials.map((s) => (
              <a key={s.label} className="social mono" href={s.href} target="_blank" rel="noopener">
                {s.label}
                <svg width="12" height="12" viewBox="0 0 13 13" fill="none">
                  <path d="M2 11L11 2M11 2H3.5M11 2V9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer t={t} locale={lang} />
    </main>
  );
}
