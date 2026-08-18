'use client';

import { useEffect, useRef } from 'react';

export default function Reveal({
  children,
  className = '',
  as: Tag = 'div',
  style,
  once = false,
}: {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'span';
  style?: React.CSSProperties;
  /* once: reveal on first entry and never hide again — for sections where
     disappearing content is a worse failure than a replayed entrance */
  once?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const elm = ref.current;
    if (!elm) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elm.classList.add('is-in');
      return;
    }
    if (once) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('is-in');
              io.disconnect();
            }
          });
        },
        { rootMargin: '0px 0px -14% 0px' }
      );
      io.observe(elm);
      return () => io.disconnect();
    }
    /* two observers: entry arms the reveal, and once the element leaves the
       viewport completely it disarms — so returning to a section replays the
       entrance instead of showing dead, already-animated content */
    const ioIn = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('is-in');
        });
      },
      { rootMargin: '0px 0px -14% 0px' }
    );
    const ioOut = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) e.target.classList.remove('is-in');
        });
      },
      { threshold: 0 }
    );
    ioIn.observe(elm);
    ioOut.observe(elm);
    return () => {
      ioIn.disconnect();
      ioOut.disconnect();
    };
  }, [once]);

  return (
    <Tag ref={ref as never} className={`reveal ${className}`} style={style}>
      {children}
    </Tag>
  );
}
