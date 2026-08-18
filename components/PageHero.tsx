import Reveal from './Reveal';

const MOTIFS: Record<string, React.ReactNode> = {
  eye: (
    <>
      <circle cx="260" cy="260" r="230" />
      <circle cx="260" cy="260" r="150" />
      <path d="M260 30 V490 M30 260 H490" />
      <circle cx="260" cy="260" r="34" />
    </>
  ),
  tumar: (
    <>
      <path d="M260 60 L470 420 H50 Z" />
      <path d="M260 140 L398 372 H122 Z" />
      <circle cx="260" cy="300" r="26" />
      <path d="M120 460 h280" />
    </>
  ),
  spiral: <path d="M60 60 H460 V460 H120 V120 H400 V400 H180 V180 H340 V340 H240 V240 H300 V300" />,
  seam: <path d="M20 180 H180 V60 H60 V120 H120 M20 340 H180 V460 H60 V400 H120 M260 180 H460 V60 H340 V120 H400 M260 340 H460 V460 H340 V400 H400 M200 260 H320" />,
  signal: (
    <>
      <circle cx="150" cy="370" r="20" />
      <path d="M220 330 a160 160 0 0 1 80 120 M300 250 a280 280 0 0 1 160 200 M380 170 a400 400 0 0 1 240 280" />
      <circle cx="150" cy="370" r="6" />
    </>
  ),
};

export default function PageHero({
  title,
  sub,
  kicker,
  motif = 'eye',
  ink = false,
  meta,
  children,
}: {
  title: string;
  sub: string;
  kicker?: string;
  motif?: keyof typeof MOTIFS;
  ink?: boolean;
  meta?: string;
  children?: React.ReactNode;
}) {
  return (
    <header className={`page-hero${ink ? ' page-hero-ink' : ''}`}>
      <svg className="page-hero-ghost" viewBox="0 0 520 520" fill="none" aria-hidden="true">
        {MOTIFS[motif]}
      </svg>
      <div className="wrap">
        <Reveal>
          {kicker ? <p className="page-kicker mono">{kicker}</p> : null}
          <h1>{title}</h1>
          <p className="page-sub">{sub}</p>
          {children}
        </Reveal>
      </div>
      {meta ? <span className="page-hero-meta mono" aria-hidden="true">{meta}</span> : null}
    </header>
  );
}
