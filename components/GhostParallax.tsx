'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function GhostParallax({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elm = ref.current;
    if (!elm) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const band = elm.closest('.cta-band');
    if (!band) return;
    const xTo = gsap.quickTo(elm, 'x', { duration: 1.1, ease: 'power3' });
    const yTo = gsap.quickTo(elm, 'y', { duration: 1.1, ease: 'power3' });
    const onMove = (e: PointerEvent) => {
      const r = band.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width - 0.5;
      const ny = (e.clientY - r.top) / r.height - 0.5;
      xTo(nx * -36);
      yTo(ny * -24);
    };
    band.addEventListener('pointermove', onMove as EventListener);
    return () => band.removeEventListener('pointermove', onMove as EventListener);
  }, []);

  return (
    <div ref={ref} className="ghost-parallax" aria-hidden="true">
      {children}
    </div>
  );
}
