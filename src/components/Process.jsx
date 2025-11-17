'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, Palette, Code2, Headphones, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    command: 'rahmet run discovery --client=*',
    icon: Search,
    output: '✔ Requirements mapped',
    badge: 'DISCOVERY',
    description: 'We dive deep into your business needs and identify opportunities.',
    duration: '3-5 days',
    accent: 'rgba(56, 189, 248, 0.15)',
  },
  {
    command: 'rahmet design sprint --outcome=*',
    icon: Palette,
    output: '✔ Architecture created',
    badge: 'DESIGN',
    description: 'We architect solutions tailored for maximum impact.',
    duration: '1-2 weeks',
    accent: 'rgba(192, 132, 252, 0.15)',
  },
  {
    command: 'rahmet build pipeline --stack=*',
    icon: Code2,
    output: '✔ Deployment ready',
    badge: 'DEVELOPMENT',
    description: 'We build using clean code, modern tech, rigorous QA.',
    duration: '4-8 weeks',
    accent: 'rgba(52, 211, 153, 0.15)',
  },
  {
    command: 'rahmet monitor --mode=24/7',
    icon: Headphones,
    output: '✔ Continuous optimization',
    badge: 'SUPPORT',
    description: 'We keep everything running and evolving.',
    duration: 'Ongoing',
    accent: 'rgba(251, 191, 36, 0.15)',
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative overflow-hidden bg-black text-white py-32 px-4 sm:px-6 lg:px-10">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none mix-blend-screen">
        <motion.div
          animate={{
            opacity: [0.15, 0.25, 0.15],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/2 left-1/3 w-[500px] h-[500px] rounded-full blur-[140px]"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.25), transparent)' }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4"
        >
          <p className="text-[0.6rem] uppercase tracking-[0.8em] text-white/60">EXECUTION CLI</p>
          <h2
            className="text-[clamp(2.5rem,8vw,5.5rem)] font-black leading-[0.9] tracking-[-0.02em] text-white"
            style={{ fontFamily: 'var(--font-syne), sans-serif' }}
          >
            Our Process
          </h2>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mt-4" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
            Every engagement runs like a command
          </p>
        </motion.div>

        <div className="space-y-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 4, scale: 1.01 }}
                className="relative p-6 rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden font-mono"
                style={{
                  boxShadow: `0 20px 60px ${step.accent}`,
                }}
              >
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${step.accent.replace('0.15', '0.2')} border border-white/10`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-[0.5rem] uppercase tracking-[0.4em] text-white/40">{step.badge}</p>
                    </div>
                    <p className="text-xs text-white/50 uppercase tracking-[0.3em]">{step.duration}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-white/90">
                      <span className="text-white/40">$</span>
                      <span className="text-sm md:text-base">{step.command}</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span className="text-sm">{step.output}</span>
                    </div>
                  </div>

                  <p className="text-sm text-white/70 leading-relaxed pt-2 border-t border-white/10" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                    {step.description}
                  </p>
                </div>

                <div
                  className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${step.accent}, transparent)`,
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
