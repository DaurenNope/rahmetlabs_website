import type { Dictionary } from '@/lib/content';
import Reveal from './Reveal';

export default function Thread({ t }: { t: Dictionary }) {
  return (
    <section className="section thread" id="thread">
      <div className="wrap">
        <div className="chapters">
          {t.thread.chapters.map((ch) => (
            <Reveal key={ch.key} className="chapter">
              <span className="chapter-num mono">{ch.key}</span>
              <h3 className="chapter-title">{ch.title}</h3>
              <div className="chapter-body">
                <p className="chapter-lead">{ch.lead}</p>
                <span className="chapter-detail mono">{ch.detail}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
