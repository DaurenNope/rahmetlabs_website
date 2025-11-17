'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Web3 Airdrop Farming System',
    type: 'Web3 + Automation',
    badge: 'WEB3',
    problem: { label: 'Before', details: ['Manual airdrop tracking', 'Missed opportunities', 'Time-consuming research'] },
    solution: { label: 'Solution', details: ['Smart contracts (Solidity, Rust)', 'Automated farming workflows', 'Social media automations'] },
    impact: { label: 'Impact', details: ['Successful airdrop farming', 'Automated execution', 'Multi-chain support'] },
    accent: 'rgba(139, 92, 246, 0.1)',
    url: null,
  },
  {
    id: 2,
    title: 'Education Platform Suite',
    type: 'Full-Stack Development',
    badge: 'DEVELOPMENT',
    problem: { label: 'Before', details: ['Outdated platforms', 'Poor user experience', 'Limited functionality'] },
    solution: { label: 'Solution', details: ['Modern web platforms', 'Responsive design', 'Custom features'] },
    impact: { label: 'Impact', details: ['ageu.edu.kz', 'q-university.edu.kz', 'qgroup.asia'] },
    accent: 'rgba(56, 189, 248, 0.1)',
    urls: ['https://ageu.edu.kz', 'https://q-university.edu.kz', 'https://qgroup.asia'],
  },
  {
    id: 3,
    title: 'Multi-Platform Bot Suite',
    type: 'Automation',
    badge: 'AUTOMATION',
    problem: { label: 'Before', details: ['Manual messaging', 'Repetitive tasks', 'Limited reach'] },
    solution: { label: 'Solution', details: ['WhatsApp bots', 'Telegram bots', 'Twitter & Threads automation'] },
    impact: { label: 'Impact', details: ['Varying complexities', 'Automated workflows', 'Multi-platform coverage'] },
    accent: 'rgba(251, 191, 36, 0.1)',
    url: null,
  },
  {
    id: 4,
    title: 'Beyond Lines',
    type: 'Full-Stack Development',
    badge: 'DEVELOPMENT',
    problem: { label: 'Before', details: ['Concept needed execution', 'Creative vision', 'Technical implementation'] },
    solution: { label: 'Solution', details: ['Modern web application', 'Creative design', 'Full-stack architecture'] },
    impact: { label: 'Impact', details: ['Live at beyondlines-web.vercel.app', 'Creative showcase', 'Pet project'] },
    accent: 'rgba(52, 211, 153, 0.1)',
    url: 'https://beyondlines-web.vercel.app',
  },
  {
    id: 5,
    title: 'Unhireable',
    type: 'Full-Stack Development',
    badge: 'DEVELOPMENT',
    problem: { label: 'Before', details: ['Portfolio needed', 'Personal branding', 'Showcase platform'] },
    solution: { label: 'Solution', details: ['Custom website', 'Modern design', 'Performance optimized'] },
    impact: { label: 'Impact', details: ['Live at unhireable-website.vercel.app', 'Personal brand', 'Pet project'] },
    accent: 'rgba(192, 132, 252, 0.1)',
    url: 'https://unhireable-website.vercel.app',
  },
  {
    id: 6,
    title: 'Full-Stack Applications',
    type: 'Full-Stack Development',
    badge: 'DEVELOPMENT',
    problem: { label: 'Before', details: ['Simple to complex needs', 'Various requirements', 'Scalable solutions'] },
    solution: { label: 'Solution', details: ['Custom web applications', 'Landing pages', 'Complex platforms'] },
    impact: { label: 'Impact', details: ['Range of projects', 'Scalable architecture', 'Modern tech stack'] },
    accent: 'rgba(56, 189, 248, 0.1)',
    url: null,
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="portfolio" ref={ref} className="relative overflow-hidden bg-black text-white py-32 px-4 sm:px-6 lg:px-10">
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

      <div className="relative z-10 max-w-6xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4"
        >
          <p className="text-[0.6rem] uppercase tracking-[0.8em] text-white/60">OUR WORK</p>
          <h2
            className="text-[clamp(2.5rem,8vw,5.5rem)] font-black leading-[0.9] tracking-[-0.02em] text-white"
            style={{ fontFamily: 'var(--font-syne), sans-serif' }}
          >
            Portfolio
          </h2>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mt-4" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
            Real projects across automation, web development, web3, and more
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="relative p-8 rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden"
              style={{
                boxShadow: `0 20px 60px ${project.accent}`,
              }}
            >
              <div className="relative z-10 space-y-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <p className="text-[0.5rem] uppercase tracking-[0.4em] text-white/40">{project.badge}</p>
                    <h3
                      className="text-xl md:text-2xl font-bold text-white"
                      style={{ fontFamily: 'var(--font-syne), sans-serif' }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/50 uppercase tracking-[0.3em]">{project.type}</p>
                  </div>
                  {project.url && (
                    <motion.a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="p-2 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 text-white/70" />
                    </motion.a>
                  )}
                </div>

                <div className="grid gap-4">
                  {[project.problem, project.solution, project.impact].map((section, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: index * 0.08 + idx * 0.05 }}
                      className={`p-4 rounded-2xl border ${
                        idx === 0
                          ? 'border-rose-500/30 bg-rose-500/5'
                          : idx === 1
                          ? 'border-white/10 bg-white/[0.02]'
                          : 'border-emerald-500/30 bg-emerald-500/5'
                      }`}
                    >
                      <p className="text-[0.6rem] uppercase tracking-[0.4em] text-white/50 mb-3">{section.label}</p>
                      <ul className="space-y-1.5" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                        {section.details.map((detail, detailIdx) => (
                          <li key={detailIdx} className="text-sm text-white/70 flex items-start gap-2">
                            <span className="text-white/30 mt-1.5">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>

                {project.urls && (
                  <div className="pt-2 border-t border-white/10">
                    <p className="text-[0.6rem] uppercase tracking-[0.4em] text-white/50 mb-2">Live Sites</p>
                    <div className="flex flex-wrap gap-2">
                      {project.urls.map((url, urlIdx) => (
                        <motion.a
                          key={urlIdx}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05, x: 2 }}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-white/70 hover:text-white border border-white/10 hover:border-white/20 transition-colors"
                        >
                          {url.replace('https://', '')}
                          <ExternalLink className="w-3 h-3" />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, ${project.accent}, transparent)`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
