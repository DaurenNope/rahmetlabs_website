'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { locales, localeNames, type Locale } from '@/lib/i18n';
import type { Dictionary } from '@/lib/content';

function TamgaMark() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path
        d="M2 2 H18 V18 H6 V6 H14 V14 H10 V10"
        fill="none"
        stroke="#D93A1E"
        strokeWidth="2.4"
        strokeLinecap="square"
      />
    </svg>
  );
}

export default function Nav({ locale, t }: { locale: Locale; t: Dictionary }) {
  const navRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const rest = pathname.replace(/^\/(en|ru|kz)/, '') || '';

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      nav.classList.toggle('nav-hidden', y > lastY && y > 320);
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.documentElement.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <nav className="nav" aria-label="Main" ref={navRef}>
        <Link className="logo" href={`/${locale}`} aria-label="Rahmet Labs home">
          <TamgaMark />
          <span className="logo-word">Rahmet Labs</span>
        </Link>
        <div className="nav-links">
          {t.nav.links.map((l) => (
            <Link key={l.href} href={`/${locale}${l.href}`}>
              {l.label}
            </Link>
          ))}
          <Link href={`/${locale}/contact`} className="nav-cta">
            {t.nav.cta}
          </Link>
          <div className="nav-langs" aria-label="Language">
            {locales.map((l) => (
              <Link key={l} href={`/${l}${rest}`} className={l === locale ? 'active' : ''} hrefLang={l === 'kz' ? 'kk' : l}>
                {localeNames[l]}
              </Link>
            ))}
          </div>
        </div>
        <button
          type="button"
          className={`nav-burger${open ? ' open' : ''}`}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </nav>
      <div className={`nav-menu${open ? ' open' : ''}`} aria-hidden={!open}>
        <div className="nav-menu-links">
          {t.nav.links.map((l, i) => (
            <Link key={l.href} href={`/${locale}${l.href}`} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
              <span className="nav-menu-idx mono">0{i + 1}</span>
              {l.label}
            </Link>
          ))}
          <Link href={`/${locale}/contact`} className="nav-menu-cta" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
            <span className="nav-menu-idx mono">0{t.nav.links.length + 1}</span>
            {t.nav.cta}
          </Link>
        </div>
        <div className="nav-menu-langs mono">
          {locales.map((l) => (
            <Link
              key={l}
              href={`/${l}${rest}`}
              className={l === locale ? 'active' : ''}
              hrefLang={l === 'kz' ? 'kk' : l}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
            >
              {localeNames[l]}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
