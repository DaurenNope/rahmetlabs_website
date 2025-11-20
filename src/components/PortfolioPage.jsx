'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ExternalLink, ArrowLeft, Globe, Code, Zap, Smartphone } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

const iconMap = {
  Globe,
  Code,
  Zap,
  Smartphone,
};

export default function PortfolioPage() {
  const { dictionary } = useLanguage();
  const portfolio = dictionary.portfolioPage;
  const projects = portfolio.projects;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const defaultFilter = portfolio.filters[0] ?? 'All';
  const [activeFilter, setActiveFilter] = useState(defaultFilter);

  useEffect(() => {
    setActiveFilter(portfolio.filters[0] ?? 'All');
  }, [portfolio.filters]);

  const filteredProjects =
    activeFilter === portfolio.filters[0]
      ? projects
      : projects.filter((p) => {
          if (activeFilter === portfolio.filters[1]) return p.badge === 'WEB3';
          if (activeFilter === portfolio.filters[2]) return p.badge === 'AUTOMATION';
          if (activeFilter === portfolio.filters[3]) return p.badge === 'DEVELOPMENT';
          return true;
        });

  return (
    <main className="relative bg-black text-white min-h-screen">
      <div className="absolute inset-0 pointer-events-none mix-blend-screen">
        <motion.div
          animate={{ opacity: [0.15, 0.25, 0.15], scale: [1, 1.2, 1] }}
          transition={{ duration: 14, repeat: Infinity }}
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-[150px]"
          style={{ background: 'radial-gradient(circle, rgba(248,113,113,0.2), transparent)' }}
        />
        <motion.div
          animate={{ opacity: [0.15, 0.25, 0.15], scale: [1, 1.1, 1] }}
          transition={{ duration: 16, repeat: Infinity, delay: 2 }}
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[130px]"
          style={{ background: 'radial-gradient(circle, rgba(52,211,153,0.2), transparent)' }}
        />
      </div>

      <div className="relative z-10 pt-32 pb-32 px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto space-y-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <Link href="/">
              <motion.button whileHover={{ x: -4 }} className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors mb-4">
                <ArrowLeft className="w-4 h-4" />
                {portfolio.backLabel}
              </motion.button>
            </Link>
            <div className="text-center space-y-4">
              <p className="text-[0.6rem] uppercase tracking-[0.8em] text-white/60">{portfolio.heading}</p>
              <h1 className="text-[clamp(2.3rem,8vw,5.3rem)] font-black leading-[0.95] tracking-[-0.02em]" style={{ fontFamily: 'var(--font-syne), sans-serif' }}>
                {portfolio.heading}
              </h1>
              <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                {portfolio.subheading}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 pt-4">
              {portfolio.filters.map((filter) => (
                <motion.button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-5 py-2 rounded-full text-xs tracking-[0.3em] uppercase transition-all ${
                    activeFilter === filter ? 'bg-white text-black' : 'border border-white/20 text-white/60 hover:text-white hover:border-white/40'
                  }`}
                >
                  {filter}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => {
              const Icon = iconMap[project.icon] ?? Code;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group relative p-6 rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden cursor-pointer"
                  style={{ boxShadow: `0 20px 60px ${project.accent}` }}
                >
                  <div className="relative z-10 space-y-5">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <div className={`p-3 rounded-xl border border-white/10 bg-white/5`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-[0.5rem] uppercase tracking-[0.4em] text-white/40">{project.badge}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white transition-colors" style={{ fontFamily: 'var(--font-syne), sans-serif' }}>
                          {project.title}
                        </h3>
                        <p className="text-sm text-white/50 uppercase tracking-[0.3em]">{project.type}</p>
                      </div>
                    </div>

                    <p className="text-sm text-white/70 leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded-full text-xs text-white/60 border border-white/10 bg-white/[0.02]">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-white/10">
                      {project.url ? (
                        <motion.a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ x: 4 }}
                          className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors group/link"
                        >
                          {portfolio.viewProject}
                          <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </motion.a>
                      ) : project.urls ? (
                        <div className="space-y-2">
                          <p className="text-xs text-white/50 uppercase tracking-[0.3em] mb-2">{portfolio.liveSites}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.urls.map((url) => (
                              <motion.a
                                key={url}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs text-white/60 hover:text-white border border-white/10 hover:border-white/20 transition-colors"
                              >
                                {url.replace('https://', '').split('.')[0]}
                                <ExternalLink className="w-3 h-3" />
                              </motion.a>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="inline-flex items-center gap-2 text-sm text-white/70 group/link">
                          <span>{portfolio.contactPrompt}</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" style={{ background: `radial-gradient(circle at center, ${project.accent}, transparent)` }} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

