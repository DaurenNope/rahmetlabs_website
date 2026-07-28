import TerminalPanel, { Kicker } from './TerminalPanel';
import Reveal from './Reveal';

export default function Why({ why }) {
  return (
    <TerminalPanel>
      <div className="py-16 lg:py-24">
        <Reveal className="max-w-xl">
          <Kicker>{why.kicker}</Kicker>
          <h2 className="text-headline text-ink">{why.heading}</h2>
          <p className="mt-4 text-ink-muted">{why.subheading}</p>
        </Reveal>

        <div className="mt-10 grid gap-px border border-hairline bg-hairline sm:grid-cols-2">
          {why.points.map((point, i) => (
            <Reveal key={point.title} delay={i * 90}>
              <div className="h-full bg-void p-7 transition-colors hover:bg-panel lg:p-9">
                <span className="font-data text-sm text-ink-faint">0{i + 1}</span>
                <h3 className="mt-3 text-xl font-semibold text-ink">{point.title}</h3>
                <p className="mt-2 text-ink-muted">{point.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </TerminalPanel>
  );
}
