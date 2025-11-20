'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Code, Database, Globe, Smartphone, Palette, Megaphone, Sparkles, Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Script from 'next/script';
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
              className="text-[clamp(2.3rem,8vw,5.3rem)] font-black leading-[0.95] tracking-[-0.02em] text-white"
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
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="relative p-6 rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden transition-all"
                  style={{
                    boxShadow: `0 20px 60px ${service.accent}`,
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
                    <div className="space-y-2 pt-2">
                      {service.examples?.slice(0, 3).map((example, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-white/50">
                          <div className="w-1 h-1 rounded-full bg-white/30" />
                          <span>{example}</span>
                        </div>
                      ))}
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

          {/* Use Cases Section */}
          {pageCopy.useCases && (
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-8"
            >
              <div className="text-center space-y-3">
                <p className="text-[0.55rem] uppercase tracking-[0.6em] text-white/50">{pageCopy.useCases.heading}</p>
                <h2 className="text-2xl md:text-3xl font-semibold text-white" style={{ fontFamily: 'var(--font-syne), sans-serif' }}>
                  {pageCopy.useCases.subheading}
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pageCopy.useCases.items.map((useCase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 space-y-3"
                  >
                    <h3 className="text-lg font-semibold text-white" style={{ fontFamily: 'var(--font-syne), sans-serif' }}>
                      {useCase.title}
                      </h3>
                    <p className="text-sm text-white/70 leading-relaxed">{useCase.description}</p>
                    {useCase.examples && useCase.examples.length > 0 && (
                      <div className="space-y-2 pt-2">
                        {useCase.examples.map((example, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-white/50">
                            <Check className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                            <span>{example}</span>
                          </div>
                        ))}
                    </div>
                    )}
                        </motion.div>
                      ))}
                    </div>
            </motion.section>
          )}

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center space-y-10"
                            >
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              {pageCopy.ctaText || 'Tell us what you need — we\'ll map the solution and timeline in one call.'}
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 px-7 sm:px-10 py-4 rounded-full bg-white text-black font-semibold text-[0.8rem] sm:text-sm uppercase tracking-[0.14em] sm:tracking-[0.22em] hover:bg-white/90 transition-all"
                style={{ fontFamily: 'var(--font-syne), sans-serif' }}
              >
                {pageCopy.cta || 'Discuss your project'}
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>

          {pageCopy.proof && (
            <section className="relative rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.02] via-white/[0.01] to-white/[0.05] p-6 md:p-10 space-y-10">
              <div className="text-center space-y-3">
                <p className="text-[0.55rem] uppercase tracking-[0.6em] text-white/50">{pageCopy.proof.heading}</p>
                <h3 className="text-2xl md:text-3xl font-semibold text-white" style={{ fontFamily: 'var(--font-syne), sans-serif' }}>
                  {pageCopy.proof.subheading}
                </h3>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {pageCopy.proof.items.map((item, index) => (
                  <div
                    key={`${item.title}-${index}`}
                    className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 space-y-4"
                  >
                    <p className="text-sm text-emerald-300 uppercase tracking-[0.4em]">{item.stat}</p>
                    <h4 className="text-xl font-semibold text-white" style={{ fontFamily: 'var(--font-syne), sans-serif' }}>
                      {item.title}
                    </h4>
                    <p className="text-sm text-white/60 leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {pageCopy.engagement && (
            <section className="space-y-8">
              <div className="text-center space-y-3">
                <p className="text-[0.55rem] uppercase tracking-[0.6em] text-white/50">{pageCopy.engagement.heading}</p>
                <h3 className="text-2xl md:text-3xl font-semibold text-white" style={{ fontFamily: 'var(--font-syne), sans-serif' }}>
                  {pageCopy.engagement.subheading}
                </h3>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {pageCopy.engagement.plans.map((plan) => (
                  <div key={plan.title} className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 flex flex-col gap-4">
                    <div className="space-y-2">
                      <p className="text-[0.55rem] uppercase tracking-[0.35em] text-white/40">{plan.highlight}</p>
                      <h4 className="text-xl font-semibold text-white">{plan.title}</h4>
                      <p className="text-sm text-white/60">{plan.price}</p>
                    </div>
                    <ul className="space-y-2 text-sm text-white/70">
                      {plan.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/30" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className="inline-flex items-center gap-2 text-[0.78rem] sm:text-sm uppercase tracking-[0.18em] sm:tracking-[0.3em] text-white/70 hover:text-white transition-colors">
                      <span>{plan.cta}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                ))}
              </div>
            </section>
          )}

          {pageCopy.faq && (
            <section className="space-y-6">
              <div className="text-center space-y-2">
                <p className="text-[0.55rem] uppercase tracking-[0.6em] text-white/50">{pageCopy.faq.heading}</p>
                </div>
              <div className="space-y-3">
                {pageCopy.faq.items.map((item) => (
                  <details key={item.question} className="group rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                    <summary className="cursor-pointer list-none flex items-center justify-between text-white/80 text-sm font-semibold">
                      <span>{item.question}</span>
                      <span className="text-white/50 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                    </summary>
                    <p className="text-sm text-white/60 mt-3">{item.answer}</p>
                  </details>
                ))}
              </div>
              <Script
                id="faq-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'FAQPage',
                    mainEntity: pageCopy.faq.items.map((item) => ({
                      '@type': 'Question',
                      name: item.question,
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: item.answer,
                      },
                    })),
                  }),
                }}
              />
            </section>
          )}
        </div>
      </div>
    </main>
  );
}
