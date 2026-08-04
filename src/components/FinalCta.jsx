'use client';

/**
 * FinalCta — dark blueprint-section CTA with grid overlay and decorative SVG thread.
 * Enhanced with hover effects and micro-interactions.
 */

import Reveal from './Reveal';
import Button from './Button';

export default function FinalCta({ cta, locale }) {
  return (
    <section
      className="relative overflow-hidden py-28 text-card md:py-44 transition-all duration-700"
      style={{ background: 'linear-gradient(160deg, #1A3C86 0%, #12285A 60%, #0B1A3D 100%)' }}
      aria-labelledby="final-cta-heading"
    >
      {/* blueprint grid — the working sheet, drawn in faint white ink */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-700 hover:opacity-80"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />
      {/* resolved thread, echoed at sheet scale */}
      <svg
        className="pointer-events-none absolute -bottom-10 left-0 w-[140%] min-w-[900px] transition-all duration-700 hover:scale-105"
        viewBox="0 0 1400 320"
        fill="none"
        aria-hidden="true"
        style={{ opacity: 0.5 }}
      >
        <path
          d="M0 280c140 0 168-190 300-190 96 0 104 84 196 84 66 0 104-24 140-56 30-27 66-40 112-40"
          stroke="rgba(255,255,255,0.28)"
          strokeWidth="2"
          strokeLinecap="round"
          className="transition-all duration-700 hover:stroke-[3px] hover:stroke-white/40"
        />
        <circle cx="6" cy="279" r="7" fill="rgba(255,255,255,0.55)" className="transition-all duration-500 hover:fill-white/70 hover:scale-125" />
        <circle cx="748" cy="78" r="5" fill="rgba(255,255,255,0.4)" className="transition-all duration-500 hover:fill-white/60 hover:scale-125" />
      </svg>

      <div className="relative mx-auto max-w-content px-5 md:px-10 lg:px-16">
        <Reveal variant="fade" className="max-w-[880px]">
          <p className="kicker mb-8" style={{ color: 'rgba(255,255,255,0.6)' }}>{cta.kicker}</p>
          <h2 id="final-cta-heading" className="mb-8 text-display font-bold !text-white transition-all duration-500 hover:tracking-wide">
            {cta.heading}{' '}
            <span className="serif-accent font-normal transition-all duration-500 hover:text-white/90" style={{ color: 'rgba(255,255,255,0.85)' }}>{cta.headingAccent}</span>
          </h2>
          <p className="mb-8 max-w-[56ch] text-[1.08rem] leading-[1.75] transition-colors duration-500 hover:text-white/80" style={{ color: 'rgba(255,255,255,0.72)' }}>
            {cta.subheading}
          </p>
          <div className="mb-10 max-w-[56ch] border-l-2 border-white/25 pl-5 transition-all duration-500 hover:border-white/50 hover:pl-6">
            <p className="kicker mb-2" style={{ color: 'rgba(255,255,255,0.6)' }}>{cta.offer.kicker}</p>
            <p className="text-[1rem] leading-[1.7] transition-colors duration-500 hover:text-white/95" style={{ color: 'rgba(255,255,255,0.92)' }}>
              {cta.offer.title}
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href={`/${locale}/contact`} variant="ink">{cta.primary}</Button>
            <Button href="https://wa.me/77088413062" external variant="dark">{cta.whatsapp}</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
