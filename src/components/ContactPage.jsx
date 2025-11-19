'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowLeft, MessageCircle, Send, Mail } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

const iconMap = {
  MessageCircle,
  Send,
  Mail,
};

export default function ContactPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { dictionary } = useLanguage();
  const contact = dictionary.contact;
  const portfolio = dictionary.portfolioPage;

  return (
    <main className="relative bg-black text-white min-h-screen">
      <div className="absolute inset-0 pointer-events-none mix-blend-screen">
        <motion.div
          animate={{ opacity: [0.15, 0.25, 0.15], scale: [1, 1.2, 1] }}
          transition={{ duration: 14, repeat: Infinity }}
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-[150px]"
          style={{ background: 'radial-gradient(circle, rgba(52,211,153,0.2), transparent)' }}
        />
        <motion.div
          animate={{ opacity: [0.15, 0.25, 0.15], scale: [1, 1.1, 1] }}
          transition={{ duration: 16, repeat: Infinity, delay: 2 }}
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[130px]"
          style={{ background: 'radial-gradient(circle, rgba(248,113,113,0.2), transparent)' }}
        />
      </div>

      <div className="relative z-10 pt-32 pb-32 px-4 sm:px-6 lg:px-10">
        <div className="max-w-4xl mx-auto space-y-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <Link href="/">
              <motion.button whileHover={{ x: -4 }} className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors mb-4">
                <ArrowLeft className="w-4 h-4" />
                {portfolio.backLabel}
              </motion.button>
            </Link>
            <div className="text-center space-y-4">
              <h1 className="text-[clamp(3rem,10vw,6rem)] font-black leading-[0.9] tracking-[-0.02em]" style={{ fontFamily: 'var(--font-syne), sans-serif' }}>
                {contact.heading}
              </h1>
              <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                {contact.subheading}
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {contact.methods.map((method, index) => {
              const Icon = iconMap[method.icon] ?? MessageCircle;
              const accentColor = typeof method.accent === 'string' ? method.accent : 'rgba(52, 211, 153, 0.2)';
              const gradientClass = typeof method.gradient === 'string' ? method.gradient : 'from-emerald-400/30 via-emerald-500/20 to-transparent';
              
              return (
                <motion.a
                  key={method.id}
                  href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : undefined}
                  rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group relative p-6 rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden cursor-pointer"
                  style={{ boxShadow: `0 20px 60px ${accentColor}` }}
                >
                  <div className="relative z-10 space-y-5">
                    <div className="flex items-start justify-between gap-3">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${gradientClass} border border-white/10 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      {method.badge && (
                        <span className="text-[0.5rem] uppercase tracking-[0.4em] text-white/40">{method.badge}</span>
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white transition-colors" style={{ fontFamily: 'var(--font-syne), sans-serif' }}>
                        {method.title}
                      </h3>
                      <p className="text-sm text-white/50 uppercase tracking-[0.3em]">{method.label}</p>
                    </div>
                    <p className="text-sm text-white/70 leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                      {method.description}
                    </p>
                  </div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" style={{ background: `radial-gradient(circle at center, ${accentColor}, transparent)` }} />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

