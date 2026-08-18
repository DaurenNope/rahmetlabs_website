import type { Dictionary } from '@/lib/content';
import Reveal from './Reveal';

/* static side-by-side comparison — no state, no toggles, nothing that can hide.
   the argument is made by the layout itself: manual left, system right */
export default function Comparison({ t }: { t: Dictionary }) {
  const c = t.comparison;

  return (
    <section className="section comparison" id="comparison">
      <div className="wrap">
        <Reveal className="sec-head" once>
          <h2>{c.heading}</h2>
          <p className="sec-sub">{c.subheading}</p>
        </Reveal>

              <Reveal className="cmp-board" once>
                {/* shet-oyu interlock watermark — ambient CSS sway, never interactive */}
                <svg className="cmp-ghost" viewBox="0 0 200 200" fill="none" aria-hidden="true">
                  <circle cx="72" cy="100" r="56" strokeWidth="2.5" />
                  <circle cx="128" cy="100" r="56" strokeWidth="2.5" />
                  <circle cx="72" cy="100" r="18" strokeWidth="2.5" />
                  <circle cx="128" cy="100" r="18" strokeWidth="2.5" />
                </svg>
                <div className="cmp-head2">
                  <div className="cmp-hcol man">
                    <span className="cmp-hcol-lbl mono">{c.seriesManual}</span>
                    <span className="cmp-hcol-num">{c.resolutionManual}</span>
                  </div>
                  <div className="cmp-vs" aria-hidden="true">
                    <span className="cmp-vs-line" />
                    <span className="cmp-vs-arrow mono">→</span>
                  </div>
                  <div className="cmp-hcol aut">
                    <span className="cmp-hcol-lbl mono">{c.seriesAuto}</span>
                    <span className="cmp-hcol-num">{c.resolutionAuto}</span>
                  </div>
                </div>

          <div className="cmp-table">
            {c.beats.map((b, i) => (
              <div key={b.title} className="cmp-row">
                <span className="cmp-row-idx mono">0{i + 1}</span>
                <span className="cmp-title">{b.title}</span>
                <span className="cmp-cell col-man">{b.manual}</span>
                <span className="cmp-cell col-aut">{b.auto}</span>
              </div>
            ))}
          </div>
          <p className="cmp-note mono">
            {c.resolutionLabel} · {c.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
