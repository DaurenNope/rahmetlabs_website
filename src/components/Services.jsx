'use client';

/**
 * Services — editorial index rows with expanding capability panels.
 * Rows 01–05, hairline-ruled; the active row reveals a hand-drawn-feeling
 * thread underline and a double-bezel detail panel.
 */

import { useId, useState } from 'react';
import Reveal from './Reveal';

export default function Services({ services, locale, sectionId = 'services' }) {
  const [openId, setOpenId] = useState(services.categories[0]?.id ?? null);
  const uid = useId();

  return (
    <section id={sectionId} className="relative border-t border-hairline/70 py-28 md:py-40" aria-labelledby={`${sectionId}-heading`}>
      <div className="mx-auto max-w-content px-5 md:px-10 lg:px-16">
        <Reveal variant="fade" className="mb-14 max-w-[760px]">
          <p className="kicker mb-6">{services.kicker}</p>
          <h2 id={`${sectionId}-heading`} className="mb-5 text-headline font-bold text-ink">
            {services.heading}
          </h2>
          <p className="text-[1.05rem] leading-relaxed text-ink-muted">{services.subheading}</p>
        </Reveal>

        <div className="ltr-stagger">
          {services.categories.map((cat, idx) => {
            const open = openId === cat.id;
            const panelId = `${uid}-${cat.id}`;
            return (
              <Reveal as="article" key={cat.id} variant="fade" className="group border-t border-hairline/70 first:border-t-0">
                <button
                  type="button"
                  onClick={() => setOpenId(open ? null : cat.id)}
                  aria-expanded={open}
                  aria-controls={panelId}
                  className="flex w-full items-baseline gap-5 py-6 text-left transition-colors duration-500 md:gap-10 md:py-8"
                >
                  <span
                    className={`font-serif text-2xl italic leading-none transition-colors duration-500 md:text-4xl ${
                      open ? 'text-amber' : 'text-ink-faint group-hover:text-ink-muted'
                    }`}
                    aria-hidden="true"
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </span>

                  <span className="flex-1">
                    <span
                      className={`block font-sans text-xl font-bold tracking-tight transition-all duration-500 md:text-3xl ${
                        open ? 'text-ink' : 'text-ink group-hover:translate-x-2'
                      }`}
                    >
                      {cat.title}
                    </span>
                    <span className="serif-accent mt-1 block text-[0.95rem] text-ink-muted md:text-[1.05rem]">
                      {cat.tagline}
                    </span>
                  </span>

                  <span
                    className={`relative flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                      open ? 'rotate-45 border-amber text-amber' : 'border-hairline text-ink-muted group-hover:border-ink-muted'
                    }`}
                    aria-hidden="true"
                  >
                    <span className="absolute h-3 w-px bg-current" />
                    <span className="absolute h-px w-3 bg-current" />
                  </span>
                </button>

                {/* expanding detail panel — double bezel */}
                <div
                  id={panelId}
                  className="grid transition-all duration-700 ease-reveal"
                  style={{ gridTemplateRows: open ? '1fr' : '0fr', opacity: open ? 1 : 0 }}
                >
                  <div className="overflow-hidden">
                    <div className="pb-8 md:pb-10 md:pl-[4.5rem] lg:pl-[5.5rem]">
                      <div className="rounded-[1.25rem] border border-white/[0.06] bg-white/[0.03] p-1.5">
                        <div className="rounded-[calc(1.25rem-0.375rem)] border border-hairline bg-raised p-6 md:p-8">
                          <p className="mb-6 max-w-[62ch] text-[1rem] leading-relaxed text-ink-muted">
                            {cat.description}
                          </p>
                          <ul className="grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                            {cat.capabilities.map((cap) => (
                              <li key={cap} className="flex items-start gap-3 text-[0.92rem] text-ink">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-1 flex-shrink-0 text-amber" aria-hidden="true">
                                  <path d="M2 7h10M7 2v10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                                </svg>
                                {cap}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
