'use client';

/**
 * Footer — giant cropped wordmark band. Hairline rule, editorial serif,
 * site map and contact links, location note, copyright.
 */

import Link from 'next/link';
import Reveal from './Reveal';

export default function Footer({ footer, locale, nav }) {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-hairline/70" aria-label="Site footer">
      {/* tagline + columns */}
      <div className="mx-auto max-w-content px-5 pb-16 pt-20 md:px-10 lg:px-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="mb-4 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-[9px] border border-hairline bg-card">
                <img src="/favicon.svg" alt="" width="32" height="32" className="h-full w-full object-cover" />
              </span>
              <span className="font-sans text-[0.8125rem] font-semibold tracking-[0.06em] text-ink">RAHMET LABS</span>
            </p>
            <p className="max-w-[40ch] text-[0.95rem] leading-relaxed text-ink-muted">{footer.tagline}</p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <p className="mb-5 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-ink-faint">{footer.mapLabel}</p>
            <ul className="space-y-2.5">
              {nav.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={`/${locale}${l.href}`}
                    className="text-[0.92rem] text-ink-muted transition-colors hover:text-signal"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={`/${locale}/contact`} className="text-[0.92rem] text-ink-muted transition-colors hover:text-signal">
                  {nav.cta}
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 md:col-start-10">
            <p className="mb-5 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-ink-faint">{footer.contactLabel}</p>
            <ul className="space-y-2.5">
              <li>
                <a href="https://wa.me/77088413062" target="_blank" rel="noopener noreferrer" className="text-[0.92rem] text-ink-muted transition-colors hover:text-signal">
                  WhatsApp — +7 708 841 3062
                </a>
              </li>
              <li>
                <a href="https://t.me/RahmetLabs" target="_blank" rel="noopener noreferrer" className="text-[0.92rem] text-ink-muted transition-colors hover:text-signal">
                  Telegram — @RahmetLabs
                </a>
              </li>
              <li>
                <a href="mailto:rahmetlabs@gmail.com" className="text-[0.92rem] text-ink-muted transition-colors hover:text-signal">
                  rahmetlabs@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* cropped wordmark band */}
      <div className="overflow-hidden border-t border-hairline/60" aria-hidden="true">
        <div className="mx-auto max-w-content px-5 md:px-10 lg:px-16">
          <Reveal variant="fade">
            <div
              className="select-none whitespace-nowrap font-serif italic leading-[0.78]"
              style={{
                fontSize: 'clamp(4.5rem, 14.5vw, 13rem)',
                fontWeight: 500,
                transform: 'translateY(18%)',
                color: 'transparent',
                WebkitTextStroke: '1px #CFC8B6',
              }}
            >
              Rahmet Labs
            </div>
          </Reveal>
        </div>
      </div>

      <div className="border-t border-hairline/60">
        <div className="mx-auto flex max-w-content flex-wrap items-center justify-between gap-3 px-5 py-5 md:px-10 lg:px-16">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.12em] text-ink-faint">
            {footer.locationNote}
          </p>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.12em] text-ink-faint">
            © {year} {footer.copyrightSuffix}
          </p>
        </div>
      </div>
    </footer>
  );
}
