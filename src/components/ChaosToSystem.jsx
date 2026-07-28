'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ChaosToSystem({ hero }) {
  const sectionRef = useRef(null);
  const slideRefs = useRef([]);
  const dotRefs = useRef([]);
  const rows = hero.rows;
  const beats = rows.length + 1;

  useLayoutEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const slides = slideRefs.current.filter(Boolean);
    if (!slides.length) return undefined;

    if (prefersReduced) {
      slides.forEach((s, i) => {
        s.style.position = i === slides.length - 1 ? 'relative' : 'absolute';
        s.style.opacity = i === slides.length - 1 ? '1' : '0';
      });
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.set(slides, { opacity: 0, y: 24 });
      gsap.set(slides[0], { opacity: 1, y: 0 });
      if (dotRefs.current[0]) dotRefs.current[0].style.backgroundColor = '#D97706';

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top+=68',
          end: `+=${beats * 85}%`,
          scrub: 0.5,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            const idx = Math.min(slides.length - 1, Math.floor(self.progress * beats));
            dotRefs.current.forEach((d, i) => {
              if (!d) return;
              d.style.backgroundColor = i === idx ? '#D97706' : 'rgba(255,255,255,0.18)';
              d.style.width = i === idx ? '22px' : '6px';
            });
          },
        },
      });

      for (let i = 0; i < slides.length - 1; i += 1) {
        const t = i + 1;
        tl.to(slides[i], { opacity: 0, y: -20, duration: 0.25 }, t - 0.3).to(
          slides[i + 1],
          { opacity: 1, y: 0, duration: 0.25 },
          t - 0.18
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [beats]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-viewport">
      <div className="relative flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center lg:px-10">
        <p className="mb-12 text-xs font-semibold uppercase tracking-[0.14em] text-viewport-ink-muted">
          {hero.comparisonLabel}
        </p>

        <div className="relative flex h-72 w-full max-w-2xl items-center justify-center sm:h-56">
          {rows.map((row, i) => (
            <div
              key={row.fn}
              ref={(el) => {
                slideRefs.current[i] = el;
              }}
              className="absolute inset-0 flex flex-col items-center justify-center gap-7"
              style={{ opacity: i === 0 ? 1 : 0 }}
            >
              <span className="text-sm uppercase tracking-[0.1em] text-viewport-ink-muted">{row.fn}</span>
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-8">
                <span className="font-data text-2xl text-manual line-through decoration-manual/50 sm:text-4xl">
                  {row.manualStatus}
                </span>
                <span className="text-viewport-ink-muted" aria-hidden>
                  →
                </span>
                <span className="font-data text-2xl font-bold text-amber sm:text-4xl">{row.autoStatus}</span>
              </div>
            </div>
          ))}
          <div
            ref={(el) => {
              slideRefs.current[rows.length] = el;
            }}
            className="absolute inset-0 flex flex-col items-center justify-center gap-4"
            style={{ opacity: 0 }}
          >
            <span className="text-3xl font-bold text-viewport-ink sm:text-5xl">{hero.mergeLabel}</span>
            <p className="max-w-md text-viewport-ink-muted">{hero.mergeDetail}</p>
          </div>
        </div>

        <div className="mt-14 flex items-center gap-2">
          {[...rows, {}].map((_, i) => (
            <span
              key={i}
              ref={(el) => {
                dotRefs.current[i] = el;
              }}
              className="h-1.5 w-1.5 rounded-full bg-white/[0.18] transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
