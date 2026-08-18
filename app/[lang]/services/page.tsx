import type { Metadata } from 'next';
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
  const m = getDictionary(lang).meta.services;
  return { title: m.title, description: m.description, keywords: m.keywords };
}

export default async function ServicesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);
  const s = t.servicesPage;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: t.faq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Rahmet Labs', item: `https://rahmetlabs.com/${lang}` },
        { '@type': 'ListItem', position: 2, name: t.meta.services.title, item: `https://rahmetlabs.com/${lang}/services` },
      ],
    },
  ];

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav locale={lang} t={t} />
      <PageHero title={s.heading} sub={s.subheading} motif="eye" meta={`${t.nav.links.find((l) => l.href === '/services')?.label ?? 'Services'} · 43.24°N 76.91°E`} />

      <section className="section page-section">
        <div className="wrap">
          <div className="chapters">
            {t.whatWeBuild.categories.map((item, i) => (
              <Reveal key={item.id} className="chapter">
                <span className="chapter-num mono">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="chapter-title">{item.title}</h3>
                  <span className="chapter-detail mono">{item.problemTag}</span>
                </div>
                <div>
                  <p className="chapter-lead">{item.problem}</p>
                  <p className="chapter-lead">{item.solution}</p>
                  {item.delivers ? (
                    <>
                      <span className="chapter-detail mono">{s.deliversLabel}</span>
                      <ul className="chapter-delivers">
                        {item.delivers.map((d) => (
                          <li key={d}>{d}</li>
                        ))}
                      </ul>
                    </>
                  ) : null}
                  <span className="chapter-detail mono">{item.outcome}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Divider variant="on-bone" />

      <section className="section page-section">
        <div className="wrap">
          <Reveal className="sec-head">
            <h2>{s.engagementHeading}</h2>
          </Reveal>
          <div className="steps">
            {s.engagement.map((e, i) => (
              <Reveal key={e.title} className="step">
                <span className="step-ghost" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <span className="step-code mono">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="step-title">{e.title}</h3>
                <p className="step-desc">{e.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Divider variant="on-bone" />

      <section className="section page-section">
        <div className="wrap">
          <Reveal className="sec-head">
            <h2>{s.techStackHeading}</h2>
          </Reveal>
          <div className="stack-grid">
            {s.techStack.map((cat) => (
              <Reveal key={cat.category} className="stack-cat">
                <span className="stack-cat-name mono">{cat.category}</span>
                <div className="chips">
                  {cat.items.map((item) => (
                    <span key={item} className="chip mono">
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Divider variant="on-bone" />

      <section className="section page-section">
        <div className="wrap">
          <Reveal className="sec-head">
            <h2>{s.useCasesHeading}</h2>
          </Reveal>
          <div className="usecases">
            {s.useCases.map((u) => (
              <Reveal key={u.title} className="usecase">
                <h3 className="usecase-title">{u.title}</h3>
                <p className="usecase-desc">{u.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Divider variant="on-bone" />

      <section className="section page-section">
        <div className="wrap">
          <Reveal className="sec-head">
            <h2>{s.faqHeading}</h2>
          </Reveal>
          <div className="faq">
            {t.faq.map((f) => (
              <Reveal key={f.q} className="faq-item">
                <h3 className="faq-q">{f.q}</h3>
                <p className="faq-a">{f.a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Divider variant="on-red" />
      <Cta t={t} />
      <Footer t={t} locale={lang} />
    </main>
  );
}
