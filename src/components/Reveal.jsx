'use client';

/**
 * Reveal — scroll-triggered entrance animation.
 * Primary mechanism: IntersectionObserver + CSS transitions on transform/opacity.
 * Engages a `.ltr-in` class that CSS selectors use to animate descendants
 * via `calc(var(--i) * stagger)` delays.
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

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('ltr-in');
      return;
    }

    el.style.setProperty('--reveal-delay', `${delay}ms`);
    el.style.setProperty('--ltr-stagger', `${stagger}ms`);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('ltr-in');
            if (once) io.disconnect();
          } else if (!once) {
            el.classList.remove('ltr-in');
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
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
