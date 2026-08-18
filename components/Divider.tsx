'use client';

import { useEffect, useRef } from 'react';

export default function Divider({ variant }: { variant: 'on-bone' | 'on-ink' | 'on-red' }) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const elm = ref.current;
    if (!elm) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elm.classList.add('is-in');
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            elm.classList.add('is-in');
            io.disconnect();
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(elm);
    return () => io.disconnect();
  }, []);

  return (
    <svg ref={ref} className={`shetoyu ${variant}`} aria-hidden="true">
      <defs>
        <pattern id={`so-${variant}`} width="30" height="26" patternUnits="userSpaceOnUse">
          <path d="M1 20 H23 V7 H9 V14 H16" fill="none" stroke="currentColor" strokeWidth="2" />
        </pattern>
      </defs>
      <rect width="100%" height="26" fill={`url(#so-${variant})`} />
    </svg>
  );
}
