import TerminalPanel, { Kicker } from './TerminalPanel';
import Reveal from './Reveal';

export default function Process({ process }) {
  return (
    <TerminalPanel>
      <div className="py-16 lg:py-24">
        <Reveal className="max-w-xl">
          <Kicker>{process.kicker}</Kicker>
          <h2 className="text-headline text-ink">{process.heading}</h2>
          <p className="mt-4 text-ink-muted">{process.subheading}</p>
        </Reveal>

        <div className="relative mt-14">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-hairline lg:left-[23px]" aria-hidden />
          {process.steps.map((step, i) => (
            <Reveal key={step.code} delay={i * 90} className="relative pb-14 pl-14 last:pb-0 lg:pl-16">
              <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center border border-hairline bg-void font-data text-sm text-ink transition-colors group-hover:border-amber lg:h-12 lg:w-12">
                {step.code}
              </span>
              <h3 className="text-xl font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 max-w-2xl text-sm text-ink-muted sm:text-base">{step.detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </TerminalPanel>
  );
}
