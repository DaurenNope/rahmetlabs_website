'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useIsMobile } from '../hooks/useMediaQuery';

const toneMap = {
  good: 'text-emerald-300',
  bad: 'text-rose-400',
};

const paletteMap = {
  manual: {
    accent: '#f87171',
    accentSoft: 'rgba(248,113,113,0.35)',
  },
  autonomous: {
    accent: '#34d399',
    accentSoft: 'rgba(52,211,153,0.35)',
  },
};

export default function Hero() {
  const canvasRef = useRef(null);
  const [mode, setMode] = useState('manual');
  const [activePain, setActivePain] = useState(0);
  const [activeLog, setActiveLog] = useState(0);
  const { dictionary } = useLanguage();
  const heroCopy = dictionary.hero;
  const scene = heroCopy.scenes[mode];
  const palette = paletteMap[mode];
  const brandHeadline = ['Rahmet', 'Labs'];
  const chipLabels = heroCopy.chips;
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();
  const enableCanvas = !prefersReducedMotion && !isMobile;

  useEffect(() => {
    const delay = isMobile ? 9000 : 6500;
    const timer = setTimeout(() => {
      setMode((prev) => (prev === 'manual' ? 'autonomous' : 'manual'));
    }, delay);
    return () => clearTimeout(timer);
  }, [mode, isMobile]);

  useEffect(() => {
    setActivePain(0);
    setActiveLog(0);
  }, [mode, scene]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePain((prev) => (prev + 1) % scene.pains.length);
      setActiveLog((prev) => (prev + 1) % scene.log.length);
    }, isMobile ? 4000 : 2600);
    return () => clearInterval(interval);
  }, [scene, isMobile]);

  useEffect(() => {
    if (!enableCanvas || !canvasRef.current) return undefined;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const setCanvasSize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    const gradientStops = [
      { color: 'rgba(5,7,17,0.95)', pos: 0 },
      { color: 'rgba(8,13,29,0.92)', pos: 0.4 },
      { color: palette.accentSoft, pos: 0.9 },
    ];

    let frame;
    const render = (time = 0) => {
      const { width, height } = canvas.getBoundingClientRect();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      const dpr = window.devicePixelRatio || 1;
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      const bg = ctx.createLinearGradient(0, 0, width, height);
      gradientStops.forEach((stop) => bg.addColorStop(stop.pos, stop.color));
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < 4; i += 1) {
        ctx.strokeStyle = i === 0 ? 'rgba(255,255,255,0.12)' : `rgba(255,255,255,${0.08 - i * 0.015})`;
        ctx.lineWidth = 1 + i * 0.4;
        ctx.beginPath();
        const amplitude = 30 + i * 12;
        const speed = 0.0002 + i * 0.00008;
        for (let x = 0; x <= width; x += 16) {
          const y =
            height / 2 +
            Math.sin(x * 0.002 + time * speed + i) * amplitude +
            Math.cos(x * 0.0025 + time * 0.00012) * 18;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      frame = requestAnimationFrame(render);
    };

    setCanvasSize();
    render();
    window.addEventListener('resize', setCanvasSize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', setCanvasSize);
    };
  }, [palette.accent, palette.accentSoft, enableCanvas]);

  return (
    <section className="relative overflow-hidden bg-black text-white py-14 sm:py-20">
      {enableCanvas && <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-80" />}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none mix-blend-screen hidden md:block">
        <div className="absolute -top-20 -left-10 w-80 h-80 rounded-full blur-3xl opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(248,113,113,0.4), transparent)' }} />
        <div className="absolute top-10 right-0 w-96 h-96 rounded-full blur-[120px] opacity-35"
          style={{ background: 'radial-gradient(circle, rgba(52,211,153,0.4), transparent)' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 space-y-10 md:space-y-12">
        <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
          {['manual', 'autonomous'].map((key) => (
            <button
              key={key}
              onClick={() => setMode(key)}
              className={`px-5 py-2 rounded-full text-xs tracking-[0.35em] uppercase transition-all w-full sm:w-auto text-center ${
                mode === key ? 'bg-white text-black' : 'border border-white/20 text-white/60'
              }`}
            >
              {heroCopy.modeLabels[key]}
            </button>
          ))}
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] items-start">
          <div className="space-y-10">
            <div className="space-y-5">
              <div className="text-center sm:text-left">
                {brandHeadline.map((line) => (
                  <div
                    key={line}
                    className="text-[clamp(2.4rem,11vw,8.5rem)] font-black leading-[0.9] tracking-[-0.04em] text-white"
                  >
                    {line}
                  </div>
                ))}
                <p className="text-base md:text-xl text-white/75 mt-4">{heroCopy.brandTagline}</p>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={`scene-${mode}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <p className="text-[0.6rem] uppercase tracking-[0.5em] sm:tracking-[0.8em] text-white/60">{scene.badge}</p>
                  <p className="text-[0.6rem] uppercase tracking-[0.4em] sm:tracking-[0.6em] text-white/40">
                    {heroCopy.sceneStatus[mode]}
                  </p>
                </div>
                <div className="space-y-4 text-white/70">
                  <p className="text-[0.65rem] uppercase tracking-[0.25em] sm:tracking-[0.4em] text-white/45">
                    {scene.label}
                  </p>
                  <p className="text-lg font-semibold text-white/85">{scene.headline}</p>
                  <p className="text-sm text-white/60 max-w-2xl">{scene.description}</p>
                <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                    {chipLabels.map((tag) => (
                      <motion.span
                        key={tag}
                        whileHover={{ y: -2, scale: 1.02 }}
                        className="px-4 py-2 rounded-full text-[0.6rem] tracking-[0.2em] sm:tracking-[0.3em] uppercase border border-white/10"
                        style={{
                          background:
                            mode === 'manual'
                              ? 'linear-gradient(130deg, rgba(248,113,113,0.25), rgba(255,255,255,0.08))'
                              : 'linear-gradient(130deg, rgba(52,211,153,0.25), rgba(255,255,255,0.08))',
                          color: 'rgba(255,255,255,0.9)',
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div
                  className={`gap-4 ${
                    isMobile
                      ? 'grid grid-flow-col auto-cols-[78%] overflow-x-auto snap-x snap-mandatory pb-2 -mx-4 px-4 no-scrollbar'
                      : 'grid grid-cols-1 sm:grid-cols-2'
                  }`}
                >
                  {scene.pains.map((pain, index) => (
                    <motion.div
                      key={pain.title}
                      animate={{ opacity: activePain === index ? 1 : 0.3, y: activePain === index ? 0 : 4 }}
                      transition={{ duration: 0.4 }}
                      className={`p-4 rounded-2xl border border-white/10 bg-white/[0.02] ${
                        isMobile ? 'min-h-[140px] snap-center' : ''
                      }`}
                    >
                      <p className="text-sm font-semibold text-white/80">{pain.title}</p>
                      <p className="text-sm text-white/60">{pain.detail}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex flex-col lg:flex-row flex-wrap items-stretch lg:items-center gap-4 sm:gap-6 w-full">
              <motion.div
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full lg:flex-1"
              >
                <Link
                  href="/contact"
                  className="group relative flex flex-col sm:flex-row sm:items-center gap-3 px-6 sm:px-10 py-4 rounded-full overflow-hidden w-full text-center sm:text-left"
                >
                  <div className="absolute inset-0 bg-white" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-rose-500 via-rose-400 to-emerald-400 mix-blend-screen" />
                  <span className="relative z-10 text-black font-bold tracking-[0.2em] uppercase text-xs sm:text-sm leading-snug">
                    {heroCopy.highlightCta}
                  </span>
                  <ArrowRight className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 text-black transition-transform group-hover:translate-x-1 flex-shrink-0 self-center sm:self-auto" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ x: 4 }}
                className="flex w-full lg:w-auto"
              >
                <Link
                  href="/portfolio"
                  className="group flex flex-col sm:flex-row sm:items-center gap-2 text-white/60 hover:text-white transition-all duration-300 text-xs sm:text-sm uppercase tracking-[0.3em] w-full justify-center sm:justify-start text-center sm:text-left leading-snug"
                >
                  <span>{heroCopy.highlightSecondary}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 flex-shrink-0 self-center sm:self-auto" />
                </Link>
              </motion.div>
            </div>
          </div>

          <div className="space-y-6 w-full">
            <AnimatePresence mode="wait">
                <motion.div
                key={`snapshot-${mode}`}
                initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-3xl border bg-white/[0.05] space-y-5 w-full"
                style={{
                  borderColor: palette.accentSoft,
                  boxShadow: `0 20px 60px ${palette.accentSoft}`,
                  background: 'linear-gradient(130deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
                }}
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.35em] text-white/50">{heroCopy.panels.snapshotLabel}</p>
                  <div className="flex items-center gap-2 text-[0.55rem] uppercase tracking-[0.4em]">
                    <span className={mode === 'manual' ? 'text-white' : 'text-white/40'}>
                      {heroCopy.panels.switchLabels.manual}
                    </span>
                    <span className="text-white/30">/</span>
                    <span className={mode === 'autonomous' ? 'text-white' : 'text-white/40'}>
                      {heroCopy.panels.switchLabels.autonomous}
                    </span>
                  </div>
                </div>
                <div
                  className={`gap-6 ${
                    isMobile
                      ? 'grid grid-flow-col auto-cols-[70%] overflow-x-auto snap-x snap-mandatory pb-2 -mx-4 px-4 no-scrollbar'
                      : 'grid grid-cols-1 sm:grid-cols-3'
                  }`}
                >
                  {scene.metrics.map((metric) => (
                    <div key={metric.label} className="space-y-1">
                      <p className={`text-2xl font-semibold ${toneMap[metric.tone]}`}>{metric.value}</p>
                      <p className="text-xs uppercase tracking-[0.3em] text-white/40">{metric.label}</p>
                      <p className="text-xs text-white/50">{metric.hint}</p>
                    </div>
                  ))}
                </div>
                </motion.div>
            </AnimatePresence>

            <motion.div
              key={`log-${mode}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-3xl border bg-white/[0.03] space-y-4 w-full"
              style={{
                borderColor: 'rgba(255,255,255,0.08)',
              }}
            >
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.35em] text-white/50">{heroCopy.panels.feedLabel}</p>
                <p className={`text-xs font-semibold ${mode === 'manual' ? 'text-rose-300' : 'text-emerald-300'}`}>
                  {heroCopy.panels.feedStatus[mode]}
                </p>
              </div>
              <div className="space-y-2">
                {scene.log.map((entry, index) => (
                  <motion.div
                    key={`${entry.time}-${entry.message}`}
                    animate={{ opacity: activeLog === index ? 1 : 0.4, x: activeLog === index ? 0 : 6 }}
                    transition={{ duration: 0.4 }}
                    className="flex items-center justify-between text-sm text-white/70"
                  >
                    <span className="text-xs text-white/40">{entry.time}</span>
                    <span className={`${toneMap[entry.tone]} text-right flex-1 ml-4`}>{entry.message}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              key={`playbook-${mode}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-3xl border bg-white/[0.03] space-y-4 w-full"
              style={{ borderColor: 'rgba(255,255,255,0.08)' }}
            >
              <p className="text-xs uppercase tracking-[0.35em] text-white/50">{heroCopy.panels.playbookLabel}</p>
              <div className="space-y-3">
                {scene.playbook.map((step, index) => (
                  <div key={step.title} className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/40">{`0${index + 1}`}</p>
                    <p className="text-sm font-semibold text-white/80">{step.title}</p>
                    <p className="text-sm text-white/60">{step.detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

