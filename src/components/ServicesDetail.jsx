'use client';

/**
 * ServicesDetail — technology stack grid and industry use cases.
 * SEO-rich content with keyword-heavy descriptions for each use case.
 */

import Reveal from './Reveal';

export default function ServicesDetail({ servicesPage }) {
  const { techStackHeading, techStack, useCasesHeading, useCases } = servicesPage;

  return (
    <>
      {/* Technology Stack */}
      <section className="border-t border-hairline/70 py-28 md:py-36" aria-labelledby="tech-stack-heading">
        <div className="mx-auto max-w-content px-5 md:px-10 lg:px-16">
          <Reveal variant="fade" className="mb-12">
            <h2 id="tech-stack-heading" className="text-headline font-bold text-ink">
              {techStackHeading}
            </h2>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {techStack.map((group) => (
              <Reveal as="article" key={group.category} variant="fade" className="rounded-panel border border-hairline/60 bg-card/40 p-6">
                <h3 className="mb-4 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-signal">
                  {group.category}
                </h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[0.92rem] text-ink-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal/60" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="border-t border-hairline/70 py-28 md:py-36" aria-labelledby="use-cases-heading">
        <div className="mx-auto max-w-content px-5 md:px-10 lg:px-16">
          <Reveal variant="fade" className="mb-12">
            <h2 id="use-cases-heading" className="text-headline font-bold text-ink">
              {useCasesHeading}
            </h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((uc) => (
              <Reveal as="article" key={uc.title} variant="fade" className="group relative rounded-panel border border-hairline/60 bg-card/40 p-6 transition-all duration-500 hover:border-signal/40 hover:bg-card/60">
                <h3 className="mb-3 font-sans text-[1.1rem] font-bold tracking-tight text-ink">{uc.title}</h3>
                <p className="text-[0.92rem] leading-[1.7] text-ink-muted">{uc.description}</p>
                <span aria-hidden="true" className="absolute bottom-0 left-0 h-[2px] w-0 bg-signal transition-all duration-700 ease-reveal group-hover:w-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
