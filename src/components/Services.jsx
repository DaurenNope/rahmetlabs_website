'use client';

/**
 * Services — icon-anchored card grid.
 * Redesigned: redesigned section hero (kicker + heading + subheading with a
 * count accent), then five balanced cards. Each card: a live SVG glyph for the
 * service, a founder-voice quote, the problem, and a pinned system/outcome
 * footer so every card aligns to the same baseline. Full text stays in the DOM
 * for SEO/AEO; line-clamps are visual only.
 */

import Reveal from './Reveal';

const SIGNAL_HEX = '#1F4EA8';
const ICONS = {
  automation: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={SIGNAL_HEX} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="2.2" />
      <circle cx="18" cy="7" r="2.2" />
      <circle cx="12" cy="18" r="2.2" />
      <path d="M7.7 7.6l2.6 8.2M16.5 8.5l-2.4 7.3M8.4 7.7l7.2 1" />
    </svg>
  ),
  ai: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={SIGNAL_HEX} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 5h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-7l-5 4v-4H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
      <path d="M12 8v3l2 1.2" />
    </svg>
  ),
  product: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={SIGNAL_HEX} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 9h18" />
      <circle cx="6.5" cy="7" r=".7" fill={SIGNAL_HEX} stroke="none" />
    </svg>
  ),
  backend: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={SIGNAL_HEX} strokeWidth="1.6" strokeLinecap="round">
      <path d="M4 20V10M10 20V5M16 20v-6M2 20h20" />
    </svg>
  ),
  web3: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={SIGNAL_HEX} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="9" width="7" height="6" rx="2" />
      <rect x="14" y="9" width="7" height="6" rx="2" />
      <path d="M6.5 9V7.5A2.5 2.5 0 0 1 9 5h6a2.5 2.5 0 0 1 2.5 2.5V9" />
    </svg>
  ),
};

export default function Services({ services, locale, sectionId = 'services' }) {
  const count = services.categories.length;

  return (
    <section
      id={sectionId}
      className="relative border-t border-hairline/70 py-28 md:py-40"
      aria-labelledby={`${sectionId}-heading`}
    >
      <div className="mx-auto max-w-content px-5 md:px-10 lg:px-16">
        {/* hero */}
        <Reveal variant="fade" className="mb-12 md:mb-16 md:flex md:items-end md:justify-between md:gap-10">
          <div className="max-w-[760px]">
            <p className="kicker mb-6">{services.kicker}</p>
            <h2 id={`${sectionId}-heading`} className="mb-5 text-headline font-bold text-ink">
              {services.heading}
            </h2>
            <p className="text-[1.05rem] leading-relaxed text-ink-muted">{services.subheading}</p>
          </div>
          <div className="mt-8 hidden shrink-0 flex-col items-end justify-end border-l border-hairline pl-6 md:mt-0 md:flex">
            <span className="font-mono text-[1.6rem] font-semibold leading-none text-ink">
              {String(count).padStart(2, '0')}
            </span>
            <span className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-ink-faint">
              failure patterns
            </span>
          </div>
        </Reveal>

        {/* cards */}
        <div className="ltr-stagger grid gap-6 sm:grid-cols-2">
          {services.categories.map((cat, idx) => (
            <Reveal
              as="article"
              key={cat.id}
              variant="fade"
              className={`group relative flex h-full flex-col rounded-panel border border-hairline bg-card p-6 shadow-[0_1px_2px_rgba(27,25,20,0.04)] transition-all duration-500 hover:-translate-y-1 hover:border-signal/30 hover:shadow-[0_18px_44px_-22px_rgba(27,25,20,0.28)] md:p-7 ${
                cat.id === 'web3' ? 'sm:col-span-2' : ''
              }`}
            >
              {/* header: glyph + figure + tag */}
              <div className="mb-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-[11px] bg-signal-soft text-signal transition-transform duration-500 group-hover:scale-105">
                    {ICONS[cat.id] || ICONS.automation}
                  </span>
                  <span className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-ink-faint transition-colors duration-500 group-hover:text-signal">
                    FIG {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
                <span className="whitespace-nowrap rounded-full border border-manual/25 px-3 py-1 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-manual">
                  {cat.problemTag}
                </span>
              </div>

              {/* founder-voice quote */}
              <p className="serif-accent mb-3 min-h-[2.7em] text-[1.08rem] leading-snug text-ink line-clamp-2 md:text-[1.2rem]">
                {cat.title}
              </p>

              {/* the problem */}
              <p className="mb-6 min-h-[3.1em] text-[0.88rem] leading-[1.6] text-ink-muted line-clamp-3">
                {cat.problem}
              </p>

              {/* the system + outcome */}
              <div className="mt-auto flex items-start gap-3 border-t border-hairline pt-4">
                <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                <div>
                  <span className="mb-1 block font-mono text-[0.58rem] uppercase tracking-[0.2em] text-signal">
                    {cat.solutionLabel}
                  </span>
                  <p className="line-clamp-3 text-[0.9rem] leading-[1.55] text-ink">{cat.solution}</p>
                  <p className="mt-2 text-[0.88rem] font-medium leading-[1.55] text-ink">{cat.outcome}</p>
                </div>
              </div>

              {/* signal underline on hover */}
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