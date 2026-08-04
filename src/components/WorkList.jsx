'use client';

/**
 * WorkList — ledger rows. Numbered, dense, typographic; live links open
 * outward, meta sits on the right. No cards.
 * Enhanced with hover effects and micro-interactions.
 */

import Reveal from './Reveal';

// Captured live-site screenshots (projects we could reach headless).
const IMG = {
  '02': '/images/work/beyond-lines.png',
  '03': '/images/work/unhireable.png',
};

export default function WorkList({ work, locale, limit = null, headingId = 'work-heading' }) {
  const items = limit ? work.positions.slice(0, limit) : work.positions;

  return (
    <section id="work" className="relative border-t border-hairline/70 py-28 md:py-40" aria-labelledby={headingId}>
      <div className="mx-auto max-w-content px-5 md:px-10 lg:px-16">
        <Reveal variant="fade" className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-[700px]">
            <p className="kicker mb-6">{work.kicker}</p>
            <h2 id={headingId} className="text-headline font-bold text-ink">
              {work.heading}
            </h2>
          </div>
          <p className="max-w-[34ch] pb-1 text-[0.95rem] leading-relaxed text-ink-muted">
            {work.subheading}
          </p>
        </Reveal>

        <div className="ltr-stagger">
          {items.map((item) => (
            <Reveal as="article" key={item.code} variant="fade" className="group border-t border-hairline/70 transition-all duration-500 hover:bg-card/50">
              <div className="grid grid-cols-12 items-start gap-x-6 gap-y-4 py-7 md:py-9 px-4 -mx-4 rounded-lg transition-all duration-500 group-hover:shadow-sm">
                {/* number + framing line */}
                <div className="col-span-12 md:col-span-1 md:pt-1">
                  <span className="font-mono text-[0.78rem] font-semibold tracking-[0.14em] text-ink-faint transition-all duration-500 group-hover:text-signal group-hover:tracking-[0.18em]">
                    {item.code}
                  </span>
                </div>

                {/* title + type + description + tech */}
                <div className={`col-span-12 ${IMG[item.code] ? 'md:col-span-6' : 'md:col-span-8'}`}>
                  <h3 className="mb-1.5 font-sans text-[1.3rem] font-bold tracking-tight text-ink transition-all duration-500 ease-reveal group-hover:translate-x-1.5 group-hover:text-signal md:text-[1.6rem]">
                    {item.title}
                  </h3>
                  <p className="mb-3 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-ink-faint transition-colors duration-500 group-hover:text-ink-muted">
                    {item.type}
                  </p>
                  <p className="max-w-[62ch] text-[0.95rem] leading-relaxed text-ink-muted">
                    {item.description}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-hairline px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.1em] text-ink-muted transition-all duration-500 group-hover:border-signal/30 group-hover:text-ink group-hover:scale-105"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* live screenshot thumbnail */}
                {IMG[item.code] && (
                  <a
                    href={item.links?.[0]?.url ?? '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.title}
                    className="order-last col-span-12 mt-2 block overflow-hidden rounded-md border border-hairline bg-well transition-all duration-500 group-hover:border-signal/40 group-hover:shadow-sm md:order-none md:col-span-2 md:mt-0"
                  >
                    <img
                      src={IMG[item.code]}
                      alt={item.title}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover object-top transition-transform duration-700 ease-reveal group-hover:scale-[1.03]"
                    />
                  </a>
                )}

                {/* status / links rail */}
                <div className="col-span-12 flex flex-col items-start gap-2 md:col-span-3 md:items-end md:pt-1">
                  <span className="flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.14em]">
                    <span
                      className={`h-1.5 w-1.5 rounded-full transition-all duration-500 group-hover:scale-125 ${item.status === 'live' ? 'status-dot bg-signal' : 'bg-ink-faint'}`}
                      aria-hidden="true"
                    />
                    <span className={`transition-colors duration-500 ${item.status === 'live' ? 'text-signal' : 'text-ink-faint group-hover:text-ink-muted'}`}>
                      {item.status === 'live' ? work.statusLive : work.statusShipped}
                    </span>
                  </span>
                  {item.links?.map((l) => (
                    <a
                      key={l.url}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center gap-1.5 font-mono text-[0.66rem] tracking-[0.06em] text-ink transition-all duration-500 hover:text-signal hover:translate-x-1"
                    >
                      {l.label}
                      <svg width="10" height="10" viewBox="0 0 13 13" fill="none" aria-hidden="true" className="transition-all duration-500 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-hover/link:rotate-45">
                        <path d="M2 11L11 2M11 2H3.5M11 2V9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
