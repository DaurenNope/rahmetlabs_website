import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale } from '@/lib/i18n';
import { getDictionary } from '@/lib/content';
import Nav from '@/components/Nav';
import Reveal from '@/components/Reveal';
import PageHero from '@/components/PageHero';
import Principles from '@/components/Principles';
import Cta from '@/components/Cta';
import Footer from '@/components/Footer';
import Divider from '@/components/Divider';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const m = getDictionary(lang).meta.about;
  return { title: m.title, description: m.description, keywords: m.keywords };
}

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);
  const a = t.about;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: t.meta.about.title,
      description: t.meta.about.description,
      url: `https://rahmetlabs.com/${lang}/about`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Rahmet Labs', item: `https://rahmetlabs.com/${lang}` },
        { '@type': 'ListItem', position: 2, name: t.meta.about.title, item: `https://rahmetlabs.com/${lang}/about` },
      ],
    },
  ];

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav locale={lang} t={t} />
      <PageHero
        title={a.heading}
        sub={a.subheading}
        motif="seam"
        meta={`${t.nav.links.find((l) => l.href === '/about')?.label ?? 'About'} · 43.24°N 76.91°E`}
      />

      <section className="section page-section">
        <div className="wrap">
          <Reveal className="sec-head">
            <h2>{a.teamHeading}</h2>
            <p className="sec-sub">{a.teamIntro}</p>
          </Reveal>
          <div className="team-grid">
            {a.team.map((member, i) => (
              <Reveal key={member.name} className="team-card">
                <span className="principle-idx mono">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="principle-title">{member.name}</h3>
                <span className="team-role mono">{member.role}</span>
                <p className="principle-detail">{member.bio}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Divider variant="on-bone" />

      <section className="section page-section">
        <div className="wrap">
          <Reveal className="sec-head">
            <h2>{a.toolkitHeading}</h2>
          </Reveal>
          <Reveal>
            <div className="chips">
              {a.toolkit.map((tool) => (
                <span key={tool} className="chip mono">
                  {tool}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Divider variant="on-bone" />
      <Principles t={t} />
      <Divider variant="on-red" />
      <Cta t={t} />
      <Footer t={t} locale={lang} />
    </main>
  );
}
