'use client';

/**
 * Hero — "The Thread"
 * Pinned 250vh chapter. A canvas thread draws through three states as the user
 * scrolls: chaotic scribble (manual) → searching waves → one clean rising line
 * (system). Headlines swap per phase. Single canvas, rAF-gated on visibility.
 */

import { useEffect, useRef, useState } from 'react';
import Button from './Button';

const AMBER = [232, 163, 61];
const INK = [244, 241, 234];
const FAINT = [95, 94, 86];

const clamp01 = (v) => Math.min(1, Math.max(0, v));
const lerp = (a, b, t) => a + (b - a) * t;
const smooth = (t) => t * t * (3 - 2 * t);

export default function Hero({ locale, hero }) {
  const rootRef = useRef(null);
  const canvasRef = useRef(null);
  const progressRef = useRef(0);
  const [phase, setPhase] = useState(0);
  const [reduced, setReduced] = useState(false);

  /* ---------------- scroll progress (scrub) ---------------- */
  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReduced(isReduced);
    if (isReduced) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const el = rootRef.current;
        if (el) {
          const rect = el.getBoundingClientRect();
          const total = el.offsetHeight - window.innerHeight;
          progressRef.current = clamp01(-rect.top / Math.max(1, total));
          const p = progressRef.current;
          const next = p < 0.38 ? 0 : p < 0.78 ? 1 : 2;
          setPhase((prev) => (prev === next ? prev : next));
        }
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  /* ---------------- canvas thread ---------------- */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf = 0;
    let running = true;
    let visible = true;
    const start = performance.now();

    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
    io.observe(canvas);
    const onVis = () => { running = document.visibilityState === 'visible'; };
    document.addEventListener('visibilitychange', onVis);

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = (now) => {
      raf = requestAnimationFrame(draw);
      if (!running || !visible) return;

      const t = (now - start) * 0.001;
      const W = canvas.width;
      const H = canvas.height;
      const p = reduced ? 1 : progressRef.current;

      ctx.clearRect(0, 0, W, H);

      /* faint dot grid — atmospheric depth layer */
      const gridGap = Math.max(34, W / 44);
      const gridFade = lerp(0.05, 0.018, smooth(Math.min(1, p * 2)));
      ctx.fillStyle = `rgba(${INK[0]},${INK[1]},${INK[2]},${gridFade})`;
      for (let gx = gridGap / 2; gx < W; gx += gridGap) {
        for (let gy = gridGap / 2; gy < H; gy += gridGap * 0.9) {
          ctx.fillRect(gx, gy, 1, 1);
        }
      }

      /* ---- phase weights ---- */
      const e1 = smooth(clamp01((p - 0.3) / 0.4)); // chaos → waves
      const e2 = smooth(clamp01((p - 0.72) / 0.24)); // waves → clean line

      const N = 140;
      const yBase = H * 0.52;
      const pts = [];

      for (let i = 0; i <= N; i++) {
        const x = (i / N) * W;
        const u = i / N;

        /* chaotic scribble */
        const chaosAmp = H * 0.30;
        const chaos =
          Math.sin(u * 21 + t * 1.9) *
            Math.sin(u * 13.7 - t * 1.3) *
            Math.sin(u * 5.3 + t * 0.7) +
          Math.sin(u * 47 + t * 3.1) * 0.35;
        const yChaos = yBase + chaos * chaosAmp;

        /* searching waves */
        const waveAmp = H * (0.09 + 0.05 * Math.sin(t * 0.4));
        const yWave =
          yBase +
          Math.sin(u * 4.2 + t * 0.9) * waveAmp +
          Math.sin(u * 9.1 + t * 1.4) * waveAmp * 0.4;

        /* clean rising line */
        const yClean = H * 0.74 - u * H * 0.34 + Math.sin(u * 2.2 + t * 0.5) * H * 0.012;

        let y = lerp(yChaos, yWave, e1);
        y = lerp(y, yClean, e2);
        pts.push([x, y, u]);
      }

      /* thread shadow pass — wide, faint amber */
      ctx.beginPath();
      pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
      ctx.strokeStyle = `rgba(${AMBER[0]},${AMBER[1]},${AMBER[2]},${0.05 + e2 * 0.10})`;
      ctx.lineWidth = 7 + e2 * 5;
      ctx.lineJoin = 'round';
      ctx.stroke();

      /* main thread */
      ctx.beginPath();
      pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
      ctx.strokeStyle = `rgba(${AMBER[0]},${AMBER[1]},${AMBER[2]},${0.5 + e2 * 0.5})`;
      ctx.lineWidth = 1.6 + e2 * 0.9;
      ctx.stroke();

      /* hanging nodes in chaos phase — detach as order arrives */
      if (e1 < 1) {
        const nodes = 7;
        for (let n = 0; n < nodes; n++) {
          const u = 0.12 + (n / (nodes - 1)) * 0.76;
          const idx = Math.floor(u * N);
          const [x, y] = pts[idx];
          const yy =
            y +
            (30 + n * 12) * (1 - e1) +
            Math.sin(t * 1.2 + n * 2.4) * 14 * (1 - e1);
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x + Math.sin(t + n) * 8 * (1 - e1), yy);
          ctx.strokeStyle = `rgba(${INK[0]},${INK[1]},${INK[2]},${0.08 * (1 - e1)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(x + Math.sin(t + n) * 8 * (1 - e1), yy, 2.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${INK[0]},${INK[1]},${INK[2]},${0.16 * (1 - e1)})`;
          ctx.fill();
        }
      }

      /* gliding pulse on the clean line */
      if (e2 > 0.05) {
        const pu = (t * 0.16) % 1.3 - 0.15;
        const idx = Math.max(0, Math.min(N, Math.floor(pu * N)));
        const [px, py] = pts[idx];
        const grad = ctx.createRadialGradient(px, py, 0, px, py, 60);
        grad.addColorStop(0, `rgba(${AMBER[0]},${AMBER[1]},${AMBER[2]},${0.35 * e2})`);
        grad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = grad;
        ctx.fillRect(px - 60, py - 60, 120, 120);
        ctx.beginPath();
        ctx.arc(px, py, 3.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,236,200,${0.9 * e2})`;
        ctx.fill();
      }
    };

    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      document.removeEventListener('visibilitychange', onVis);
      window.removeEventListener('resize', resize);
    };
  }, [reduced]);

  /* ---------------- headline phases ---------------- */
  const renderLine = (parts, key) => (
    <span key={key} className="block">
      {parts}
    </span>
  );

  const headline = (() => {
    if (phase === 0 && !reduced) {
      return (
        <>
          {renderLine(hero.line1, 'a')}
          {renderLine(
            <>
              {hero.line2}{' '}
              <span className="serif-accent font-normal text-terminal">{hero.line2Accent}</span>
            </>,
            'b'
          )}
        </>
      );
    }
    return (
      <>
        {renderLine(hero.line3, 'c')}
        {renderLine(
          <>
            <span className="serif-accent font-normal text-amber">{hero.line3Accent}</span>{' '}
            {hero.line3Tail}
          </>,
          'd'
        )}
      </>
    );
  })();

  return (
    <section
      ref={rootRef}
      id="hero"
      aria-labelledby="hero-title"
      className="relative"
      style={{ height: reduced ? 'auto' : '250vh' }}
    >
      <div className={`${reduced ? 'relative' : 'sticky top-0'} flex min-h-[100dvh] items-center overflow-hidden`}>
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />

        {/* left hairline — margin rule */}
        <div className="pointer-events-none absolute inset-y-0 left-5 hidden w-px bg-hairline/50 md:left-10 md:block" aria-hidden="true" />

        <div className="relative z-10 mx-auto w-full max-w-content px-5 py-32 md:px-10 lg:px-16">
          <div className="max-w-[760px]">
            <p className="kicker mb-8">{hero.kicker}</p>

            <h1
              id="hero-title"
              className="mb-9 text-display font-bold text-ink will-change-contents"
            >
              {headline}
            </h1>

            <p className="mb-11 max-w-[54ch] text-[1.05rem] leading-[1.75] text-ink-muted">
              {hero.subheadline}
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href={`/${locale}/contact`} variant="primary">{hero.ctaPrimary}</Button>
              <Button href={`/${locale}/portfolio`} variant="ghost">{hero.ctaSecondary}</Button>
            </div>

            <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-hairline/60 pt-5">
              <span className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-ink-faint">
                {hero.supportingLabel}
              </span>
              <span className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-ink-faint">
                {hero.supportingChannels}
              </span>
            </div>
          </div>
        </div>

        {/* scroll cue */}
        {!reduced && (
          <div
            className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 transition-opacity duration-500"
            style={{ opacity: phase === 0 ? 1 : 0 }}
            aria-hidden="true"
          >
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.28em] text-ink-faint">
              {hero.scrollLabel}
            </span>
            <div className="relative h-10 w-px overflow-hidden bg-hairline">
              <div
                className="absolute inset-x-0 h-4 bg-amber"
                style={{ animation: 'hero-scroll-pulse 1.8s ease-in-out infinite' }}
              />
            </div>
            <style>{`@keyframes hero-scroll-pulse { 0%{transform:translateY(-100%)} 60%,100%{transform:translateY(260%)} }`}</style>
          </div>
        )}
      </div>
    </section>
  );
}
