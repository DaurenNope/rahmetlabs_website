'use client';

/**
 * ThreadChapters — pinned publisher. Three story chapters scrub past as the
 * user scrolls 300vh; each chapter is a huge editorial statement with a
 * signal-blue rule that grows across it like a drawn stroke. Falls back to stacked sections on mobile
 * and reduced-motion.
 * Enhanced with hover effects and micro-interactions.
 */

import { useEffect, useRef, useState } from 'react';

const clamp01 = (v) => Math.min(1, Math.max(0, v));

export default function ThreadChapters({ chapters }) {
  const rootRef = useRef(null);
  const [active, setActive] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.matchMedia('(max-width: 860px)').matches;
    setReduced(isReduced || isMobile);
    if (isReduced || isMobile) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const el = rootRef.current;
        if (el) {
          const rect = el.getBoundingClientRect();
          const total = el.offsetHeight - window.innerHeight;
          const p = clamp01(-rect.top / Math.max(1, total));
          const idx = Math.min(chapters.length - 1, Math.floor(p * chapters.length));
          setActive((prev) => (prev === idx ? prev : idx));
        }
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [chapters.length]);

  /* -------- mobile / reduced-motion: stacked -------- */
  if (reduced) {
    return (
      <section aria-label="Story" className="relative">
        {chapters.map((ch, i) => (
          <article key={ch.key} className="mx-auto max-w-content px-5 py-16 md:px-10 transition-all duration-500 hover:bg-card/30 hover:py-20">
            <div className="flex items-start gap-6">
              <span className="mt-2 font-mono text-sm font-semibold tracking-[0.2em] text-signal transition-all duration-500 hover:tracking-[0.25em] hover:text-signal/80">FIG. {ch.key}</span>
              <div>
                <h2 className="mb-5 text-subhead font-bold text-ink transition-all duration-500 hover:text-signal md:text-headline">{ch.title}</h2>
                <p className="mb-3 max-w-[58ch] text-[1.02rem] leading-relaxed text-ink-muted transition-colors duration-500 hover:text-ink/80">{ch.lead}</p>
                <p className="serif-accent text-[1.02rem] text-signal transition-colors duration-500 hover:text-signal/80">{ch.detail}</p>
              </div>
            </div>
            {i < chapters.length - 1 && <div className="mt-14 h-px w-full bg-hairline/60 transition-all duration-500 hover:bg-hairline" aria-hidden="true" />}
          </article>
        ))}
      </section>
    );
  }

  /* -------- desktop: pinned scrub -------- */
  return (
    <section
      ref={rootRef}
      aria-label="Story"
      className="chapter-scene relative"
      style={{ '--chapters': chapters.length }}
    >
      <div className="chapter-pin">
        <div className="pointer-events-none absolute inset-y-0 left-5 hidden w-px bg-hairline/50 md:left-10 md:block" aria-hidden="true" />

        {chapters.map((ch, i) => {
          const state = i === active ? 'is-active' : i < active ? 'is-done' : '';
          return (
            <div key={ch.key} className={`chapter-frame ${state}`}>
              <div className="mx-auto grid w-full max-w-content grid-cols-12 items-center gap-8 px-5 md:px-10 lg:px-16">
                {/* oversized index numeral */}
                <div className="col-span-12 md:col-span-3">
                  <span
                    className="block font-mono font-semibold uppercase leading-[0.85] text-signal transition-all duration-500 hover:text-signal/80 hover:tracking-wider"
                    style={{ fontSize: 'clamp(4.5rem, 10vw, 8.5rem)', letterSpacing: '0.04em' }}
                    aria-hidden="true"
                  >
                    {ch.key}
                  </span>
                </div>

                <div className="col-span-12 md:col-span-8 md:col-start-5">
                  {/* pen stroke growing across */}
                  <div
                    className="mb-8 h-[3px] bg-signal transition-all duration-1000 ease-reveal hover:h-1"
                    style={{ width: i === active ? '7rem' : '2rem' }}
                    aria-hidden="true"
                  />
                  <h2 className="mb-7 max-w-[16ch] text-headline font-bold text-ink transition-all duration-500 hover:text-signal">
                    {ch.title}
                  </h2>
                  <p className="mb-4 max-w-[58ch] text-[1.08rem] leading-[1.75] text-ink-muted transition-colors duration-500 hover:text-ink/80">
                    {ch.lead}
                  </p>
                  <p className="serif-accent text-[1.1rem] text-signal transition-colors duration-500 hover:text-signal/80">{ch.detail}</p>
                </div>
              </div>
            </div>
          );
        })}

        {/* progress meter */}
        <div className="absolute bottom-10 right-6 flex flex-col items-end gap-2 md:right-10" aria-hidden="true">
          {chapters.map((ch, i) => (
            <span
              key={ch.key}
              className={`font-mono text-[0.62rem] tracking-[0.2em] transition-all duration-500 ${
                i === active ? 'text-signal scale-110' : 'text-ink-faint hover:text-ink-muted hover:scale-105'
              }`}
            >
              {ch.key}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
