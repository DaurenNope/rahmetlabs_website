'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-6 md:px-12 lg:px-20 border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <p className="text-sm text-white/60" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
              © {currentYear} Rahmet Labs. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-8">
            <a
              href="https://wa.me/77088413062"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/60 hover:text-white transition-colors"
              style={{ fontFamily: 'var(--font-inter), sans-serif' }}
            >
              WhatsApp
            </a>
            <a
              href="https://t.me/RahmetLabs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/60 hover:text-white transition-colors"
              style={{ fontFamily: 'var(--font-inter), sans-serif' }}
            >
              Telegram
            </a>
            <a
              href="mailto:rahmetlabs@gmail.com"
              className="text-sm text-white/60 hover:text-white transition-colors"
              style={{ fontFamily: 'var(--font-inter), sans-serif' }}
            >
              Email
            </a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-white/40" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
            Built with Next.js, React, and Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
