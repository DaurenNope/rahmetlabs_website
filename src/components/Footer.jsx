'use client';

import { motion as Motion } from 'framer-motion';
import Link from 'next/link';
import { MessageCircle, Send, Mail, ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const iconMap = {
  MessageCircle,
  Send,
  Mail,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { dictionary } = useLanguage();
  const footer = dictionary.footer;
  const contactLinks = dictionary.contact.methods;
  const quickTargets = ['#services', '#capabilities', '#portfolio', '#contact'];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden bg-black text-white border-t border-white/10">
      <div className="absolute inset-0 pointer-events-none mix-blend-screen">
        <Motion.div
          animate={{ opacity: [0.05, 0.1, 0.05], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(52,211,153,0.15), transparent)' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-16 space-y-12">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-black text-white mb-2" style={{ fontFamily: 'var(--font-syne), sans-serif' }}>
                Rahmet Labs
              </h3>
              <p className="text-sm text-white/60 leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                {footer.tagline}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-[0.6rem] uppercase tracking-[0.4em] text-white/50 mb-4">{footer.label || 'Quick links'}</p>
            <nav className="space-y-3">
              {footer.quickLinks.map((name, idx) => (
                <a
                  key={name}
                  href={quickTargets[idx] || '#'}
                  className="block text-sm text-white/60 hover:text-white transition-colors"
                  style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                >
                  {name}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <p className="text-[0.6rem] uppercase tracking-[0.4em] text-white/50 mb-4">{dictionary.nav.contact}</p>
            <div className="space-y-3">
              {contactLinks.map((link, index) => {
                const Icon = iconMap[link.icon] ?? MessageCircle;
                return (
                  <Motion.a
                    key={index}
                    href={link.link}
                    target={link.link.startsWith('http') ? '_blank' : undefined}
                    rel={link.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors group"
                  >
                    <div className="p-2 rounded-lg border border-white/10 bg-white/[0.02] group-hover:bg-white/[0.05] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span style={{ fontFamily: 'var(--font-inter), sans-serif' }}>{link.title}</span>
                  </Motion.a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-xs text-white/50" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                © {currentYear} Rahmet Labs. {footer.copyright}
              </p>
              <p className="text-xs text-white/40 mt-1" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                {footer.builtWith}
              </p>
            </div>

            <Motion.button
              onClick={scrollToTop}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full border border-white/20 bg-white/[0.02] hover:bg-white/[0.05] transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 text-white/60" />
            </Motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
