'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { translations, locales } from '../lib/i18n';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('ru');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = localStorage.getItem('rahmetlabs-lang');
    if (stored && locales.includes(stored)) {
      setLanguage(stored);
    }
  }, []);

  const updateLanguage = (lang) => {
    if (!locales.includes(lang)) return;
    setLanguage(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('rahmetlabs-lang', lang);
    }
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('lang', language);
    }
  }, [language]);

  const value = {
    language,
    setLanguage: updateLanguage,
    dictionary: translations[language],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export const useLanguage = () => useContext(LanguageContext);

