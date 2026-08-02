'use client';

/**
 * ManualVsSystem — the one place color argues.
 * Red chaotic line vs blue settling line, plotted on a notebook sheet across
 * a week of a support inbox.
 * inbox. Illustrative model — labeled as such, no fake client metrics.
 */

import Reveal from './Reveal';

/* Generate deterministic demo series once */
function manualSeries() {
  const pts = [8];
  for (let i = 1; i <= 11; i++) {
    const wobble = Math.sin(i * 2.3) * 5 + Math.sin(i * 0.8) * 3;
    pts.push(Math.max(4, Math.min(46, 10 + i * 2.6 + wobble)));
  }
  return pts;
}
function autoSeries() {
  const pts = [10];
  for (let i = 1; i <= 11; i++) {
    const settle = Math.pow(0.72, i) * 26;
    pts.push(Math.max(1.5, 2 + settle + Math.sin(i * 1.7) * 0.6));
  }
  return pts;
}

const M = manualSeries();
const A = autoSeries();

function toPath(series, w, h, pad) {
  const max = 50;
  const stepX = (w - pad * 2) / (series.length - 1);
  return series
    .map((v, i) => {
      const x = pad + i * stepX;
      const y = h - pad - (v / max) * (h - pad * 2);
      return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(' ');
}

export default function ManualVsSystem({ comparison }) {
  const W = 920;
  const H = 380;
  const PAD = 34;
  const manualPath = toPath(M, W, H, PAD);
  const autoPath = toPath(A, W, H, PAD);

  return (
    <section className="relative border-t border-hairline/70 py-28 md:py-40" aria-labelledby="comparison-heading">
      <div className="mx-auto max-w-content px-5 md:px-10 lg:px-16">
        <Reveal variant="fade" className="mb-14 max-w-[720px]">
          <p className="kicker mb-6">{comparison.kicker}</p>
          <h2 id="comparison-heading" className="mb-5 text-headline font-bold text-ink">
            {comparison.heading}
          </h2>
          <p className="text-[1.05rem] leading-relaxed text-ink-muted">{comparison.subheading}</p>
        </Reveal>

        {/* ------------------------------- chart panel ------------------------------- */}
        <Reveal variant="rise" className="ltr chart-wrap thread-wrap" stagger={0}>
          <div className="rounded-panel border border-hairline bg-card p-5 md:p-9">
            {/* legend */}
            <div className="mb-8 flex flex-wrap items-center gap-x-8 gap-y-3">
              <span className="flex items-center gap-2.5 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-ink-muted">
                <span className="h-[3px] w-6 bg-manual" aria-hidden="true" />
                {comparison.seriesManual}
              </span>
              <span className="flex items-center gap-2.5 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-ink-muted">
                <span className="h-[3px] w-6 bg-signal" aria-hidden="true" />
                {comparison.seriesAuto}
              </span>
              <span className="ml-auto font-mono text-[0.62rem] uppercase tracking-[0.14em] text-ink-faint">
                {comparison.note}
              </span>
            </div>

            <div className="relative">
              <svg
                viewBox={`0 0 ${W} ${H}`}
                className="h-auto w-full"
                role="img"
                aria-label={`${comparison.seriesManual}: ${comparison.resolutionManual} ${comparison.resolutionLabel}; ${comparison.seriesAuto}: ${comparison.resolutionAuto}`}
              >
                {/* grid */}
                {[0.2, 0.4, 0.6, 0.8].map((f) => (
                  <line key={f} x1={PAD} x2={W - PAD} y1={H * f} y2={H * f} className="chart-grid" />
                ))}

                {/* soft fill under auto line */}
                <path
                  d={`${autoPath} L ${W - PAD},${H - PAD} L ${PAD},${H - PAD} Z`}
                  fill="rgba(43,75,215,0.055)"
                  className="chart-fill"
                />

                {/* lines */}
                <path d={manualPath} className="chart-line chart-line-manual" />
                <path d={autoPath} className="chart-line chart-line-auto" />

                {/* end dots */}
                <circle cx={W - PAD} cy={H - PAD - (M[M.length - 1] / 50) * (H - PAD * 2)} r="5" fill="#BF4632" className="chart-dot" style={{ transitionDelay: '2.1s' }} />
                <circle cx={W - PAD} cy={H - PAD - (A[A.length - 1] / 50) * (H - PAD * 2)} r="5" fill="#2B4BD7" className="chart-dot" style={{ transitionDelay: '2.4s' }} />
              </svg>

              {/* terminal annotations */}
              <div className="pointer-events-none absolute right-1 top-2 text-right md:right-4 md:top-6">
                <div className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-manual">
                  {comparison.resolutionManual}
                </div>
                <div className="font-mono text-[0.58rem] uppercase tracking-[0.12em] text-ink-faint">
                  {comparison.resolutionLabel}
                </div>
              </div>
              <div className="pointer-events-none absolute bottom-6 right-1 text-right md:bottom-10 md:right-4">
                <div className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-signal">
                  {comparison.resolutionAuto}
                </div>
                <div className="font-mono text-[0.58rem] uppercase tracking-[0.12em] text-ink-faint">
                  {comparison.resolutionLabel}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ------------------------------- beats table ------------------------------- */}
        <Reveal variant="fade" className="mt-10 overflow-hidden rounded-panel border border-hairline">
          <div className="hidden grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_minmax(0,1fr)] border-b border-hairline bg-card px-6 py-3.5 md:grid">
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-ink-faint" />
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-manual">{comparison.seriesManual}</span>
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-signal">{comparison.seriesAuto}</span>
          </div>
          <div className="ltr-stagger">
            {comparison.beats.map((b) => (
              <div
                key={b.title}
                className="grid grid-cols-1 gap-2 border-b border-hairline/60 bg-paper px-6 py-5 last:border-b-0 transition-colors duration-500 hover:bg-card md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_minmax(0,1fr)] md:gap-6 md:py-6"
              >
                <div className="font-sans text-[0.95rem] font-semibold text-ink md:text-[1.02rem]">
                  {b.title}
                </div>
                <div className="text-[0.92rem] leading-relaxed text-ink-muted md:border-l md:border-manual/20 md:pl-5">
                  <span className="mr-2 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-manual md:hidden">{comparison.seriesManual} —</span>
                  {b.manual}
                </div>
                <div className="text-[0.92rem] leading-relaxed text-ink md:border-l md:border-signal/25 md:pl-5">
                  <span className="mr-2 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-signal md:hidden">{comparison.seriesAuto} —</span>
                  {b.auto}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
