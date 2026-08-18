import type { Dictionary } from '@/lib/content';
import Reveal from './Reveal';

/* stage glyphs from the motif system: observe (shanyrak eye), plan (ilmek spiral),
   ship (tumar point), sustain (shet-oyu interlock) */
const GLYPHS = [
  <svg key="g1" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="2.4" fill="currentColor" />
  </svg>,
  <svg key="g2" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 4 H20 V20 H8 V8 H16 V16 H12 V12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" />
  </svg>,
  <svg key="g3" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 3.5 L21 20 H3 Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <circle cx="12" cy="14.5" r="1.8" fill="currentColor" />
  </svg>,
  <svg key="g4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="8.2" cy="12" r="4.6" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="15.8" cy="12" r="4.6" stroke="currentColor" strokeWidth="1.8" />
  </svg>,
];

/* duration bars drawn to scale against the 12-week envelope */
const BARS = ['12%', '12%', '64%', '20%'];

/* four steps on one rail — no scroll coupling, no state: every stage is always
   fully visible, hover is pure CSS */
export default function Process({ t }: { t: Dictionary }) {
  const p = t.process;

  return (
    <section className="section process" id="process">
      <div className="wrap">
        <Reveal className="sec-head" once>
          <h2>{p.heading}</h2>
          <p className="sec-sub">{p.subheading}</p>
        </Reveal>

        <div className="proc-rail" aria-hidden="true">
          {p.stages.map((s, i) => (
            <span
              key={s.code}
              className="proc-rail-dot"
              style={{ left: `${2 + (i / (p.stages.length - 1)) * 96}%`, animationDelay: `${i * 0.7}s` }}
            />
          ))}
        </div>

        <div className="proc-grid">
                {p.stages.map((s, i) => (
                  <Reveal
                    key={s.code}
                    className={`proc-step${i === 2 ? ' key' : ''}`}
                    style={{ transitionDelay: `${i * 70}ms` }}
                    data-n={s.code}
                    once
                  >
                    <div className="proc-step-top mono">
                <span className="proc-code">{s.code}</span>
                <span className="proc-glyph">{GLYPHS[i]}</span>
                <span className="proc-dur">{s.duration}</span>
              </div>
              <h3 className="proc-title">{s.title}</h3>
              <p className="proc-desc">{s.description}</p>
              <div className="proc-bar" aria-hidden="true">
                <span className={`proc-bar-fill${i === 2 ? ' build' : ''}${i === 3 ? ' ongoing' : ''}`} style={{ width: BARS[i] }} />
              </div>
              <p className="proc-out mono">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M1 6 L5 10 L11 2" stroke="currentColor" strokeWidth="1.6" />
                </svg>
                {s.output}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
