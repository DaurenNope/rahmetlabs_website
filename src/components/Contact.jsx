'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageCircle, Send, Mail, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const iconMap = {
  MessageCircle,
  Send,
  Mail,
};

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { dictionary } = useLanguage();
  const contact = dictionary.contact;

  return (
    <section id="contact" ref={ref} className="relative overflow-hidden bg-black text-white py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-10">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none mix-blend-screen">
        <motion.div
          animate={{
            opacity: [0.15, 0.25, 0.15],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-[150px]"
          style={{ background: 'radial-gradient(circle, rgba(248,113,113,0.2), transparent)' }}
        />
        <motion.div
          animate={{
            opacity: [0.15, 0.25, 0.15],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 14, repeat: Infinity, delay: 2 }}
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[130px]"
          style={{ background: 'radial-gradient(circle, rgba(52,211,153,0.2), transparent)' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4"
        >
          <p className="text-[0.6rem] uppercase tracking-[0.8em] text-white/60">{contact.heading}</p>
          <h2
            className="text-[clamp(2.5rem,8vw,5.5rem)] font-black leading-[0.9] tracking-[-0.02em] text-white"
            style={{ fontFamily: 'var(--font-syne), sans-serif' }}
          >
            {contact.heading}
          </h2>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mt-4" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
            {contact.subheading}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {contact.methods.map((method, index) => {
            const Icon = iconMap[method.icon] ?? MessageCircle;
            const accentColor = typeof method.accent === 'string' ? method.accent : 'rgba(52, 211, 153, 0.2)';
            const gradientClass = typeof method.gradient === 'string' ? method.gradient : 'from-emerald-400/30 via-emerald-500/20 to-transparent';
            return (
              <motion.a
                key={index}
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : undefined}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="relative group p-8 rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden"
                style={{
                  boxShadow: `0 20px 60px ${accentColor}`,
                }}
              >
                <div className="relative z-10 space-y-5">
                  <div className="flex items-center justify-between">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${gradientClass} border border-white/10 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-[0.5rem] uppercase tracking-[0.4em] text-white/40">{method.badge}</p>
                  </div>

                  <div className="space-y-2">
                    <h3
                      className="text-xl font-bold text-white"
                      style={{ fontFamily: 'var(--font-syne), sans-serif' }}
                    >
                      {method.title}
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                      {method.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <div className="inline-flex items-center gap-2 text-white/80 group-hover:text-white transition-colors text-sm font-medium">
                      {method.label}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>

                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${accentColor}, transparent)`,
                  }}
                />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
