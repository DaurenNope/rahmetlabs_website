import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { isLocale } from '@/lib/i18n';
import { getDictionary } from '@/lib/content';
import Nav from '@/components/Nav';
import Reveal from '@/components/Reveal';
import PageHero from '@/components/PageHero';
import WorkLedger from '@/components/WorkLedger';
import Facts from '@/components/Facts';
import Cta from '@/components/Cta';
import Footer from '@/components/Footer';
import Divider from '@/components/Divider';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const m = getDictionary(lang).meta.portfolio;
  return { title: m.title, description: m.description, keywords: m.keywords };
}

export default async function PortfolioPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);
  const w = t.work;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: t.meta.portfolio.title,
      itemListElement: w.positions.flatMap((p, i) =>
        (p.links ?? []).map((l) => ({
          '@type': 'ListItem',
          position: i + 1,
          item: { '@type': 'CreativeWork', name: p.title, url: l.url, description: p.description },
        })),
      ),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Rahmet Labs', item: `https://rahmetlabs.com/${lang}` },
        { '@type': 'ListItem', position: 2, name: t.meta.portfolio.title, item: `https://rahmetlabs.com/${lang}/portfolio` },
      ],
    },
  ];

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav locale={lang} t={t} />
      <PageHero
        title={w.heading}
        sub={w.subheading}
        motif="spiral"
        ink
        meta={`${t.nav.links.find((l) => l.href === '/portfolio')?.label ?? 'Work'} · 43.24°N 76.91°E`}
      />

      <section className="section work page-section-ink">
        <div className="wrap">
          <WorkLedger positions={w.positions} statusLive={w.statusLive} statusShipped={w.statusShipped} privateNote={w.privateNote} detailed />
          <Reveal>
            <p className="work-note mono">
              {w.contactPrompt} <a href={`/${lang}/contact`}>{w.contactCta} ↗</a>
            </p>
          </Reveal>
          <Reveal className="seam seam-ink">
            <p className="seam-text">{w.servicesPrompt}</p>
            <Link href={`/${lang}/services`} className="seam-link mono">
              {w.servicesLink}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M2 14 L14 2 M5 2 h9 v9" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </Link>
          </Reveal>
        </div>
      </section>

      <Facts t={t} />
      <Divider variant="on-red" />
      <Cta t={t} />
      <Footer t={t} locale={lang} />
    </main>
  );
}
