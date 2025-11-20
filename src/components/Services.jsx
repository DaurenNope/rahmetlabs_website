'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Zap, Code, Database, Globe, Smartphone, Palette, Megaphone, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

const iconMap = {
  Zap,
  Code,
  Database,
  Globe,
  Smartphone,
  Palette,
  Megaphone,
  Sparkles,
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(null);
  const { dictionary } = useLanguage();
  const services = dictionary.services;
  const quickWins = services.quickWins;
  const cardCount = services.cards.length;

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % cardCount);
    }, 3000);
    return () => clearInterval(interval);
  }, [isInView, cardCount]);

  return (
    <section id="services" ref={ref} className="relative overflow-hidden bg-black text-white py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-10">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none mix-blend-screen">
        <motion.div
          animate={{
            opacity: [0.2, 0.3, 0.2],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-10 w-96 h-96 rounded-full blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(52,211,153,0.3), transparent)' }}
        />
        <motion.div
          animate={{
            opacity: [0.2, 0.3, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full blur-[100px]"
          style={{ background: 'radial-gradient(circle, rgba(248,113,113,0.3), transparent)' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4"
        >
          <p className="text-[0.6rem] uppercase tracking-[0.8em] text-white/60">{services.label}</p>
          <h2
            className="text-[clamp(2.5rem,8vw,5.5rem)] font-black leading-[0.9] tracking-[-0.02em] text-white"
            style={{ fontFamily: 'var(--font-syne), sans-serif' }}
          >
            {services.heading}
          </h2>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mt-4" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
            {services.subheading}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.cards.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Sparkles;
            const isActive = active === index;
            const isHovered = hovered === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ y: -4, scale: 1.02 }}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className={`relative rounded-3xl border overflow-hidden transition-all cursor-pointer ${
                  isActive || isHovered
                    ? 'border-white/30 bg-white/[0.08]'
                    : 'border-white/10 bg-white/[0.02]'
                }`}
                style={{
                  boxShadow: isActive || isHovered ? `0 20px 60px ${service.accent}` : 'none',
                }}
              >
                <div className="p-6 space-y-5">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${service.color} opacity-20`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-[0.5rem] uppercase tracking-[0.4em] text-white/40">{service.badge}</p>
                  </div>
                  
                  <h3
                    className="text-lg font-bold text-white"
                    style={{ fontFamily: 'var(--font-syne), sans-serif' }}
                  >
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-white/70 leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 pt-2 border-t border-white/10">
                    {service.examples.slice(0, 2).map((example, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.05 + idx * 0.1 }}
                        className="text-xs text-white/50 flex items-center gap-2"
                      >
                        <div className="w-1 h-1 rounded-full bg-white/30" />
                        {example}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {(isActive || isHovered) && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, ${service.accent}, transparent)`,
                    }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {quickWins?.kits?.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-10 pt-8"
          >
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <p className="text-[0.55rem] uppercase tracking-[0.7em] text-white/50">{quickWins.badge}</p>
              <h3 className="text-2xl sm:text-3xl font-semibold text-white" style={{ fontFamily: 'var(--font-syne), sans-serif' }}>
                {quickWins.heading}
              </h3>
              <p className="text-white/65 text-sm sm:text-base">{quickWins.subheading}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {quickWins.kits.map((kit, index) => (
                <motion.div
                  key={kit.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 flex flex-col gap-4 h-full"
                >
                  <div className="space-y-2">
                    <p className="text-[0.5rem] uppercase tracking-[0.45em] text-white/40">{kit.badge}</p>
                    <h4 className="text-xl font-semibold text-white" style={{ fontFamily: 'var(--font-syne), sans-serif' }}>
                      {kit.title}
                    </h4>
                    <p className="text-sm text-white/70 leading-relaxed">{kit.description}</p>
                  </div>
                  <div className="space-y-2">
                    {kit.items.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-sm text-white/70">
                        <span className="mt-1 h-1 w-1 rounded-full bg-white/40" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center pt-10"
        >
          <Link href="/contact">
            <motion.button
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-6 sm:px-10 py-4 rounded-full bg-white text-black font-semibold text-[0.78rem] sm:text-sm uppercase tracking-[0.12em] sm:tracking-[0.2em] hover:bg-white/90 transition-all"
              style={{ fontFamily: 'var(--font-syne), sans-serif' }}
            >
              {services.cta}
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
          <div className="mt-4 flex justify-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[0.65rem] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.3em] text-white/70 hover:text-white transition-colors"
            >
              <span>{services.builderCta}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
