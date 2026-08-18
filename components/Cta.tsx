import type { Dictionary } from '@/lib/content';
import Reveal from './Reveal';
import CtaConsole from './CtaConsole';
import GhostParallax from './GhostParallax';

export default function Cta({ t }: { t: Dictionary }) {
  const c = t.cta;
  const whatsapp = t.contact.channels.find((ch) => ch.id === 'whatsapp')?.href ?? '#';

  return (
    <div className="cta-band on-red" id="contact">
      <GhostParallax>
        <svg className="ghost cta-ring" viewBox="0 0 720 720" fill="none" aria-hidden="true">
          <circle cx="360" cy="360" r="330" />
          <circle cx="360" cy="360" r="300" />
          <path d="M60 330 H660 M60 390 H660 M330 60 V660 M390 60 V660" />
          <path d="M120 330 L330 120 M600 330 L390 120 M120 390 L330 600 M600 390 L390 600" />
        </svg>
      </GhostParallax>
      <div className="wrap">
        <Reveal className="cta-inner">
          <p className="cta-micro mono">{c.consoleLabel}</p>
          <h2 className="cta-title">
            {c.heading.split(' ').map((w, i) => (
              /* the space must live OUTSIDE the inline-block span — a trailing
                 space inside an inline-block is collapsed at the box edge */
              <span key={i}>
                <span className="cta-w" style={{ transitionDelay: `${i * 45}ms` }}>
                  {w}
                </span>{' '}
              </span>
            ))}
            <span className="cta-accent">{c.headingAccent}</span>
          </h2>
          <CtaConsole
            placeholder={c.consolePlaceholder}
            examples={c.consoleExamples}
            send={c.consoleSend}
            whatsapp={whatsapp}
          />
          <div className="cta-links mono">
            {t.contact.channels.map((ch) => (
              <a key={ch.id} className="cta-link" href={ch.href} target="_blank" rel="noopener">
                {ch.label}
                <svg width="11" height="11" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M2 14 L14 2 M5 2 h9 v9" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
