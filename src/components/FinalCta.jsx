'use client';

import { useRef, useState } from 'react';
import Reveal from './Reveal';
import Button from './Button';

export default function FinalCta({ cta, locale }) {
  return (
    <section className="relative border-t border-hairline/70 py-28 md:py-44" aria-labelledby="final-cta-heading">
      <div className="mx-auto max-w-content px-5 md:px-10 lg:px-16">
        <Reveal variant="fade" className="max-w-[880px]">
          <p className="kicker mb-8">{cta.kicker}</p>
          <h2 id="final-cta-heading" className="mb-8 text-display font-bold text-ink">
            {cta.heading}{' '}
            <span className="serif-accent font-normal text-amber">{cta.headingAccent}</span>
          </h2>
          <p className="mb-12 max-w-[56ch] text-[1.08rem] leading-[1.75] text-ink-muted">
            {cta.subheading}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href={`/${locale}/contact`} variant="primary">{cta.primary}</Button>
            <Button href="https://wa.me/77088413062" external variant="ghost">{cta.whatsapp}</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
