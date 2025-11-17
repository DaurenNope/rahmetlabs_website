'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const heroScenes = {
  manual: {
    badge: 'MANUAL OPS — CRITICAL LOAD',
    label: 'What burning teams feel',
    headline: 'Manual heroics hide the cracks, nothing is synced, nothing is observable.',
    description:
      'Teams power through outages with copy/paste and pagers. Finance waits for consensus spreadsheets while customers churn on stalled support queues.',
    playbook: [
      { title: 'Bottleneck', detail: 'Ops leaders chase signals across CRM, ERP, support, and spreadsheets.' },
      { title: 'Rahmet entrypoint', detail: 'Instrument telemetry, map manual loops, surface the ugliest outages.' },
      { title: 'First win', detail: 'Automate the repetitive grind so teams reclaim 40+ hours per week.' },
    ],
    metrics: [
      { label: 'Tickets waiting', value: '187', hint: 'Support backlog', tone: 'bad' },
      { label: 'Ops burn / month', value: '$12K', hint: 'Contractor overtime', tone: 'bad' },
      { label: 'Response time', value: '24h', hint: 'Escalations answered', tone: 'bad' },
    ],
    pains: [
      { title: 'CRM → ERP sync', detail: 'CSV export stuck at 73% for 4h' },
      { title: 'Finance roll-up', detail: '8 spreadsheets in approval limbo' },
      { title: 'Support queue', detail: '120 tickets waiting on humans' },
      { title: 'Compliance audit', detail: 'Zero breadcrumb trail, high risk' },
    ],
    log: [
      { time: '02:07', message: 'Finance ping: “Need weekly roll-up.”', tone: 'bad' },
      { time: '02:09', message: 'Support escalated 45 stuck tickets.', tone: 'bad' },
      { time: '02:15', message: 'Ops lead paging engineers on Slack.', tone: 'bad' },
    ],
  },
  autonomous: {
    badge: 'AUTONOMOUS OPS — STABLE SIGNAL',
    label: 'What transformed ops feel',
    headline: 'Every system streams truth in real time. People just steer outcomes.',
    description:
      'Playbooks trigger on their own, finance closes in hours, and every alert routes to an autonomous responder before anyone has to ask.',
    playbook: [
      { title: 'Orchestration', detail: 'Every signal flows into one control plane with embedded guardrails.' },
      { title: 'Rahmet pattern', detail: 'AI agents route, sync, and brief every team in real time.' },
      { title: 'Momentum', detail: 'Leaders steer outcomes because ops run on autopilot.' },
    ],
    metrics: [
      { label: 'Tickets waiting', value: '0', hint: 'Auto-triaged', tone: 'good' },
      { label: 'Ops burn / month', value: '-$8K', hint: 'No overtime spend', tone: 'good' },
      { label: 'Response time', value: '45s', hint: 'Signals resolved', tone: 'good' },
    ],
    pains: [
      { title: 'Signals fused', detail: 'CRM ↔ ERP ↔ billing streaming live' },
      { title: 'Finance ops', detail: 'Close in 4 hours, not 4 days' },
      { title: 'Support intelligence', detail: 'AI resolves 92% of tickets' },
      { title: 'Compliance trail', detail: 'Every action auto-logged' },
    ],
    log: [
      { time: '09:15', message: 'AI resolved subscription churn playbook.', tone: 'good' },
      { time: '09:26', message: 'Ledger sync verified in 42 seconds.', tone: 'good' },
      { time: '09:39', message: 'Executive dashboard auto-updated.', tone: 'good' },
    ],
  },
};

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
  const scene = heroScenes[mode];
  const palette = paletteMap[mode];

  useEffect(() => {
    const timer = setTimeout(() => {
      setMode((prev) => (prev === 'manual' ? 'autonomous' : 'manual'));
    }, 6500);
    return () => clearTimeout(timer);
  }, [mode]);

  useEffect(() => {
    setActivePain(0);
    setActiveLog(0);
  }, [mode]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePain((prev) => (prev + 1) % scene.pains.length);
      setActiveLog((prev) => (prev + 1) % scene.log.length);
    }, 2600);
    return () => clearInterval(interval);
  }, [scene]);

  useEffect(() => {
    if (!canvasRef.current) return;
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
  }, [palette.accent, palette.accentSoft]);

const brandHeadline = ['Rahmet', 'Labs'];

  return (
    <section className="relative overflow-hidden bg-black text-white py-16 sm:py-20">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none mix-blend-screen">
        <div className="absolute -top-20 -left-10 w-80 h-80 rounded-full blur-3xl opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(248,113,113,0.4), transparent)' }} />
        <div className="absolute top-10 right-0 w-96 h-96 rounded-full blur-[120px] opacity-35"
          style={{ background: 'radial-gradient(circle, rgba(52,211,153,0.4), transparent)' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 space-y-12">
        <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
          {['manual', 'autonomous'].map((key) => (
            <button
              key={key}
              onClick={() => setMode(key)}
              className={`px-5 py-2 rounded-full text-xs tracking-[0.35em] uppercase transition-all w-full sm:w-auto text-center ${
                mode === key ? 'bg-white text-black' : 'border border-white/20 text-white/60'
              }`}
            >
              {key === 'manual' ? 'Manual Ops' : 'Autonomous Mode'}
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
                    className="text-[clamp(2.8rem,11vw,9rem)] font-black leading-[0.85] tracking-[-0.04em] text-white"
                  >
                    {line}
                  </div>
                ))}
                <p className="text-base md:text-xl text-white/75 mt-4">
                  We build what you need, automate what you hate. Full-stack development + intelligent automation.
                </p>
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
                  <p className="text-[0.6rem] uppercase tracking-[0.8em] text-white/60">{scene.badge}</p>
                  <p className="text-[0.6rem] uppercase tracking-[0.6em] text-white/40">
                    {mode === 'manual' ? 'Chaos detected' : 'Autonomy engaged'}
                  </p>
                </div>
                <div className="space-y-4 text-white/70">
                  <p className="text-sm uppercase tracking-[0.4em] text-white/45">{scene.label}</p>
                  <p className="text-lg font-semibold text-white/85">{scene.headline}</p>
                  <p className="text-sm text-white/60 max-w-2xl">{scene.description}</p>
                <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                    {['Automation', 'AI Ops', 'Web3', 'Design', 'GTM'].map((tag) => (
                      <motion.span
                        key={tag}
                        whileHover={{ y: -2, scale: 1.02 }}
                        className="px-4 py-2 rounded-full text-xs tracking-[0.3em] uppercase border border-white/10"
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {scene.pains.map((pain, index) => (
                    <motion.div
                      key={pain.title}
                      animate={{ opacity: activePain === index ? 1 : 0.3, y: activePain === index ? 0 : 4 }}
                      transition={{ duration: 0.4 }}
                      className="p-4 rounded-2xl border border-white/10 bg-white/[0.02]"
                    >
                      <p className="text-sm font-semibold text-white/80">{pain.title}</p>
                      <p className="text-sm text-white/60">{pain.detail}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex flex-col sm:flex-row flex-wrap items-center gap-6">
              <motion.div
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="#contact"
                  className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full overflow-hidden w-full sm:w-auto justify-center"
                >
                  <div className="absolute inset-0 bg-white" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-rose-500 via-rose-400 to-emerald-400 mix-blend-screen" />
                  <span className="relative z-10 text-black font-bold tracking-[0.2em] uppercase text-sm whitespace-nowrap">
                    Start automation
                  </span>
                  <ArrowRight className="relative z-10 w-5 h-5 text-black transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ x: 4 }}
                className="flex items-center"
              >
                <Link
                  href="#portfolio"
                  className="group inline-flex items-center gap-2 text-white/60 hover:text-white transition-all duration-300 text-sm uppercase tracking-[0.3em] whitespace-nowrap"
                >
                  <span>View proof</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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
                  <p className="text-xs uppercase tracking-[0.35em] text-white/50">Ops snapshot</p>
                  <div className="flex items-center gap-2 text-[0.55rem] uppercase tracking-[0.4em]">
                    <span className={mode === 'manual' ? 'text-white' : 'text-white/40'}>Manual</span>
                    <span className="text-white/30">/</span>
                    <span className={mode === 'autonomous' ? 'text-white' : 'text-white/40'}>Auto</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
                <p className="text-xs uppercase tracking-[0.35em] text-white/50">Ops feed</p>
                <p className={`text-xs font-semibold ${mode === 'manual' ? 'text-rose-300' : 'text-emerald-300'}`}>
                  {mode === 'manual' ? 'Escalations' : 'Autonomous stream'}
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
              <p className="text-xs uppercase tracking-[0.35em] text-white/50">Rahmet playbook</p>
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

