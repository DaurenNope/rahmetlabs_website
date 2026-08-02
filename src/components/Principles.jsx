'use client';

/**
 * Principles — quiet editorial 4-up. Numbered statements in a two-column
 * hairline grid; no cards, no icons.
 */

import Reveal from './Reveal';

export default function Principles({ principles }) {
  return (
    <section className="relative border-t border-hairline/70 py-28 md:py-40" aria-labelledby="principles-heading">
      <div className="mx-auto max-w-content px-5 md:px-10 lg:px-16">
        <Reveal variant="fade" className="mb-14 max-w-[720px]">
          <p className="kicker mb-6">{principles.kicker}</p>
          <h2 id="principles-heading" className="mb-5 text-headline font-bold text-ink">
            {principles.heading}
          </h2>
          <p className="text-[1.05rem] leading-relaxed text-ink-muted">{principles.subheading}</p>
        </Reveal>

        <div className="ltr-stagger grid gap-px overflow-hidden rounded-panel bg-hairline/60 sm:grid-cols-2">
          {principles.points.map((p, i) => (
            <Reveal
              as="article"
              key={p.title}
              variant="fade"
              className="group relative bg-paper p-8 transition-colors duration-700 hover:bg-card md:p-10"
            >
              <span
                aria-hidden="true"
                className="mb-6 block font-mono text-[0.62rem] tracking-[0.2em] text-ink-faint transition-colors duration-500 group-hover:text-signal"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mb-3 max-w-[24ch] font-sans text-[1.2rem] font-bold tracking-tight text-ink md:text-[1.35rem]">
                {p.title}
              </h3>
              <p className="max-w-[46ch] text-[0.95rem] leading-[1.7] text-ink-muted">{p.detail}</p>
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-[2px] w-0 bg-signal transition-all duration-700 ease-reveal group-hover:w-full"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
