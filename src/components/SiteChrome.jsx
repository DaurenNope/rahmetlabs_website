'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { locales, localeNames } from '../lib/locales';

function stripLocale(pathname, locale) {
  if (pathname === `/${locale}`) return '/';
  if (pathname.startsWith(`/${locale}/`)) return pathname.slice(locale.length + 1);
  return pathname;
}

export default function SiteChrome({ locale, nav }) {
  const pathname = usePathname();
  const restPath = stripLocale(pathname, locale);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [menuOpen]);

  const isActive = (href) => (href === '/' ? restPath === '/' : restPath.startsWith(href));

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 h-[68px] border-b border-hairline bg-void">
        <div className="mx-auto flex h-full max-w-content items-center justify-between px-6 lg:px-10">
          <Link href={`/${locale}`} className="flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-amber" />
            <span className="text-sm font-semibold tracking-wide text-ink">{nav.wordmark}</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {nav.functions.map((fn) => {
              const active = isActive(fn.href);
              return (
                <Link
                  key={fn.href}
                  href={`/${locale}${fn.href}`}
                  className={`text-sm font-medium tracking-wide transition-colors ${
                    active ? 'text-amber' : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  {fn.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3 sm:gap-5">
            <div className="hidden items-center border border-hairline sm:flex">
              {locales.map((loc) => (
                <Link
                  key={loc}
                  href={`/${loc}${restPath === '/' ? '' : restPath}`}
                  className={`px-2.5 py-1.5 text-xs font-medium transition-colors ${
                    loc === locale ? 'bg-amber text-void' : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  {localeNames[loc]}
                </Link>
              ))}
            </div>
            <Link
              href={`/${locale}${nav.start.href}`}
              className="hidden bg-amber px-5 py-2.5 text-sm font-semibold text-void transition-colors hover:bg-ink sm:block"
            >
              {nav.start.label}
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 border border-hairline md:hidden"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? nav.closeLabel : nav.menuLabel}
            >
              <span className={`h-px w-4 bg-ink transition-transform ${menuOpen ? 'translate-y-[3.5px] rotate-45' : ''}`} />
              <span className={`h-px w-4 bg-ink transition-transform ${menuOpen ? '-translate-y-[3.5px] -rotate-45' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-30 bg-void transition-opacity duration-300 md:hidden ${
          menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="flex h-full flex-col justify-center gap-1 px-6">
          {nav.functions.map((fn) => {
            const active = isActive(fn.href);
            return (
              <Link
                key={fn.href}
                href={`/${locale}${fn.href}`}
                className={`border-b border-hairline py-4 text-2xl font-semibold tracking-tight ${
                  active ? 'text-amber' : 'text-ink'
                }`}
              >
                {fn.label}
              </Link>
            );
          })}
          <Link
            href={`/${locale}${nav.start.href}`}
            className="mt-6 flex items-center justify-center bg-amber py-4 text-sm font-semibold text-void"
          >
            {nav.start.label}
          </Link>
          <div className="mt-6 flex items-center justify-center gap-2">
            {locales.map((loc) => (
              <Link
                key={loc}
                href={`/${loc}${restPath === '/' ? '' : restPath}`}
                className={`px-3 py-1.5 text-xs font-medium ${loc === locale ? 'bg-amber text-void' : 'border border-hairline text-ink-muted'}`}
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
