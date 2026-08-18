import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/lib/content';
import Reveal from './Reveal';
import WorkLedger from './WorkLedger';

export default function Work({ t, locale }: { t: Dictionary; locale: Locale }) {
  const w = t.work;

  return (
    <section className="section work" id="work">
      <div className="wrap">
        <Reveal className="sec-head">
          <h2>{w.heading}</h2>
          <p className="sec-sub">{w.subheading}</p>
        </Reveal>
        <WorkLedger positions={w.positions.slice(0, 3)} statusLive={w.statusLive} statusShipped={w.statusShipped} privateNote={w.privateNote} />
        <Reveal>
          <Link href={`/${locale}/portfolio`} className="work-more">
            <span className="mono">{w.fullLedger}</span>
            <span className="arrow" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 14 L14 2 M5 2 h9 v9" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
