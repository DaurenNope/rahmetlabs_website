'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Zap, Code, Database, Globe, Smartphone, Palette, Megaphone, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Zap,
    title: 'Automation & AI Ops',
    badge: 'AUTOMATION',
    description: 'n8n workflows, AI agents, custom integrations that eliminate manual work',
    examples: ['Support ticket routing', 'Data sync pipelines', 'AI-powered workflows'],
    color: 'from-yellow-400 to-orange-500',
    accent: 'rgba(251, 191, 36, 0.15)',
  },
  {
    icon: Code,
    title: 'Web Development',
    badge: 'DEVELOPMENT',
    description: 'Next.js, React, full-stack apps built for scale and performance',
    examples: ['SaaS platforms', 'E-commerce systems', 'Custom web apps'],
    color: 'from-blue-400 to-cyan-500',
    accent: 'rgba(56, 189, 248, 0.15)',
  },
  {
    icon: Database,
    title: 'Backend & APIs',
    badge: 'INFRASTRUCTURE',
    description: 'Robust APIs, databases, microservices architecture',
    examples: ['REST/GraphQL APIs', 'Database design', 'Cloud infrastructure'],
    color: 'from-purple-400 to-pink-500',
    accent: 'rgba(192, 132, 252, 0.15)',
  },
  {
    icon: Globe,
    title: 'Web3 & Blockchain',
    badge: 'WEB3',
    description: 'Smart contracts, DeFi, NFT platforms, blockchain integrations',
    examples: ['Smart contract development', 'Web3 frontends', 'Token systems'],
    color: 'from-green-400 to-emerald-500',
    accent: 'rgba(52, 211, 153, 0.15)',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    badge: 'MOBILE',
    description: 'iOS, Android, React Native apps that work seamlessly',
    examples: ['Native mobile apps', 'Cross-platform solutions', 'Mobile-first web'],
    color: 'from-indigo-400 to-blue-500',
    accent: 'rgba(99, 102, 241, 0.15)',
  },
  {
    icon: Palette,
    title: 'Design & UX',
    badge: 'DESIGN',
    description: 'UI/UX design, design systems, prototypes that convert',
    examples: ['Design systems', 'User research', 'High-fidelity prototypes'],
    color: 'from-rose-400 to-pink-500',
    accent: 'rgba(251, 113, 133, 0.15)',
  },
  {
    icon: Megaphone,
    title: 'Marketing & GTM',
    badge: 'GTM',
    description: 'Marketing automation, analytics dashboards, growth tools',
    examples: ['Marketing automation', 'Analytics platforms', 'Growth tools'],
    color: 'from-teal-400 to-cyan-500',
    accent: 'rgba(45, 212, 191, 0.15)',
  },
  {
    icon: Sparkles,
    title: 'Custom Solutions',
    badge: 'ENTERPRISE',
    description: 'Whatever you need—we build it. No project too complex.',
    examples: ['Enterprise systems', 'Legacy modernization', 'Custom integrations'],
    color: 'from-violet-400 to-purple-500',
    accent: 'rgba(139, 92, 246, 0.15)',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section id="services" ref={ref} className="relative overflow-hidden bg-black text-white py-32 px-4 sm:px-6 lg:px-10">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none mix-blend-screen">
        <motion.div
          animate={{
            opacity: [0.2, 0.3, 0.2],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-10 w-96 h-96 rounded-full blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(52,211,153,0.3), transparent)' }}
        />
        <motion.div
          animate={{
            opacity: [0.2, 0.3, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full blur-[100px]"
          style={{ background: 'radial-gradient(circle, rgba(248,113,113,0.3), transparent)' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4"
        >
          <p className="text-[0.6rem] uppercase tracking-[0.8em] text-white/60">WHAT WE BUILD</p>
          <h2
            className="text-[clamp(2.5rem,8vw,5.5rem)] font-black leading-[0.9] tracking-[-0.02em] text-white"
            style={{ fontFamily: 'var(--font-syne), sans-serif' }}
          >
            Services
          </h2>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mt-4" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
            Full-stack development, automation, web3, design—we handle everything dev-related.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = active === index;
            const isHovered = hovered === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ y: -4, scale: 1.02 }}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className={`relative rounded-3xl border overflow-hidden transition-all cursor-pointer ${
                  isActive || isHovered
                    ? 'border-white/30 bg-white/[0.08]'
                    : 'border-white/10 bg-white/[0.02]'
                }`}
                style={{
                  boxShadow: isActive || isHovered ? `0 20px 60px ${service.accent}` : 'none',
                }}
              >
                <div className="p-6 space-y-5">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${service.color} opacity-20`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-[0.5rem] uppercase tracking-[0.4em] text-white/40">{service.badge}</p>
                  </div>
                  
                  <h3
                    className="text-lg font-bold text-white"
                    style={{ fontFamily: 'var(--font-syne), sans-serif' }}
                  >
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-white/70 leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 pt-2 border-t border-white/10">
                    {service.examples.slice(0, 2).map((example, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.05 + idx * 0.1 }}
                        className="text-xs text-white/50 flex items-center gap-2"
                      >
                        <div className="w-1 h-1 rounded-full bg-white/30" />
                        {example}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {(isActive || isHovered) && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, ${service.accent}, transparent)`,
                    }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center pt-8"
        >
          <Link href="#contact">
            <motion.button
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-white text-black font-semibold text-sm uppercase tracking-[0.2em] hover:bg-white/90 transition-all"
              style={{ fontFamily: 'var(--font-syne), sans-serif' }}
            >
              Discuss Your Project
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
