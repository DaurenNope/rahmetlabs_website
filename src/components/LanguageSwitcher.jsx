'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { locales } from '../lib/i18n';

export default function LanguageSwitcher({ variant = 'default', className = '' }) {
  const { language, setLanguage } = useLanguage();
  const compact = variant === 'mobile';

  return (
    <div
      className={`flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 ${
        compact ? 'w-full justify-between px-2' : ''
      } ${className}`}
      aria-label="Language switcher"
    >
      {locales.map((lang) => (
        <motion.button
          key={lang}
          onClick={() => setLanguage(lang)}
          whileHover={{ scale: 1.03 }}
          className={`rounded-full uppercase transition-colors tracking-[0.3em] ${
            compact ? 'px-2 py-1 text-[0.55rem]' : 'px-3 py-1.5 text-[0.65rem]'
          } ${language === lang ? 'bg-white text-black' : 'text-white/60 hover:text-white'}`}
        >
          {lang}
        </motion.button>
      ))}
    </div>
  );
}

