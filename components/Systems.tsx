import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/lib/content';
import Reveal from './Reveal';

function Emblem({ index }: { index: number }) {
  const common = {
    fill: 'none' as const,
    pathLength: 1,
    className: 'draw',
  };
  const acc = { fill: 'none' as const, pathLength: 1, className: 'draw acc' };
  const emblems = [
    // automation (N): tort kulak — the horn spiral, the loop that runs itself
    <g key="0">
      <path
        {...common}
        d="M38 60 C18 56 10 40 16 26 C22 12 42 8 54 18 C64 27 62 44 50 50 C40 55 28 48 28 38 C28 30 36 25 43 29 C49 32 49 41 43 43"
      />
      <path {...acc} d="M38 60 C44 62 52 61 58 56" />
    </g>,
    // ai (E): the shanyrak eye — the crown's center that reads everything
    // circles are written as arc paths: Chrome fills dash-animated <circle> solid
    <g key="1">
      <path {...common} d="M14 38 A24 24 0 1 0 62 38 A24 24 0 1 0 14 38" />
      <path d="M38 14 V26 M38 50 V62 M14 38 H26 M50 38 H62" {...common} />
      <path {...acc} d="M31 38 A7 7 0 1 0 45 38 A7 7 0 1 0 31 38" />
    </g>,
    // product (S): tumar — the amulet the client actually touches
    <g key="2">
      <path {...common} d="M14 16 H62 V44 L38 66 L14 44 Z" />
      <path {...acc} d="M26 30 H50 M38 30 V46" />
    </g>,
    // backend (W): ilmek — the square spiral, the ledger that holds
    <g key="3">
      <path {...common} d="M14 14 H62 V62 H24 V24 H52 V52 H33 V33 H45" />
      <path {...acc} d="M41 42 A4 4 0 1 0 49 42 A4 4 0 1 0 41 42" />
    </g>,
  ];
  return (
    <svg className="emblem" viewBox="0 0 76 76" aria-hidden="true">
      {emblems[index % emblems.length]}
    </svg>
  );
}

export default function Systems({ t, locale }: { t: Dictionary; locale: Locale }) {
  const w = t.whatWeBuild;
  const plates = w.categories.slice(0, 4);

  return (
    <section className="section systems" id="systems">
      <div className="wrap">
        <Reveal className="sec-head">
          <h2>{w.headingHome}</h2>
          <p className="sec-sub">{w.subheadingHome}</p>
        </Reveal>
        <div className="sys-grid">
          {plates.map((c, i) => (
            <Reveal key={c.id} className="sys-cell">
              <Link href={`/${locale}/services`} className="sys-link" aria-label={c.title}>
                <span className="sys-ghost" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <div className="sys-stamp">
                  <Emblem index={i} />
                </div>
                <span className="tag mono">{c.problemTag}</span>
                <h3>{c.title}</h3>
                <p className="sys-problem">{c.problem}</p>
                <div className="sys-fix">
                  <span className="lbl mono">{c.solutionLabel}</span>
                  <p>{c.solution}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
