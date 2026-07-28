'use client';

import { useLayoutEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { gsap } from 'gsap';
import Button from './Button';

const HeroScene = dynamic(() => import('./HeroScene'), { ssr: false });

export default function Hero({ locale, hero }) {
  const introRef = useRef(null);

  useLayoutEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return undefined;

    const ctx = gsap.context(() => {
      const words = introRef.current.querySelectorAll('[data-word]');
      gsap.fromTo(
        words,
        { opacity: 0, y: 40, filter: 'blur(6px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.9, stagger: 0.06, ease: 'power3.out', delay: 0.15 }
      );
      gsap.fromTo(
        introRef.current.querySelectorAll('[data-reveal]'),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.7 }
      );
    }, introRef);

    return () => ctx.revert();
  }, []);

  const words = hero.headline.split(' ');

  return (
    <section className="relative flex min-h-[calc(100vh-68px)] flex-col overflow-hidden bg-viewport">
      <HeroScene />

      <div ref={introRef} className="relative z-10 mx-auto flex w-full max-w-content flex-1 flex-col justify-center px-6 py-24 lg:px-10">
        <span data-reveal className="mb-8 inline-block w-fit border border-amber/30 bg-amber/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-amber">
          {hero.kicker}
        </span>
        <h1 className="text-display max-w-5xl text-balance text-viewport-ink" style={{ fontWeight: 800 }}>
          {words.map((word, i) => (
            <span key={i} data-word className="inline-block will-change-transform">
              {word}
              {i < words.length - 1 ? '\u00A0' : ''}
            </span>
          ))}
        </h1>
        <p data-reveal className="mt-8 max-w-xl text-balance text-lg leading-relaxed text-viewport-ink-muted sm:text-xl">
          {hero.subheadline}
        </p>
        <div data-reveal className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Button href={`/${locale}/contact`} variant="dark">
            {hero.ctaPrimary}
          </Button>
          <Button href={`/${locale}/portfolio`} variant="dark-ghost" arrow={false}>
            {hero.ctaSecondary}
          </Button>
        </div>
      </div>

      <div data-reveal className="relative z-10 mx-auto flex w-full max-w-content items-center justify-between px-6 pb-8 lg:px-10">
        <span className="text-xs uppercase tracking-[0.14em] text-viewport-ink-muted">Scroll</span>
        <span className="h-8 w-px animate-pulse bg-viewport-hairline" aria-hidden />
      </div>
    </section>
  );
}
