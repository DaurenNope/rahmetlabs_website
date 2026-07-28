import TerminalPanel, { Kicker } from './TerminalPanel';
import Button from './Button';
import Reveal from './Reveal';
import { IconAutomation, IconAI, IconWeb, IconMobile, IconBackend, IconWeb3 } from './Icons';

const ICONS = [IconAutomation, IconAI, IconWeb, IconMobile, IconBackend, IconWeb3];

function num(code) {
  return code.replace(/^[A-Z]+0*/, '').padStart(2, '0');
}

export default function Services({ locale, services, full = false }) {
  return (
    <TerminalPanel>
      <div className="py-16 lg:py-24">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <Kicker>{services.kicker}</Kicker>
            {full ? (
              <h1 className="text-display text-balance text-ink">{services.heading}</h1>
            ) : (
              <h2 className="text-headline text-ink">{services.heading}</h2>
            )}
            <p className="mt-4 text-lg text-ink-muted">{services.subheading}</p>
          </div>
          {!full ? (
            <Button href={`/${locale}/services`} variant="ghost" size="sm" className="shrink-0">
              {services.ctaLabel}
            </Button>
          ) : null}
        </Reveal>

        <div className="mt-10 border-t border-hairline">
          {services.functions.map((fn, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={fn.code} delay={Math.min(i, 5) * 60}>
                <div className="group grid grid-cols-1 gap-5 border-b border-hairline py-8 transition-colors hover:bg-panel/60 sm:grid-cols-[64px_1fr] sm:gap-6 lg:grid-cols-[64px_56px_220px_1fr] lg:items-start">
                  <span className="font-data text-sm text-ink-faint transition-colors group-hover:text-amber">{num(fn.code)}</span>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-hairline text-ink transition-colors group-hover:border-amber group-hover:text-amber">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-xl font-semibold text-ink lg:pt-2">{fn.title}</h3>
                  <div>
                    <p className="text-sm text-ink-muted sm:text-base">{fn.description}</p>
                    {full ? (
                      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                        {fn.capabilities.map((cap) => (
                          <li key={cap} className="flex gap-2 text-sm text-ink-muted">
                            <span className="text-amber">—</span>
                            {cap}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {full ? (
          <Reveal className="mt-20">
            <h3 className="text-headline text-ink">{services.engagementHeading}</h3>
            <p className="mt-3 max-w-2xl text-ink-muted">{services.engagementSubheading}</p>
            <div className="mt-8 grid gap-px border border-hairline bg-hairline sm:grid-cols-3">
              {services.engagements.map((plan) => (
                <div key={plan.title} className="bg-void p-7 transition-colors hover:bg-panel">
                  <span className="label text-amber">{plan.title}</span>
                  <p className="mt-3 text-sm text-ink-muted">{plan.description}</p>
                  <p className="mt-4 border-t border-hairline pt-3 text-xs text-ink-faint">{plan.bestFor}</p>
                </div>
              ))}
            </div>
          </Reveal>
        ) : null}

        {full ? (
          <Reveal className="mt-20">
            <h3 className="text-headline text-ink">{services.faqHeading}</h3>
            <div className="mt-6 border-t border-hairline">
              {services.faq.map((item) => (
                <div key={item.q} className="border-b border-hairline py-5">
                  <p className="font-semibold text-ink">{item.q}</p>
                  <p className="mt-2 text-sm text-ink-muted">{item.a}</p>
                </div>
              ))}
            </div>
          </Reveal>
        ) : null}
      </div>
    </TerminalPanel>
  );
}
