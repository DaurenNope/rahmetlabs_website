'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Services', href: '#services' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Work', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

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
              <a
                key={item.name}
                href={item.href}
                className="text-xs tracking-[0.4em] uppercase text-white/60 hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
            <Link
              href="#contact"
              className="px-5 py-2 rounded-full text-xs font-semibold tracking-[0.35em] uppercase bg-white text-black hover:opacity-90 transition"
            >
              Talk to us
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
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
              <div className="py-4 space-y-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-white/80 hover:text-white tracking-[0.35em] uppercase text-xs"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="px-4 pt-4">
                  <Link
                    href="#contact"
                    className="w-full inline-flex justify-center px-5 py-3 rounded-full text-xs font-semibold tracking-[0.3em] uppercase bg-white text-black"
                    onClick={() => setIsOpen(false)}
                  >
                    Talk to us
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
