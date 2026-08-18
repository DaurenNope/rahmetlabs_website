import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { isLocale } from '@/lib/i18n';
import { getDictionary } from '@/lib/content';
import Nav from '@/components/Nav';
import Reveal from '@/components/Reveal';
import PageHero from '@/components/PageHero';
import Cta from '@/components/Cta';
import Footer from '@/components/Footer';
import Divider from '@/components/Divider';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const m = getDictionary(lang).meta.products;
  return { title: m.title, description: m.description, keywords: m.keywords };
}

export default async function ProductsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);
  const s = t.productsPage;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'OfferCatalog',
      name: t.meta.products.title,
      description: t.meta.products.description,
      itemListElement: s.products.map((p, i) => ({
        '@type': 'Offer',
        position: i + 1,
        itemOffered: { '@type': 'Service', name: p.name, description: p.promise },
        priceSpecification: { '@type': 'PriceSpecification', description: p.price },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Rahmet Labs', item: `https://rahmetlabs.com/${lang}` },
        { '@type': 'ListItem', position: 2, name: t.meta.products.title, item: `https://rahmetlabs.com/${lang}/products` },
      ],
    },
  ];

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav locale={lang} t={t} />
      <PageHero
        title={s.heading}
        sub={s.subheading}
        kicker={s.kicker}
        motif="tumar"
        meta={`${t.nav.links.find((l) => l.href === '/products')?.label ?? 'Products'} · 43.24°N 76.91°E`}
      />

      <section className="section page-section">
        <div className="wrap">
          <div className="shelf">
            {s.products.map((p) => (
              <Reveal key={p.code} className="shelf-item">
                <div className="shelf-head">
                  <div className="shelf-top mono">
                    <span className="shelf-code">{p.code}</span>
                    <span className="shelf-time">{p.timeline}</span>
                  </div>
                  <h3 className="shelf-name">{p.name}</h3>
                  <p className="shelf-promise">{p.promise}</p>
                  <p className="shelf-for">
                    <span className="shelf-for-lbl mono">{s.forLabel}</span>
                    {p.forWhom}
                  </p>
                </div>
                <ul className="shelf-points">
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <div className="shelf-price">
                  <span className="shelf-amount">{p.price}</span>
                  <span className="shelf-price-sub mono">
                    {p.monthly ? `+ ${p.monthly}${s.monthlyLabel}` : s.setupLabel}
                  </span>
                  {p.note ? <span className="shelf-note mono">{p.note}</span> : null}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="shelf-monthly mono">{s.monthlyNote}</p>
          </Reveal>
        </div>
      </section>

      <Divider variant="on-bone" />

      <section className="section page-section">
        <div className="wrap">
          <Reveal className="seam">
            <p className="seam-text">{s.seam}</p>
            <Link href={`/${lang}/services`} className="seam-link mono">
              {s.seamLink}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M2 14 L14 2 M5 2 h9 v9" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </Link>
          </Reveal>
        </div>
      </section>

      <Cta t={t} />
      <Footer t={t} locale={lang} />
    </main>
  );
}
