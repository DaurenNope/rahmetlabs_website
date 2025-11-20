'use client';

import { motion, useInView } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

const heroAccent = ['rgba(248,113,113,0.35)', 'rgba(52,211,153,0.25)'];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { dictionary } = useLanguage();
  const preview = dictionary.portfolioPreview;
  const heroProjectsFallback = preview.cards.slice(0, 2);
  const heroProjectsFiltered = preview.cards.filter((card) => ['unhireable', 'beyond'].includes(card.id));
  const heroProjects = heroProjectsFiltered.length ? heroProjectsFiltered : heroProjectsFallback;
  const gridProjects = preview.cards.filter((card) => !heroProjects.map((proj) => proj.id).includes(card.id));

  return (
    <section id="portfolio" ref={ref} className="relative overflow-hidden bg-black text-white py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-10">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none mix-blend-screen">
        <motion.div
          animate={{
            opacity: [0.15, 0.25, 0.15],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 14, repeat: Infinity }}
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-[150px]"
          style={{ background: 'radial-gradient(circle, rgba(248,113,113,0.2), transparent)' }}
        />
        <motion.div
          animate={{
            opacity: [0.15, 0.25, 0.15],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 16, repeat: Infinity, delay: 2 }}
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[130px]"
          style={{ background: 'radial-gradient(circle, rgba(52,211,153,0.2), transparent)' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          <div className="text-center space-y-4">
          <p className="text-[0.55rem] uppercase tracking-[0.7em] text-white/50">{preview.label}</p>
            <h2
              className="text-[clamp(2rem,6vw,4rem)] font-black tracking-[-0.03em]"
              style={{ fontFamily: 'var(--font-syne), sans-serif' }}
            >
            {preview.heading}
          </h2>
            <p className="text-white/70 max-w-2xl mx-auto">{preview.subheading}</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {heroProjects.map((project, heroIdx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: heroIdx * 0.1 }}
                className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] border border-white/10 bg-gradient-to-br from-white/[0.08] via-white/[0.02] to-transparent p-6 sm:p-8 flex flex-col gap-6"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                  <div className="space-y-2">
                    <p className="text-[0.65rem] uppercase tracking-[0.4em] text-white/50">{project.tag}</p>
                    <h3
                      className="text-2xl sm:text-3xl font-black text-white"
                      style={{ fontFamily: 'var(--font-syne), sans-serif' }}
                    >
                      {project.title}
                    </h3>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 sm:px-4 py-2 text-[0.55rem] uppercase tracking-[0.35em] text-white/60 w-full sm:w-auto justify-center">
                    {preview.hero}
                    <span className="w-1 h-1 rounded-full bg-white/30" />
                    {project.tag}
                  </div>
                </div>
                <p className="text-white/75 text-base leading-relaxed">{project.note}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {(project.focus && project.focus.length ? project.focus : ['Design system', 'Interactions']).map((pill) => (
                    <div key={pill} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <p className="text-[0.55rem] uppercase tracking-[0.35em] text-white/40 mb-2">{preview.focus}</p>
                      <p className="text-sm text-white/80">{pill}</p>
                    </div>
                  ))}
                </div>
                <a
                  href={project.link || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-[0.75rem] sm:text-sm uppercase tracking-[0.16em] sm:tracking-[0.3em] text-white/80 hover:text-white transition-colors"
                >
                  {preview.viewProject}
                  <ArrowRight className="w-4 h-4" />
                </a>
                <div
                  className="absolute inset-0 pointer-events-none opacity-60"
                  style={{ background: `radial-gradient(circle at top right, ${heroAccent[heroIdx % heroAccent.length]}, transparent)` }}
                />
        </motion.div>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {gridProjects.map((project, index) => (
            <motion.div
              key={project.title}
                initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 space-y-3"
            >
                <div className="flex items-center justify-between">
                  <p className="text-[0.55rem] uppercase tracking-[0.4em] text-white/50">{project.tag}</p>
                  <ExternalLink className="w-4 h-4 text-white/40" />
                </div>
                <h4 className="text-xl font-semibold text-white" style={{ fontFamily: 'var(--font-syne), sans-serif' }}>
                {project.title}
                </h4>
              <p className="text-sm text-white/65">{project.note}</p>
                <div className="pt-3 text-[0.75rem] sm:text-sm uppercase tracking-[0.18em] sm:tracking-[0.3em] text-white/50 flex items-center justify-between">
                  <span>{preview.cta}</span>
                  <ArrowRight className="w-4 h-4 text-white/60" />
                </div>
            </motion.div>
          ))}
        </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-[24px] sm:rounded-[28px] border border-white/10 bg-gradient-to-r from-white/[0.05] to-transparent px-5 sm:px-6 py-5 flex flex-col sm:flex-row flex-wrap items-center justify-between gap-4 text-center sm:text-left"
          >
            <div>
              <p className="text-[0.55rem] uppercase tracking-[0.4em] text-white/50">{preview.label}</p>
              <p className="text-sm text-white/70">{preview.footerText}</p>
            </div>
          <Link href="/portfolio">
            <motion.button
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 rounded-full border border-white/30 px-5 sm:px-6 py-3 text-[0.78rem] sm:text-sm uppercase tracking-[0.16em] sm:tracking-[0.3em] text-white"
            >
              {preview.cta}
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
