import type { Dictionary } from '@/lib/content';
import Reveal from './Reveal';

export default function Principles({ t }: { t: Dictionary }) {
  const p = t.principles;

  return (
    <section className="section principles" id="principles">
      <div className="wrap">
        <Reveal className="sec-head">
          <h2>{p.heading}</h2>
          <p className="sec-sub">{p.subheading}</p>
        </Reveal>
        <div className="principles-grid">
          {p.points.map((pt, i) => (
            <Reveal key={i} className="principle">
              <span className="principle-idx mono">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="principle-title">{pt.title}</h3>
              <p className="principle-detail">{pt.detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
