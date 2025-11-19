'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { locales } from '../lib/i18n';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1">
      {locales.map((lang) => (
        <motion.button
          key={lang}
          onClick={() => setLanguage(lang)}
          whileHover={{ scale: 1.03 }}
          className={`px-3 py-1.5 rounded-full text-[0.65rem] uppercase tracking-[0.3em] transition-colors ${
            language === lang ? 'bg-white text-black' : 'text-white/60 hover:text-white'
          }`}
        >
          {lang}
        </motion.button>
      ))}
    </div>
  );
}

