'use client';

/**
 * KineticHeadline — splits children (string) into words, each masked-rising
 * into place with a stagger when scrolled into view.
 * Enhanced with hover effects and micro-interactions.
 */

import { useEffect, useMemo, useRef, useState } from 'react';

function splitWords(text) {
  return text.split(/(\s+)/).filter((w) => w.trim().length > 0);
}

export default function KineticHeadline({
  text,
  as: Tag = 'h2',
  className = '',
  accentWords = [], // words to render in serif italic amber
  delay = 0,
  stagger = 45,
}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const words = useMemo(() => splitWords(text), [text]);
  let wordIndex = -1;

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((w, i) => {
        if (/^\s+$/.test(w)) return <span key={i}>{w}</span>;
        wordIndex += 1;
        const isAccent = accentWords.some((aw) => w.toLowerCase().includes(aw.toLowerCase()));
        const thisDelay = delay + wordIndex * stagger;
        return (
          <span
            key={i}
            aria-hidden="true"
            className="inline-block overflow-hidden pb-[0.08em] align-bottom transition-all duration-300 hover:scale-105"
            style={{ verticalAlign: 'baseline' }}
          >
            <span
              className={`inline-block transition-all duration-300 hover:text-signal ${isAccent ? 'serif-accent text-signal' : ''}`}
              style={{
                transform: inView ? 'translateY(0) rotate(0deg)' : 'translateY(115%) rotate(1.5deg)',
                opacity: inView ? 1 : 0,
                transition: `transform 0.9s cubic-bezier(0.16,1,0.3,1) ${thisDelay}ms, opacity 0.6s ease ${thisDelay}ms`,
              }}
            >
              {w}
            </span>
          </span>
        );
      })}
    </Tag>
  );
}
