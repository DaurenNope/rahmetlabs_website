'use client';

/**
 * Process — horizontal scroll on desktop (scroll-scrub translates the track),
 * vertical pipeline with a drawing thread on mobile.
 */

import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';

const clamp01 = (v) => Math.min(1, Math.max(0, v));

export default function Process({ process }) {
  const rootRef = useRef(null);
  const trackRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mqReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mqMobile = window.matchMedia('(max-width: 900px)');
    const update = () => setEnabled(!mqReduced.matches && !mqMobile.matches);
    update();
    mqReduced.addEventListener('change', update);
    mqMobile.addEventListener('change', update);
    return () => {
      mqReduced.removeEventListener('change', update);
      mqMobile.removeEventListener('change', update);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const root = rootRef.current;
        const track = trackRef.current;
        if (root && track) {
          const rect = root.getBoundingClientRect();
          const total = root.offsetHeight - window.innerHeight;
          const p = clamp01(-rect.top / Math.max(1, total));
          const maxShift = track.scrollWidth - track.clientWidth;
          track.style.transform = `translate3d(${-p * maxShift}px, 0, 0)`;
        }
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [enabled]);

  const stages = process.stages;

  const card = (s, i) => (
    <article
      key={s.code}
      className="relative flex w-full flex-shrink-0 flex-col md:w-[30rem]"
    >
      {/* index numeral */}
      <span
        aria-hidden="true"
        className="mb-6 font-serif italic leading-[0.8] text-amber/90"
        style={{ fontSize: 'clamp(4.5rem, 9vw, 7.5rem)', fontWeight: 500 }}
      >
        {s.code}
      </span>
      {/* double-bezel panel */}
      <div className="rounded-[1.5rem] border border-white/[0.06] bg-white/[0.03] p-1.5">
        <div className="flex min-h-[17rem] flex-col rounded-[calc(1.5rem-0.375rem)] border border-hairline bg-raised p-7 md:p-9">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h3 className="font-sans text-2xl font-bold tracking-tight text-ink">{s.title}</h3>
            <span className="rounded-full border border-amber/40 px-3 py-1 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-amber">
              {s.duration}
            </span>
          </div>
          <p className="text-[0.98rem] leading-[1.7] text-ink-muted">{s.description}</p>
          <div className="mt-auto pt-6">
            <div
              className="h-[2px] bg-amber/80 transition-all duration-700 ease-reveal"
              style={{ width: `${(i + 1) * 25}%` }}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </article>
  );

  /* ---------------- mobile / reduced-motion: vertical pipeline ---------------- */
  if (!enabled) {
    return (
      <section className="relative border-t border-hairline/70 py-28" aria-labelledby="process-heading">
        <div className="mx-auto max-w-content px-5 md:px-10">
          <Reveal variant="fade" className="mb-12">
            <p className="kicker mb-6">{process.kicker}</p>
            <h2 id="process-heading" className="mb-5 text-headline font-bold text-ink">{process.heading}</h2>
            <p className="max-w-[60ch] text-[1.05rem] leading-relaxed text-ink-muted">{process.subheading}</p>
          </Reveal>
          <div className="relative">
            {/* drawing thread along the left edge */}
            <Reveal variant="line" className="ltr thread-wrap absolute bottom-6 left-[7px] top-6 w-px" aria-hidden="true">
              <div className="h-full w-px origin-top scale-y-0 bg-amber/60 transition-transform duration-[2200ms] ease-reveal [.ltr-in_&]:scale-y-100" />
            </Reveal>
            <div className="flex flex-col gap-10 pl-10">
              {stages.map((s, i) => (
                <Reveal key={s.code} variant="fade" delay={i * 90}>
                  <div className="relative">
                    <span className="absolute -left-10 top-2 h-3.5 w-3.5 rounded-full border-2 border-amber bg-void" aria-hidden="true" />
                    {card(s, i)}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* ---------------- desktop: pinned horizontal scroll ---------------- */
  return (
    <section
      ref={rootRef}
      aria-labelledby="process-heading"
      className="relative border-t border-hairline/70"
      style={{ height: '300vh' }}
    >
      <div className="sticky top-0 flex h-[100dvh] flex-col justify-center overflow-hidden">
        <div className="mx-auto mb-10 w-full max-w-content px-5 md:px-10 lg:px-16">
          <p className="kicker mb-6">{process.kicker}</p>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 id="process-heading" className="max-w-[22ch] text-headline font-bold text-ink">
              {process.heading}
            </h2>
            <p className="max-w-[36ch] pb-1 text-[0.95rem] leading-relaxed text-ink-muted">
              {process.subheading}
            </p>
          </div>
        </div>

        <div ref={trackRef} className="flex w-max gap-8 pl-5 pr-[12vw] will-change-transform md:pl-10 lg:pl-16">
          {stages.map((s, i) => card(s, i))}
        </div>
      </div>
    </section>
  );
}
