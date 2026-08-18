import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/lib/content';

export default function Footer({ t, locale }: { t: Dictionary; locale: Locale }) {
  const labelFor = (href: string, fallback: string) =>
    t.nav.links.find((l) => l.href === href)?.label ?? fallback;
  const siteLinks = [
    { href: `/${locale}/products`, label: labelFor('/products', 'Products') },
    { href: `/${locale}/services`, label: labelFor('/services', 'Services') },
    { href: `/${locale}/portfolio`, label: labelFor('/portfolio', 'Work') },
    { href: `/${locale}/about`, label: labelFor('/about', 'About') },
    { href: `/${locale}/contact`, label: t.contact.kicker },
  ];

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <svg viewBox="0 0 20 20" aria-hidden="true" className="footer-mark">
            <path
              d="M2 2 H18 V18 H6 V6 H14 V14 H10 V10"
              fill="none"
              stroke="#D93A1E"
              strokeWidth="2.4"
              strokeLinecap="square"
            />
          </svg>
          <p className="footer-tagline">{t.footer.tagline}</p>
        </div>
        <nav className="footer-col" aria-label="Site">
          <span className="footer-lbl mono">{t.footer.mapLabel}</span>
          {siteLinks.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="footer-col">
          <span className="footer-lbl mono">{t.footer.contactLabel}</span>
          {t.contact.channels.map((ch) => (
            <a key={ch.id} href={ch.href} target="_blank" rel="noopener">
              {ch.label}
            </a>
          ))}
        </div>
      </div>
      <div className="footer-base mono">
        <span>© 2026 {t.footer.copyrightSuffix}</span>
        <span>{t.footer.locationNote}</span>
        {/* dev cache-bust marker: rendered per request, proves the page is fresh */}
        {process.env.NODE_ENV !== 'production' ? (
          <span className="footer-sync">
            SYNC{' '}
            {new Date().toLocaleTimeString('en-GB', {
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
            })}
          </span>
        ) : null}
      </div>
    </footer>
  );
}
