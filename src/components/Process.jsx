'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, Palette, Code2, Headphones } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const iconMap = {
  Search,
  Palette,
  Code2,
  Headphones,
};

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { dictionary } = useLanguage();
  const processCopy = dictionary.process;
  const milestoneLabels = processCopy.milestones || [];

  return (
    <section ref={ref} className="relative overflow-hidden bg-black text-white py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-10">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none mix-blend-screen hidden md:block">
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

      <div className="relative z-10 max-w-6xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4"
        >
          <p className="text-[0.55rem] uppercase tracking-[0.7em] text-white/60">{processCopy.label}</p>
          <h2 className="text-[clamp(2.2rem,7vw,4.5rem)] font-black tracking-[-0.03em]">{processCopy.heading}</h2>
          <p className="text-white/60 max-w-2xl mx-auto">{processCopy.subheading}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative overflow-hidden rounded-[44px] border border-white/10 bg-gradient-to-br from-white/[0.02] via-white/[0.03] to-white/[0.08] p-6 md:p-10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent)] opacity-60 pointer-events-none" />
              <div className="relative space-y-12 sm:space-y-16">
            {processCopy.steps.map((step, index) => {
              const Icon = iconMap[step.icon] ?? Search;
              const [phaseLabel, durationLabel] = step.subtitle.split('/').map((part) => part?.trim() || '');
                  const milestone = milestoneLabels?.[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative grid gap-8 md:grid-cols-[250px,1fr] items-start"
                >
                  <div className="relative flex flex-col gap-5">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="flex items-center justify-center w-14 h-14 rounded-full border border-white/40 bg-black/40 text-sm font-semibold text-white/90">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                        {index !== processCopy.steps.length - 1 && (
                          <motion.span
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
                            className="hidden md:block absolute left-1/2 top-full origin-top h-12 w-px -translate-x-1/2 bg-gradient-to-b from-white/40 to-transparent"
                          />
                        )}
                      </div>
                      <motion.div
                        whileHover={{ rotate: 2, scale: 1.02 }}
                        className={`p-3 rounded-2xl bg-gradient-to-br ${step.accent.replace('0.15', '0.35')} border border-white/10`}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </motion.div>
                    </div>
                    <div className="space-y-3">
                      <p className="text-xs uppercase tracking-[0.35em] text-white/45">{phaseLabel}</p>
                      {durationLabel && <p className="text-sm text-white/60">{durationLabel}</p>}
                          {milestone && (
                            <div className="space-y-1">
                              <p className="text-[0.6rem] uppercase tracking-[0.35em] text-white/40">{milestone.title}</p>
                              <p className="text-xs text-white/55">{milestone.hint}</p>
                            </div>
                          )}
                    </div>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-black/30 p-6 md:p-8 backdrop-blur-sm" style={{ boxShadow: `0 16px 45px ${step.accent}` }}>
                    <div className="space-y-4">
                      <h3 className="text-2xl md:text-3xl font-semibold text-white" style={{ fontFamily: 'var(--font-syne), sans-serif' }}>
                        {step.title}
                      </h3>
                      <p className="text-sm text-white/70 leading-relaxed">{step.output}</p>
                    </div>
                    <div className="mt-8 pt-4 border-t border-white/10 text-xs text-white/70 font-mono flex items-center justify-between">
                      <span>
                        <span className="text-white/35">$</span> {step.command}
                      </span>
                      {durationLabel && <span className="text-white/40">{durationLabel}</span>}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
