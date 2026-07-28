import Button from './Button';
import TerminalPanel, { Kicker } from './TerminalPanel';
import Reveal from './Reveal';

export default function About({ locale, about }) {
  return (
    <>
      <TerminalPanel>
        <Reveal className="py-16 lg:py-24">
          <Kicker>{about.kicker}</Kicker>
          <h1 className="text-display max-w-3xl text-balance text-ink">{about.heroHeading}</h1>
          <p className="mt-6 max-w-2xl text-balance text-lg text-ink-muted">{about.heroSubheading}</p>
        </Reveal>
      </TerminalPanel>

      <TerminalPanel>
        <div className="py-16 lg:py-20">
          <Reveal className="max-w-xl">
            <h2 className="text-headline text-ink">{about.teamHeading}</h2>
            <p className="mt-4 text-ink-muted">{about.teamIntro}</p>
          </Reveal>
          <div className="mt-10 border-t border-hairline">
            {about.team.map((member, i) => (
              <Reveal key={member.name} delay={i * 90}>
                <div className="grid grid-cols-1 gap-2 border-b border-hairline py-7 transition-colors hover:bg-panel/60 lg:grid-cols-[280px_1fr] lg:gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-ink">{member.name}</h3>
                    <p className="label mt-1 text-amber">{member.role}</p>
                  </div>
                  <p className="max-w-2xl text-ink-muted">{member.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </TerminalPanel>

      <TerminalPanel>
        <div className="py-16 lg:py-20">
          <Reveal>
            <h2 className="text-headline text-ink">{about.principlesHeading}</h2>
          </Reveal>
          <div className="mt-10 grid gap-px border border-hairline bg-hairline sm:grid-cols-2">
            {about.principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <div className="h-full bg-void p-7 transition-colors hover:bg-panel lg:p-9">
                  <span className="font-data text-sm text-ink-faint">0{i + 1}</span>
                  <h3 className="mt-3 text-xl font-semibold text-ink">{p.title}</h3>
                  <p className="mt-2 text-ink-muted">{p.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </TerminalPanel>

      <TerminalPanel>
        <Reveal className="py-16 lg:py-20">
          <h2 className="text-headline text-ink">{about.toolkitHeading}</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {about.toolkit.map((tool) => (
              <span key={tool} className="font-data border border-hairline px-3 py-1.5 text-xs text-ink-muted transition-colors hover:border-amber hover:text-amber">
                {tool}
              </span>
            ))}
          </div>
        </Reveal>
      </TerminalPanel>

      <TerminalPanel>
        <Reveal className="flex flex-col gap-8 py-16 lg:flex-row lg:items-center lg:justify-between lg:py-24">
          <div className="max-w-xl">
            <h2 className="text-headline text-ink">{about.ctaHeading}</h2>
            <p className="mt-4 text-ink-muted">{about.ctaSubheading}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href={`/${locale}/contact`}>{about.ctaPrimary}</Button>
            <Button href={`/${locale}/portfolio`} variant="ghost" arrow={false}>
              {about.ctaSecondary}
            </Button>
          </div>
        </Reveal>
      </TerminalPanel>
    </>
  );
}
