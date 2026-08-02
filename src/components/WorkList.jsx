'use client';

/**
 * WorkList — ledger rows. Numbered, dense, typographic; live links open
 * outward, meta sits on the right. No cards.
 */

import Reveal from './Reveal';

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
            <Reveal as="article" key={item.code} variant="fade" className="group border-t border-hairline/70">
              <div className="grid grid-cols-12 items-start gap-x-6 gap-y-4 py-7 md:py-9">
                {/* number + framing line */}
                <div className="col-span-2 md:col-span-1">
                  <span className="font-mono text-[0.78rem] font-semibold tracking-[0.14em] text-ink-faint transition-colors duration-500 group-hover:text-signal">
                    {item.code}
                  </span>
                </div>

                {/* title + type + description */}
                <div className="col-span-10 md:col-span-6">
                  <h3 className="mb-1.5 font-sans text-[1.3rem] font-bold tracking-tight text-ink transition-transform duration-500 ease-reveal group-hover:translate-x-1.5 md:text-[1.6rem]">
                    {item.title}
                  </h3>
                  <p className="mb-3 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-ink-faint">
                    {item.type}
                  </p>
                  <p className="max-w-[56ch] text-[0.95rem] leading-relaxed text-ink-muted">
                    {item.description}
                  </p>
                </div>

                {/* tech + meta */}
                <div className="col-span-10 col-start-3 flex flex-wrap items-center gap-2 md:col-span-4 md:col-start-8 md:justify-end">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-hairline px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.1em] text-ink-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* links / status */}
                <div className="col-span-10 col-start-3 flex flex-col items-start gap-2 md:col-span-1 md:col-start-12 md:items-end">
                  <span className="flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.14em]">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${item.status === 'live' ? 'status-dot bg-signal' : 'bg-ink-faint'}`}
                      aria-hidden="true"
                    />
                    <span className={item.status === 'live' ? 'text-signal' : 'text-ink-faint'}>
                      {item.status === 'live' ? work.statusLive : work.statusShipped}
                    </span>
                  </span>
                  {item.links?.map((l) => (
                    <a
                      key={l.url}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center gap-1.5 font-mono text-[0.66rem] tracking-[0.06em] text-ink transition-colors hover:text-signal"
                    >
                      {l.label}
                      <svg width="10" height="10" viewBox="0 0 13 13" fill="none" aria-hidden="true" className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">
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
