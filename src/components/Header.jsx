'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { dictionary } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: dictionary.navigation.services, href: '/services' },
    { name: dictionary.navigation.work, href: '/portfolio' },
    { name: dictionary.navigation.about, href: '/about' },
    { name: dictionary.navigation.contact, href: '/contact' },
  ].filter(item => !item.href.startsWith('#'));

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/85 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <nav className="h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-lg font-black tracking-[0.4em] text-white">RAHMET</div>
            <div className="text-xs uppercase tracking-[0.5em] text-white/60">LABS</div>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xs tracking-[0.4em] uppercase text-white/60 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <LanguageSwitcher />
          </div>

          <div className="md:hidden flex items-center gap-3">
            <LanguageSwitcher variant="mobile" className="md:hidden min-w-[120px]" />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white/70 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden border-t border-white/10 bg-black/90 backdrop-blur-lg"
            >
              <div className="py-4 space-y-4">
                <div className="px-4">
                  <LanguageSwitcher variant="mobile" className="md:hidden w-full" />
                </div>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-white/80 hover:text-white tracking-[0.35em] uppercase text-xs"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
          </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
