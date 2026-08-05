'use client';

/**
 * Process — the drafting desk. On desktop, four sheets ride a pinned
 * horizontal rail that slides on hairline guides; a signal-blue thread is
 * drawn port-to-port between sheets as the scrub advances, the docked sheet
 * lifts, the others dim, and a mono readout tracks position. Mobile and
 * reduced-motion get the vertical pipeline with the drawing thread.
 * Enhanced with hover effects and micro-interactions.
 */

import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';

const clamp01 = (v) => Math.min(1, Math.max(0, v));
const smooth = (t) => t * t * (3 - 2 * t);

/* manual → system micro-glyph: red scribble resolving into a blue rule */
function ResolveGlyph({ engaged }) {
  return (
    <svg width="72" height="26" viewBox="0 0 72 26" fill="none" aria-hidden="true" className="overflow-visible">
      <path
        d="M3 19c5-12 -3-16 4-17s6 7 1 10 8 10 12 2 7-13 11-2"
        stroke="#BF4632"
        strokeWidth="1.5"
        strokeLinecap="round"
        pathLength="1"
        strokeDasharray="1"
        strokeDashoffset={engaged ? 0 : 1}
        style={{ transition: 'stroke-dashoffset 0.9s cubic-bezier(0.25,1,0.5,1) 0.1s, opacity 0.5s ease', opacity: engaged ? 1 : 0.25 }}
      />
      <path
        d="M36 15h33"
        stroke="#1F4EA8"
        strokeWidth="1.5"
        strokeLinecap="round"
        pathLength="1"
        strokeDasharray="1"
        strokeDashoffset={engaged ? 0 : 1}
        style={{ transition: 'stroke-dashoffset 0.7s cubic-bezier(0.25,1,0.5,1) 0.55s', opacity: engaged ? 1 : 0.25 }}
      />
      <circle
        cx="69" cy="15" r="2.4"
        fill="#1F4EA8"
        style={{ transition: 'opacity 0.4s ease 1.1s, r 0.3s ease', opacity: engaged ? 1 : 0.2 }}
      />
    </svg>
  );
}

export default function Process({ process }) {
  const rootRef = useRef(null);
  const stickyRef = useRef(null);
  const fillRef = useRef(null);
  const threadRef = useRef(null);
  const railRef = useRef(null); /* the translated track AND thread coordinate space */
  const cardRefs = useRef([]);
  const [enabled, setEnabled] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

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

    const draw = () => {
      const root = rootRef.current;
      const sticky = stickyRef.current;
      const rail = railRef.current;
      if (!root || !sticky || !rail) return;

      const rect = root.getBoundingClientRect();
      const total = root.offsetHeight - window.innerHeight;
      const p = clamp01(-rect.top / Math.max(1, total));
      const maxShift = Math.max(0, rail.scrollWidth - sticky.clientWidth);
      rail.style.transform = `translate3d(${-p * maxShift}px, 0, 0)`;
      if (fillRef.current) fillRef.current.style.transform = `scaleX(${p})`;

      /* sheet dock bookkeeping: which sheet currently owns the left edge zone */
      const stickyRect = sticky.getBoundingClientRect();
      const dockX = stickyRect.left + stickyRect.width * 0.22;
      let idx = 0;
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const r = card.getBoundingClientRect();
        if (r.left - dockX < -r.width * 0.25) idx = i;
      });
      setActiveIdx((prev) => (prev === idx ? prev : idx));

      /* thread lives inside the rail — compute ports in rail-local space so
         the path and the sheets share the same translated coordinate system */
      const thread = threadRef.current;
      if (thread && cardRefs.current[0]) {
        const ports = cardRefs.current.map((card) => {
          if (!card) return null;
          /* card offset within the rail (offsetParent chain = the rail) */
          return { x: card.offsetLeft, y: card.offsetTop + card.offsetHeight * 0.58, w: card.offsetWidth };
        });
        if (ports.every(Boolean)) {
          let d = '';
          for (let i = 0; i < ports.length - 1; i++) {
            const exitX = ports[i].x + ports[i].w - 18; /* exit near the right edge */
            const entryX = ports[i + 1].x + 18;          /* enter next sheet's left edge */
            const y = ports[i].y;
            const ny = ports[i + 1].y;
            const midX = (exitX + entryX) / 2;
            d += `M${exitX} ${y} C ${midX} ${y + 22}, ${midX} ${ny + 22}, ${entryX} ${ny} `;
          }
          thread.setAttribute('d', d);
          const len = thread.getTotalLength();
          thread.style.strokeDasharray = `${len}`;
          thread.style.strokeDashoffset = `${len * (1 - smooth(p) * 0.999)}`;
        }
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        draw();
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
  }, [enabled, process.stages.length]);

  const stages = process.stages;

  const card = (s, i, isActive) => (
    <article
      key={s.code}
      ref={(el) => { cardRefs.current[i] = el; }}
      className={`relative flex w-full flex-shrink-0 flex-col transition-all duration-700 md:w-[30rem] ${
        enabled ? (isActive ? 'scale-100' : 'scale-[0.985]') : ''
      }`}
    >
      {/* sheet code — mono, measurement only */}
      <span
        aria-hidden="true"
        className={`mb-5 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.3em] transition-all duration-700 ${
          isActive || !enabled ? 'text-signal tracking-[0.35em]' : 'text-ink-faint'
        }`}
      >
        SHEET {s.code} / {String(stages.length).padStart(2, '0')}
      </span>

      {/* sheet panel — white card with well bezel; docked sheet lifts */}
      <div
        className={`rounded-[1.5rem] border p-1.5 transition-all duration-700 ease-reveal ${
          isActive || !enabled ? 'border-signal/35 bg-well shadow-lg shadow-signal/5' : 'border-hairline bg-well'
        } ${enabled && isActive ? 'md:-translate-y-1.5 md:shadow-xl md:shadow-signal/10' : ''}`}
      >
        <div
          className={`flex min-h-[19rem] flex-col rounded-[calc(1.5rem-0.375rem)] border bg-card p-7 transition-all duration-700 ease-reveal md:p-9 ${
            isActive || !enabled
              ? 'border-hairline shadow-[0_2px_4px_rgba(27,25,20,0.05),0_24px_48px_-20px_rgba(27,25,20,0.22)]'
              : 'border-hairline/70 shadow-[0_1px_2px_rgba(27,25,20,0.03),0_10px_24px_-18px_rgba(27,25,20,0.08)]'
          }`}
        >
          <div className="mb-4 flex items-center justify-between gap-4">
            <h3 className="font-sans text-2xl font-bold tracking-tight text-ink transition-all duration-500 hover:text-signal">{s.title}</h3>
            <span
              className={`whitespace-nowrap rounded-full border px-3 py-1 font-mono text-[0.7rem] uppercase tracking-[0.12em] transition-all duration-700 ${
                isActive || !enabled ? 'border-signal/50 text-signal scale-105' : 'border-hairline text-ink-faint'
              }`}
            >
              {s.duration}
            </span>
          </div>
          <p className="text-[0.98rem] leading-[1.7] text-ink-muted transition-colors duration-500 hover:text-ink/80">{s.description}</p>

          <div className="mt-auto flex items-end justify-between gap-6 pt-7">
            {/* cumulative ink rule — how much of the system exists by this sheet */}
            <div className="flex-1">
              <div
                className={`h-[2px] transition-all duration-1000 ease-reveal ${
                  isActive || !enabled ? 'bg-signal' : 'bg-ink-faint/50'
                }`}
                style={{ width: `${((i + 1) / stages.length) * 100}%` }}
                aria-hidden="true"
              />
              <span className="mt-2 block font-mono text-[0.56rem] uppercase tracking-[0.18em] text-ink-faint transition-colors duration-500 hover:text-ink-muted">
                {Math.round(((i + 1) / stages.length) * 100)}%
              </span>
            </div>
            {/* manual → system glyph, engaged when docked */}
            <ResolveGlyph engaged={!enabled || isActive} />
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
              <div className="h-full w-px origin-top scale-y-0 bg-signal/60 transition-transform duration-[2200ms] ease-reveal [.ltr-in_&]:scale-y-100" />
            </Reveal>
            <div className="flex flex-col gap-10 pl-10">
              {stages.map((s, i) => (
                <Reveal key={s.code} variant="fade" delay={i * 90}>
                  <div className="relative">
                    <span className="absolute -left-10 top-2 h-3.5 w-3.5 rounded-full border-2 border-signal bg-paper transition-all duration-500 hover:scale-125 hover:shadow-sm hover:shadow-signal/20" aria-hidden="true" />
                    {card(s, i, true)}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* ---------------- desktop: the drafting desk ---------------- */
  return (
    <section
      ref={rootRef}
      aria-labelledby="process-heading"
      className="relative border-t border-hairline/70"
      style={{ height: '340vh' }}
    >
      <div ref={stickyRef} className="sticky top-0 flex h-[100vh] h-[100dvh] flex-col justify-center overflow-hidden">
        {/* drafting guides — full-width hairlines the rail travels on */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          {['top-[30%]', 'top-1/2', 'top-[70%]'].map((pos, i) => (
            <div key={pos} className={`absolute inset-x-0 ${pos} h-px bg-hairline/60 transition-opacity duration-500 hover:opacity-100`} />
          ))}
          {/* vertical ticks under each sheet's dock zone */}
          <div className="absolute inset-y-[26%] left-[22%] w-px bg-hairline/70 transition-opacity duration-500 hover:opacity-100" />
          <div className="absolute inset-y-[26%] right-[6%] w-px bg-hairline/40 transition-opacity duration-500 hover:opacity-100" />
        </div>

        <div className="mx-auto mb-12 w-full max-w-content px-5 md:px-10 lg:px-16">
          <p className="kicker mb-6">{process.kicker}</p>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 id="process-heading" className="max-w-[22ch] text-headline font-bold text-ink transition-all duration-500 hover:text-signal">
              {process.heading}
            </h2>
            <p className="max-w-[36ch] pb-1 text-[0.95rem] leading-relaxed text-ink-muted transition-colors duration-500 hover:text-ink">
              {process.subheading}
            </p>
          </div>
        </div>

        {/* the desk: sheets ride the rail, the thread connects the ports */}
        <div
          ref={railRef}
          className="relative flex gap-8 pl-5 will-change-transform md:pl-[max(2.5rem,calc((100vw-1320px)/2+2.5rem))] lg:pl-[max(4rem,calc((100vw-1320px)/2+4rem))]"
          style={{ width: 'max-content' }}
        >
          {/* thread layer lives inside the translated rail — ports and path share one coordinate space */}
          <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
            <path
              ref={threadRef}
              fill="none"
              stroke="#1F4EA8"
              strokeWidth="1.6"
              strokeLinecap="round"
              opacity="0.85"
              className="transition-all duration-500 hover:stroke-[2.5px] hover:opacity-100"
            />
          </svg>
          {stages.map((s, i) => card(s, i, i === activeIdx))}
          {/* trailing breathing room so the last sheet doesn't hug the edge */}
          <div className="w-[14vw] flex-shrink-0" aria-hidden="true" />
        </div>

        {/* bottom ruler + position readout */}
        <div className="mx-auto mt-12 flex w-full max-w-content items-center gap-6 px-5 md:px-10 lg:px-16">
          <div className="relative h-px flex-1 bg-hairline transition-colors duration-500 hover:bg-ink-faint/50" aria-hidden="true">
            <div ref={fillRef} className="absolute inset-y-0 left-0 w-full origin-left scale-x-0 bg-signal transition-colors duration-500 hover:bg-signal/80" />
          </div>
          <div className="relative h-5 font-mono text-[0.66rem] font-semibold uppercase tracking-[0.22em]" aria-live="polite">
            {stages.map((s, i) => (
              <span
                key={s.code}
                className={`absolute right-0 top-0 whitespace-nowrap transition-all duration-500 ease-reveal ${
                  i === activeIdx ? 'translate-y-0 text-signal opacity-100' : 'translate-y-2 opacity-0'
                }`}
              >
                SHEET {s.code} / {String(stages.length).padStart(2, '0')} — {s.title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
