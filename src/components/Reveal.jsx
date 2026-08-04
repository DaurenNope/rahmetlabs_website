'use client';

/**
 * Reveal — scroll-triggered entrance animation.
 * Primary mechanism: IntersectionObserver + CSS transitions on transform/opacity.
 * Engages a `.ltr-in` class that CSS selectors use to animate descendants
 * via `calc(var(--i) * stagger)` delays.
 * Enhanced with hover effects and micro-interactions.
 */

import { useEffect, useRef } from 'react';

export default function Reveal({
  as: Tag = 'div',
  variant = 'fade',
  delay = 0,
  stagger = 70,
  once = true,
  className = '',
  children,
  ...rest
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => el.classList.add('ltr-in');

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      reveal();
      return;
    }

    el.style.setProperty('--reveal-delay', `${delay}ms`);
    el.style.setProperty('--ltr-stagger', `${stagger}ms`);

    if (typeof IntersectionObserver === 'undefined') {
      reveal(); // older browsers: show content immediately
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal();
            if (once) io.disconnect();
          } else if (!once) {
            el.classList.remove('ltr-in');
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);

    // Safety net: never leave near-fold content invisible if the observer
    // misses (old-or-odd engines, fast scrolls past triggers).
    const safety = setTimeout(() => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 1.15) reveal();
    }, 2000);

    return () => {
      clearTimeout(safety);
      io.disconnect();
    };
  }, [delay, stagger, once]);

  return (
    <Tag
      ref={ref}
      className={`ltr ltr-${variant} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
