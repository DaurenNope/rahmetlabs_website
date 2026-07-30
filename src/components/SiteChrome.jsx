'use client';

/**
 * SiteChrome — floating island nav (pill), full-screen overlay menu.
 * Top bar: wordmark left, nav links center (desktop), locale switcher + CTA right.
 * Mobile: hamburger morphs to X; menu opens as full-screen overlay with
 * staggered mask reveal.
 */

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { locales, localeNames } from '../lib/locales';
import Button from './Button';

function stripLocale(pathname, locale) {
  if (pathname === `/${locale}`) return '/';
  if (pathname.startsWith(`/${locale}/`)) return pathname.slice(locale.length + 1);
  return pathname;
}

export default function SiteChrome({ locale, nav }) {
  const pathname = usePathname();
  const restPath = stripLocale(pathname, locale);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.documentElement.style.overflow = ''; };
  }, [menuOpen]);

  const isActive = useCallback(
    (href) => (href === '/' ? restPath === '/' : restPath.startsWith(href)),
    [restPath]
  );

  const localePath = (loc) => `/${loc}${restPath === '/' ? '' : restPath}`;

  return (
    <>
      {/* ------------------------- top bar ------------------------- */}
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-700 ease-settle ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="mx-auto flex max-w-content items-center justify-between px-5 md:px-10">
          {/* wordmark */}
          <Link href={`/${locale}`} className="group flex items-center gap-3">
            <span className="relative flex h-8 w-8 items-center justify-center">
              <span className="absolute inset-0 rounded-[10px] border border-hairline bg-panel transition-colors duration-500 group-hover:border-amber/50" />
              <span className="relative font-mono text-[0.6rem] font-semibold tracking-[0.18em] text-amber">RL</span>
            </span>
            <span className="hidden font-sans text-[0.8125rem] font-semibold tracking-[0.06em] text-ink sm:block">
              {nav.wordmark}
            </span>
          </Link>

          {/* center nav — desktop */}
          <nav
            aria-label="Primary"
            className={`hidden items-center gap-1 rounded-full border px-2 py-1.5 transition-all duration-700 ease-settle md:flex ${
              scrolled
                ? 'border-hairline bg-panel/80 backdrop-blur-xl'
                : 'border-transparent bg-transparent'
            }`}
          >
            {nav.links.map((l) => {
              const active = isActive(l.href);
              return (
                <Link
                  key={l.href}
                  href={`/${locale}${l.href}`}
                  className={`relative rounded-full px-4 py-1.5 text-[0.8125rem] font-medium transition-colors duration-400 ${
                    active ? 'text-amber' : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  {l.label}
                  {active && (
                    <span className="absolute inset-x-3 -bottom-px h-px bg-amber" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* right cluster */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* locale switcher */}
            <div className="hidden items-center rounded-full border border-hairline bg-panel/60 p-0.5 backdrop-blur-md sm:flex">
              {locales.map((loc) => (
                <Link
                  key={loc}
                  href={localePath(loc)}
                  className={`rounded-full px-2.5 py-1 font-mono text-[0.6rem] font-medium tracking-[0.1em] transition-colors duration-300 ${
                    loc === locale ? 'bg-amber text-void' : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  {localeNames[loc]}
                </Link>
              ))}
            </div>

            {/* CTA — desktop */}
            <div className="hidden md:block">
              <Button href={`/${locale}/contact`} variant="primary" withArrow={false} className="px-5 py-2 text-[0.75rem]">
                {nav.cta}
              </Button>
            </div>

            {/* hamburger — mobile */}
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? nav.closeLabel : nav.menuLabel}
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-hairline bg-panel/70 backdrop-blur-md md:hidden"
            >
              <span
                className={`absolute h-px w-4 bg-ink transition-all duration-500 ease-settle ${
                  menuOpen ? 'rotate-45 translate-y-0' : '-translate-y-[3px]'
                }`}
              />
              <span
                className={`absolute h-px w-4 bg-ink transition-all duration-500 ease-settle ${
                  menuOpen ? '-rotate-45 translate-y-0' : 'translate-y-[3px]'
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* -------------------- full-screen overlay menu -------------------- */}
      <div
        className={`fixed inset-0 z-30 flex flex-col justify-end transition-all duration-700 ease-settle md:hidden ${
          menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        style={{ background: 'rgba(8,9,10,0.88)', backdropFilter: 'blur(24px)' }}
        aria-hidden={!menuOpen}
      >
        <div className="flex flex-col px-6 pb-16 pt-28">
          {nav.links.map((l, i) => {
            const active = isActive(l.href);
            return (
              <div key={l.href} className="overflow-hidden">
                <Link
                  href={`/${locale}${l.href}`}
                  className={`block border-b border-hairline/60 py-5 font-sans text-3xl font-semibold tracking-tight transition-transform duration-700 ease-reveal ${
                    active ? 'text-amber' : 'text-ink'
                  }`}
                  style={{
                    transform: menuOpen ? 'translateY(0)' : 'translateY(110%)',
                    transitionDelay: menuOpen ? `${120 + i * 80}ms` : '0ms',
                  }}
                  tabIndex={menuOpen ? 0 : -1}
                >
                  {l.label}
                </Link>
              </div>
            );
          })}

          <div
            className="mt-8 overflow-hidden"
          >
            <div
              className="transition-transform duration-700 ease-reveal"
              style={{
                transform: menuOpen ? 'translateY(0)' : 'translateY(110%)',
                transitionDelay: menuOpen ? `${120 + nav.links.length * 80}ms` : '0ms',
              }}
            >
              <Button href={`/${locale}/contact`} variant="primary" className="w-full" withArrow tabIndex={menuOpen ? 0 : -1}>
                {nav.cta}
              </Button>
            </div>
          </div>

          {/* locale row */}
          <div
            className="mt-8 flex items-center justify-center gap-2"
            style={{
              opacity: menuOpen ? 1 : 0,
              transition: `opacity 0.5s ease ${menuOpen ? '400ms' : '0ms'}`,
            }}
          >
            {locales.map((loc) => (
              <Link
                key={loc}
                href={localePath(loc)}
                className={`rounded-full px-4 py-2 font-mono text-[0.65rem] font-medium tracking-[0.12em] ${
                  loc === locale ? 'bg-amber text-void' : 'border border-hairline text-ink-muted'
                }`}
                tabIndex={menuOpen ? 0 : -1}
              >
                {localeNames[loc]}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
