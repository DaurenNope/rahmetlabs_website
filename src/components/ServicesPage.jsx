'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Zap, Code, Database, Globe, Smartphone, Palette, Megaphone, Sparkles, Check, ArrowRight } from 'lucide-react';
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

export default function ServicesPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedService, setSelectedService] = useState(0);
  const { dictionary } = useLanguage();
  const servicesData = dictionary.services;
  const pageCopy = dictionary.servicesPage;
  const cards = servicesData.cards;

  return (
    <main className="relative bg-black text-white min-h-screen">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none mix-blend-screen">
        <motion.div
          animate={{
            opacity: [0.15, 0.25, 0.15],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-20 left-10 w-96 h-96 rounded-full blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(52,211,153,0.3), transparent)' }}
        />
        <motion.div
          animate={{
            opacity: [0.15, 0.25, 0.15],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 14, repeat: Infinity, delay: 2 }}
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full blur-[100px]"
          style={{ background: 'radial-gradient(circle, rgba(248,113,113,0.3), transparent)' }}
        />
      </div>

      <div className="relative z-10 pt-32 pb-32 px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <p className="text-[0.6rem] uppercase tracking-[0.8em] text-white/60">{pageCopy.label}</p>
            <h1
              className="text-[clamp(3rem,10vw,6rem)] font-black leading-[0.9] tracking-[-0.02em] text-white"
              style={{ fontFamily: 'var(--font-syne), sans-serif' }}
            >
              {pageCopy.heading}
            </h1>
            <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
              {pageCopy.subheading}
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((service, index) => {
              const Icon = iconMap[service.icon] ?? Sparkles;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  onClick={() => setSelectedService(index)}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className={`relative p-6 rounded-3xl border cursor-pointer overflow-hidden transition-all ${
                    selectedService === index
                      ? 'border-white/50 bg-white/10'
                      : 'border-white/10 bg-white/[0.02]'
                  }`}
                  style={{
                    boxShadow: selectedService === index ? `0 20px 60px ${service.accent}` : 'none',
                  }}
                >
                  <div className="relative z-10 space-y-4">
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
                    <div className="pt-2">
                      <p className="text-xs text-white/50 uppercase tracking-[0.3em] mb-1">{pageCopy.table?.[0] || 'Starter'}</p>
                      <p className="text-lg font-bold text-white">
                        {service.pricing.starter.price}
                        {service.pricing.starter.price !== 'Custom' && (
                          <span className="text-sm text-white/60 font-normal"> {service.pricing.starter.period}</span>
                        )}
                      </p>
                    </div>
                  </div>
                  <div
                    className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, ${service.accent}, transparent)`,
                    }}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Selected Service Details */}
          {cards[selectedService] && (
            <motion.div
              key={selectedService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative p-8 md:p-12 rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden"
              style={{
                boxShadow: `0 20px 60px ${cards[selectedService].accent}`,
              }}
            >
              <div className="relative z-10">
                <div className="grid md:grid-cols-2 gap-12">
                  {/* Features */}
                  <div className="space-y-6">
                    <div>
                      <p className="text-[0.6rem] uppercase tracking-[0.4em] text-white/50 mb-4">{pageCopy.featuresLabel || 'Features'}</p>
                      <h3
                        className="text-3xl font-bold text-white mb-4"
                        style={{ fontFamily: 'var(--font-syne), sans-serif' }}
                      >
                        {cards[selectedService].title}
                      </h3>
                      <p className="text-white/70 leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                        {cards[selectedService].description}
                      </p>
                    </div>
                    <div className="space-y-3">
                      {cards[selectedService].features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-center gap-3 text-white/80"
                        >
                          <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                          <span style={{ fontFamily: 'var(--font-inter), sans-serif' }}>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="space-y-6">
                    <div>
                      <p className="text-[0.6rem] uppercase tracking-[0.4em] text-white/50 mb-6">{pageCopy.pricingLabel || 'Pricing'}</p>
                      <div className="space-y-4">
                        {['starter', 'pro', 'enterprise'].map((tier, idx) => {
                          const pricing = cards[selectedService].pricing[tier];
                          return (
                            <div
                              key={tier}
                              className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]"
                            >
                              <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-2">
                                {pageCopy.table?.[idx] || tier}
                              </p>
                              <p className="text-2xl font-bold text-white mb-1">
                                {pricing.price}
                                {pricing.price !== 'Custom' && (
                                  <span className="text-sm text-white/60 font-normal"> {pricing.period}</span>
                                )}
                              </p>
                              {pricing.price === 'Custom' && (
                                <p className="text-sm text-white/60">{pricing.period}</p>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <Link href="#contact">
                      <motion.button
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm uppercase tracking-[0.2em] hover:bg-white/90 transition-all"
                        style={{ fontFamily: 'var(--font-syne), sans-serif' }}
                      >
                        {pageCopy.cta}
                        <ArrowRight className="w-5 h-5" />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="absolute inset-0 opacity-50 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, ${cards[selectedService].accent}, transparent)`,
                }}
              />
            </motion.div>
          )}
        </div>
      </div>
    </main>
  );
}

