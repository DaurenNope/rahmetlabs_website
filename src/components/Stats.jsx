'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Rocket, Star, Zap, Clock } from 'lucide-react';

const stats = [
  { value: 50, suffix: '+', label: 'Projects Completed', icon: Rocket, accent: 'rgba(56, 189, 248, 0.15)' },
  { value: 95, suffix: '%', label: 'Client Satisfaction', icon: Star, accent: 'rgba(251, 191, 36, 0.15)' },
  { value: 2, suffix: 'x', label: 'Efficiency Improvement', icon: Zap, accent: 'rgba(52, 211, 153, 0.15)' },
  { value: 48, suffix: 'hrs', label: 'Time Saved Per Week', icon: Clock, accent: 'rgba(192, 132, 252, 0.15)' },
];

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

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-black text-white py-32 px-4 sm:px-6 lg:px-10"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none mix-blend-screen">
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
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <p className="text-[0.6rem] uppercase tracking-[0.8em] text-white/60">METRICS</p>
          <h2
            className="text-[clamp(2.5rem,8vw,5.5rem)] font-black leading-[0.9] tracking-[-0.02em] text-white"
            style={{ fontFamily: 'var(--font-syne), sans-serif' }}
          >
            By The Numbers
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="relative p-8 rounded-3xl border border-white/10 bg-white/[0.02] text-center overflow-hidden"
                style={{
                  boxShadow: `0 20px 60px ${stat.accent}`,
                }}
              >
                <div className="relative z-10 space-y-4">
                  <div className="flex justify-center">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${stat.accent.replace('0.15', '0.2')} border border-white/10`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div
                    className="text-4xl md:text-5xl lg:text-6xl font-black text-white"
                    style={{ fontFamily: 'var(--font-syne), sans-serif' }}
                  >
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} isInView={isInView} />
                  </div>
                  <div
                    className="text-sm md:text-base font-semibold text-white/80 uppercase tracking-[0.2em]"
                    style={{ fontFamily: 'var(--font-syne), sans-serif' }}
                  >
                    {stat.label}
                  </div>
                </div>

                <div
                  className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${stat.accent}, transparent)`,
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
