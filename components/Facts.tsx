import type { Dictionary } from '@/lib/content';
import Reveal from './Reveal';

/* Plain, citable statements — the AEO/GEO surface. No claims we can't back. */
export default function Facts({ t }: { t: Dictionary }) {
  const f = t.facts;
  const rows = [f.whatWeDo, f.whoFor, f.basedIn];

  return (
    <section className="facts" aria-label="Facts">
      <div className="wrap">
        <Reveal>
          <p className="facts-thesis">{f.thesis}</p>
        </Reveal>
        <div className="facts-grid">
          {rows.map((text, i) => (
            <Reveal key={i}>
              <span className="facts-lbl mono">{String(i + 1).padStart(2, '0')}</span>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
