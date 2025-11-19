'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Capabilities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { dictionary } = useLanguage();
  const capabilities = dictionary.capabilities;

  return (
    <section id="capabilities" ref={ref} className="relative overflow-hidden bg-black text-white py-32 px-4 sm:px-6 lg:px-10">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none mix-blend-screen">
        <motion.div
          animate={{
            opacity: [0.15, 0.25, 0.15],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full blur-[140px]"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.25), transparent)' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4"
        >
          <p className="text-[0.6rem] uppercase tracking-[0.8em] text-white/60">{capabilities.label}</p>
          <h2
            className="text-[clamp(2.5rem,8vw,5.5rem)] font-black leading-[0.9] tracking-[-0.02em] text-white"
            style={{ fontFamily: 'var(--font-syne), sans-serif' }}
          >
            {capabilities.heading}
          </h2>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mt-4" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
            {capabilities.subheading}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {capabilities.categories.map((cap, categoryIndex) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="relative p-6 rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden"
              style={{
                boxShadow: `0 20px 60px ${cap.accent}`,
              }}
            >
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <h3
                    className="text-lg font-bold text-white"
                    style={{ fontFamily: 'var(--font-syne), sans-serif' }}
                  >
                    {cap.title}
                  </h3>
                  <p className="text-[0.5rem] uppercase tracking-[0.4em] text-white/40">{cap.badge}</p>
                </div>
                
                <div className="space-y-4 pt-2 border-t border-white/10">
                  {cap.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: categoryIndex * 0.1 + itemIndex * 0.05 }}
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-white/40" />
                      <span className="text-sm" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, ${cap.accent}, transparent)`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
