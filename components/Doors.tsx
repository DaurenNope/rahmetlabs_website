import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/lib/content';
import Reveal from './Reveal';

function TumarGhost() {
  return (
    <svg className="door-ghost" viewBox="0 0 200 200" fill="none" aria-hidden="true">
      <path d="M40 30 H160 V110 L100 175 L40 110 Z" strokeWidth="3" />
      <path d="M72 66 H128 M100 66 V108" strokeWidth="3" />
    </svg>
  );
}

function ShanyrakGhost() {
  return (
    <svg className="door-ghost" viewBox="0 0 200 200" fill="none" aria-hidden="true">
      <circle cx="100" cy="100" r="72" strokeWidth="3" />
      <circle cx="100" cy="100" r="20" strokeWidth="3" />
      <path d="M100 28 V72 M100 128 V172 M28 100 H72 M128 100 H172" strokeWidth="3" />
    </svg>
  );
}

export default function Doors({ t, locale }: { t: Dictionary; locale: Locale }) {
  const d = t.doors;

  return (
    <section className="doors" id="doors" aria-label={d.aLabel}>
      <Reveal className="doors-split">
        <Link href={`/${locale}/products`} className="door door-a">
          <TumarGhost />
          <span className="door-idx mono">01</span>
          <span className="door-label">{d.aLabel}</span>
          <span className="door-text">{d.aText}</span>
          <span className="door-link mono">
            {d.aLink}
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M2 14 L14 2 M5 2 h9 v9" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </span>
        </Link>
        <Link href={`/${locale}/services`} className="door door-b">
          <ShanyrakGhost />
          <span className="door-idx mono">02</span>
          <span className="door-label">{d.bLabel}</span>
          <span className="door-text">{d.bText}</span>
          <span className="door-link mono">
            {d.bLink}
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M2 14 L14 2 M5 2 h9 v9" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </span>
        </Link>
      </Reveal>
    </section>
  );
}
