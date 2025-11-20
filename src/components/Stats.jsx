'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

function AnimatedCounter({ value, suffix, isInView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [value, isInView]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { dictionary } = useLanguage();
  const stats = dictionary.stats;

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-black text-white py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-10"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none mix-blend-screen hidden md:block">
        <motion.div
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[180px]"
          style={{ background: 'radial-gradient(circle, rgba(52,211,153,0.2), transparent)' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 space-y-3"
        >
          <p className="text-[0.55rem] uppercase tracking-[0.7em] text-white/50">{stats.label}</p>
          <h2 className="text-[clamp(2rem,6vw,4rem)] font-black tracking-[-0.03em]" style={{ fontFamily: 'var(--font-syne), sans-serif' }}>
            {stats.heading}
          </h2>
        </motion.div>

        <div className="grid grid-flow-col auto-cols-[70%] gap-4 overflow-x-auto snap-x snap-mandatory pb-2 -mx-4 px-4 no-scrollbar sm:grid-flow-row sm:auto-cols-auto sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible sm:snap-none sm:pb-0 sm:mx-0 sm:px-0">
          {stats.cards.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="relative p-5 sm:p-6 rounded-3xl border border-white/10 bg-white/[0.02] text-center snap-center"
              >
                <div className="space-y-3">
                  <p className="text-4xl font-black text-white" style={{ fontFamily: 'var(--font-syne), sans-serif' }}>
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} isInView={isInView} />
                  </p>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/60">{stat.label}</p>
                  <p className="text-xs text-white/50">{stat.detail}</p>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
