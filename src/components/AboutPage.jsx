'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Users, Sparkles, Target, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  const { dictionary } = useLanguage();
  const about = dictionary.about;
  const { hero, team, principles, toolkit, timeline, testimonials, cta } = about;

  return (
    <main className="relative bg-black text-white min-h-screen">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black opacity-95" />
        <div
          className="absolute top-20 left-1/4 w-72 h-72 blur-[160px] opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(248,113,113,0.4), transparent)' }}
        />
        <div
          className="absolute bottom-10 right-16 w-[420px] h-[420px] blur-[190px] opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.4), transparent)' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-28 space-y-20">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          <div className="space-y-6 text-center md:text-left">
            <p className="text-[0.65rem] uppercase tracking-[0.7em] text-white/60">{hero.badge}</p>
            <h1
              className="text-[clamp(2.5rem,7vw,4.5rem)] font-black leading-[1] tracking-[-0.02em]"
              style={{ fontFamily: 'var(--font-syne), sans-serif' }}
            >
              {hero.heading}
            </h1>
            <p className="text-lg md:text-xl text-white/65 max-w-3xl">{hero.subheading}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {hero.stats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 space-y-1">
                <p className="text-3xl font-bold" style={{ fontFamily: 'var(--font-syne), sans-serif' }}>
                  {stat.value}
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">{stat.label}</p>
                <p className="text-sm text-white/60">{stat.detail}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/services" className="flex-1">
              <motion.button
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-8 py-4 text-xs font-semibold uppercase tracking-[0.3em]"
              >
                {hero.ctas.primary}
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
            <Link href="/contact" className="flex-1">
              <motion.button
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 hover:text-white transition-colors"
              >
                {hero.ctas.secondary}
                <Users className="w-4 h-4" />
              </motion.button>
            </Link>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
          transition={{ duration: 0.8 }}
          className="rounded-[32px] border border-white/10 bg-white/[0.03] p-6 sm:p-10 space-y-8"
        >
          <div className="space-y-3 text-center md:text-left">
            <p className="text-[0.6rem] uppercase tracking-[0.7em] text-white/50">{team.heading}</p>
            <h2 className="text-3xl font-semibold" style={{ fontFamily: 'var(--font-syne), sans-serif' }}>
              {team.heading}
            </h2>
            <p className="text-white/70 text-base">{team.intro}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {team.members.map((member) => (
              <div key={member.name} className="rounded-3xl border border-white/10 bg-black/40 p-5 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-white/[0.05] border border-white/10">
                    <Users className="w-5 h-5 text-white/70" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-white">{member.name}</p>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/40">{member.role}</p>
                  </div>
                </div>
                <p className="text-sm text-white/65 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={sectionVariants}
          transition={{ duration: 0.8 }}
          className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr]"
        >
          <div className="space-y-6 rounded-[32px] border border-white/10 bg-white/[0.02] p-6 sm:p-10">
            <div className="space-y-2">
              <p className="text-[0.55rem] uppercase tracking-[0.7em] text-white/50">{principles.heading}</p>
              <h3 className="text-2xl font-semibold" style={{ fontFamily: 'var(--font-syne), sans-serif' }}>
                {principles.heading}
              </h3>
            </div>
            <div className="grid gap-4">
              {principles.items.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-black/40 p-5 space-y-2">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-emerald-300" />
                    <p className="text-lg font-semibold">{item.title}</p>
                  </div>
                  <p className="text-sm text-white/65">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 rounded-[32px] border border-white/10 bg-white/[0.02] p-6 sm:p-10">
            <div className="space-y-2">
              <p className="text-[0.55rem] uppercase tracking-[0.7em] text-white/50">{toolkit.heading}</p>
              <h3 className="text-2xl font-semibold" style={{ fontFamily: 'var(--font-syne), sans-serif' }}>
                {toolkit.heading}
              </h3>
              <p className="text-sm text-white/60">{toolkit.subheading}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {toolkit.items.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full border border-white/10 text-xs uppercase tracking-[0.2em] text-white/70"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
          transition={{ duration: 0.8 }}
          className="space-y-8 rounded-[32px] border border-white/10 bg-white/[0.02] p-6 sm:p-10"
        >
          <div className="space-y-3">
            <p className="text-[0.55rem] uppercase tracking-[0.7em] text-white/50">{timeline.heading}</p>
            <h3 className="text-3xl font-semibold" style={{ fontFamily: 'var(--font-syne), sans-serif' }}>
              {timeline.heading}
            </h3>
            {timeline.subheading && <p className="text-sm text-white/60">{timeline.subheading}</p>}
          </div>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 border-l border-white/10" />
            <div className="space-y-8">
              {timeline.items.map((item, index) => (
                <div key={`${item.year}-${item.title}`} className="relative pl-10">
                  <div className="absolute left-0 top-6 w-4 h-4 rounded-full border border-white/30 bg-black">
                    <div className="m-1 h-2 w-2 rounded-full bg-emerald-300" />
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-black/40 p-6 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="text-xs uppercase tracking-[0.4em] text-white/50">{item.year}</p>
                      {item.duration && (
                        <p className="text-xs text-white/60 flex items-center gap-2">
                          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-white/40" />
                          {item.duration}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-semibold" style={{ fontFamily: 'var(--font-syne), sans-serif' }}>
                        {item.title}
                      </h4>
                      <p className="text-sm text-white/70 leading-relaxed">{item.detail}</p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-3 text-sm">
                      {item.stack && (
                        <div>
                          <p className="text-[0.55rem] uppercase tracking-[0.4em] text-white/40 mb-1">{about.timeline?.stackLabel || 'Stack'}</p>
                          <p className="text-white/75">{item.stack}</p>
                        </div>
                      )}
                      {item.impact && (
                        <div>
                          <p className="text-[0.55rem] uppercase tracking-[0.4em] text-white/40 mb-1">{about.timeline?.impactLabel || 'Outcome'}</p>
                          <p className="text-white/75">{item.impact}</p>
                        </div>
                      )}
                      {item.duration && (
                        <div>
                          <p className="text-[0.55rem] uppercase tracking-[0.4em] text-white/40 mb-1">{about.timeline?.durationLabel || 'Timeline'}</p>
                          <p className="text-white/75">{item.duration}</p>
                        </div>
                      )}
                    </div>
                    {item.link && (
                      <Link
                        href={item.link}
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-white/70 hover:text-white transition-colors"
                      >
                        <span>{timeline.cta || 'View case'}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
          transition={{ duration: 0.8 }}
          className="grid gap-6 lg:grid-cols-2"
        >
          {testimonials.items.map((item) => (
            <div key={item.quote} className="rounded-[32px] border border-white/10 bg-white/[0.03] p-6 sm:p-8 space-y-4">
              <Target className="w-6 h-6 text-emerald-300" />
              <p className="text-lg text-white/80 leading-relaxed">“{item.quote}”</p>
              <p className="text-sm text-white/50">{item.author}</p>
            </div>
          ))}
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
          transition={{ duration: 0.8 }}
          className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.05] via-white/[0.03] to-transparent p-6 sm:p-10 text-center space-y-4"
        >
          <Sparkles className="mx-auto w-8 h-8 text-emerald-300" />
          <h3 className="text-[clamp(2rem,5vw,3rem)] font-bold" style={{ fontFamily: 'var(--font-syne), sans-serif' }}>
            {cta.heading}
          </h3>
          <p className="text-white/70 text-base max-w-2xl mx-auto">{cta.subheading}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/contact">
              <motion.button
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full bg-white text-black px-8 py-3 text-xs font-semibold uppercase tracking-[0.3em]"
              >
                {cta.primary}
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
            <Link href="/portfolio">
              <motion.button
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-8 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 hover:text-white"
              >
                {cta.secondary}
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
}

