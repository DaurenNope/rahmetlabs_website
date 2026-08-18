'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';

export default function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elm = ref.current;
    if (!elm || !window.matchMedia('(pointer: fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const xTo = gsap.quickTo(elm, 'x', { duration: 0.5, ease: 'power2.out' });
    const yTo = gsap.quickTo(elm, 'y', { duration: 0.5, ease: 'power2.out' });

    const move = (e: PointerEvent) => {
      const r = elm.getBoundingClientRect();
      xTo((e.clientX - (r.left + r.width / 2)) * 0.28);
      yTo((e.clientY - (r.top + r.height / 2)) * 0.28);
    };
    const leave = () => {
      gsap.to(elm, { x: 0, y: 0, duration: 0.9, ease: 'elastic.out(1, 0.45)' });
    };
    elm.addEventListener('pointermove', move);
    elm.addEventListener('pointerleave', leave);
    return () => {
      elm.removeEventListener('pointermove', move);
      elm.removeEventListener('pointerleave', leave);
    };
  }, []);

  return (
    <div ref={ref} style={{ display: 'inline-block' }}>
      {children}
    </div>
  );
}
