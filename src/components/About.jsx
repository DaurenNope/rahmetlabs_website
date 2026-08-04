'use client';

/**
 * About — team profiles, toolkit marquee, and CTA.
 * Enhanced with hover effects and micro-interactions.
 */

import Reveal from './Reveal';
import Button from './Button';

export default function About({ locale, about, principles }) {
  return (
    <>
      {/* hero */}
      <section className="border-b border-hairline/70 pb-20 pt-40 md:pb-28 md:pt-52">
        <div className="mx-auto max-w-content px-5 md:px-10 lg:px-16">
          <Reveal variant="fade" className="max-w-[880px]">
            <p className="kicker mb-8">{about.kicker}</p>
            <h1 className="mb-7 text-display font-bold text-ink">{about.heading}</h1>
            <p className="max-w-[62ch] text-[1.08rem] leading-[1.75] text-ink-muted">{about.subheading}</p>
          </Reveal>
        </div>
      </section>

      {/* who you work with */}
      <section className="border-b border-hairline/70 py-24 md:py-36" aria-labelledby="team-heading">
        <div className="mx-auto max-w-content px-5 md:px-10 lg:px-16">
          <Reveal variant="fade" className="mb-12 max-w-[640px]">
            <h2 id="team-heading" className="mb-5 text-headline font-bold text-ink">{about.teamHeading}</h2>
            <p className="text-[1.02rem] leading-relaxed text-ink-muted">{about.teamIntro}</p>
          </Reveal>
          <div className="ltr-stagger grid gap-px overflow-hidden rounded-panel bg-hairline/60 md:grid-cols-3">
            {about.team.map((m, i) => (
              <Reveal as="article" key={m.name} variant="fade" className="group relative bg-paper p-8 transition-all duration-500 hover:bg-card hover:shadow-inner md:p-10">
                <span aria-hidden="true" className="mb-8 block font-mono text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-signal/90 transition-all duration-500 group-hover:tracking-[0.32em]">
                  PROFILE {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mb-1.5 font-sans text-[1.25rem] font-bold tracking-tight text-ink transition-all duration-500 group-hover:translate-x-1">{m.name}</h3>
                <p className="mb-4 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-signal/90 transition-colors duration-500 group-hover:text-signal">{m.role}</p>
                <p className="text-[0.95rem] leading-[1.7] text-ink-muted transition-colors duration-500 group-hover:text-ink/80">{m.bio}</p>
                <span aria-hidden="true" className="absolute bottom-0 left-0 h-[2px] w-0 bg-signal transition-all duration-700 ease-reveal group-hover:w-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* toolkit marquee */}
      <section className="border-b border-hairline/70 py-16 md:py-20" aria-labelledby="toolkit-heading">
        <div className="mx-auto mb-10 max-w-content px-5 md:px-10 lg:px-16">
          <Reveal variant="fade">
            <h2 id="toolkit-heading" className="text-subhead font-bold text-ink">{about.toolkitHeading}</h2>
          </Reveal>
        </div>
        <div className="relative overflow-hidden" aria-hidden="true">
          <div className="marquee-track flex w-max items-center gap-4 pr-4">
            {[...about.toolkit, ...about.toolkit].map((t, i) => (
              <span
                key={i}
                className="flex-shrink-0 rounded-full border border-hairline bg-card px-5 py-2.5 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-ink-muted transition-all duration-500 hover:border-signal/50 hover:text-signal hover:scale-105 hover:shadow-sm hover:shadow-signal/10"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-paper [mask-image:linear-gradient(to_right,black,transparent)]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-paper [mask-image:linear-gradient(to_left,black,transparent)]" />
        </div>
      </section>

      {/* cta */}
      <section className="py-24 md:py-36" aria-labelledby="about-cta-heading">
        <div className="mx-auto max-w-content px-5 md:px-10 lg:px-16">
          <Reveal variant="fade" className="max-w-[760px]">
            <h2 id="about-cta-heading" className="mb-5 text-headline font-bold text-ink">{about.ctaHeading}</h2>
            <p className="mb-10 text-[1.05rem] leading-relaxed text-ink-muted">{about.ctaSubheading}</p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href={`/${locale}/contact`} variant="primary">{about.ctaPrimary}</Button>
              <Button href={`/${locale}/portfolio`} variant="ghost">{about.ctaSecondary}</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
