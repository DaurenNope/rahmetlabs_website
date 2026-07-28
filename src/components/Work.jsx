import TerminalPanel, { Kicker } from './TerminalPanel';
import StatusDot from './StatusDot';
import Button from './Button';
import Reveal from './Reveal';

function num(code) {
  return code.replace(/^[A-Z]+-?0*/, '').padStart(2, '0');
}

export default function Work({ locale, work, items, full = false }) {
  const positions = items || work.positions;

  return (
    <TerminalPanel>
      <div className="py-16 lg:py-24">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <Kicker>{work.kicker}</Kicker>
            {full ? (
              <h1 className="text-display text-balance text-ink">{work.heading}</h1>
            ) : (
              <h2 className="text-headline text-ink">{work.heading}</h2>
            )}
            <p className="mt-4 text-lg text-ink-muted">{work.subheading}</p>
          </div>
          {!full ? (
            <Button href={`/${locale}/portfolio`} variant="ghost" size="sm" className="shrink-0">
              {work.viewLabel}
            </Button>
          ) : null}
        </Reveal>

        <div className="mt-10 border-t border-hairline">
          {positions.map((pos, i) => (
            <Reveal key={pos.code} delay={Math.min(i, 6) * 50}>
            <div className="group grid grid-cols-1 gap-4 border-b border-hairline py-7 transition-colors hover:bg-panel/60 lg:grid-cols-[64px_1fr_auto]">
              <span className="font-data text-sm text-ink-faint transition-colors group-hover:text-amber">{num(pos.code)}</span>
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-semibold text-ink">{pos.title}</h3>
                  <span className="label text-ink-faint">{pos.type}</span>
                </div>
                <p className="mt-2 max-w-2xl text-sm text-ink-muted sm:text-base">{pos.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {pos.tech.map((t) => (
                    <span key={t} className="font-data text-xs text-ink-faint">
                      #{t.toLowerCase().replace(/\s+/g, '-')}
                    </span>
                  ))}
                </div>
                {pos.links ? (
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
                    {pos.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-sm text-amber underline decoration-amber/40 underline-offset-4 hover:decoration-amber"
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
              <div className="flex items-start gap-2 lg:justify-end">
                {pos.status === 'live' ? <StatusDot /> : <span className="h-1.5 w-1.5 rounded-full border border-ink-faint" />}
                <span className={`label ${pos.status === 'live' ? 'text-amber' : 'text-ink-faint'}`}>
                  {pos.status === 'live' ? work.statusLive : work.statusShipped}
                </span>
              </div>
            </div>
            </Reveal>
          ))}
        </div>

        {full ? (
          <Reveal className="mt-16 flex flex-col items-start gap-6 border border-hairline p-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-lg text-ink">{work.contactPrompt}</p>
            <Button href={`/${locale}/contact`} className="shrink-0">
              {work.contactCta}
            </Button>
          </Reveal>
        ) : null}
      </div>
    </TerminalPanel>
  );
}
