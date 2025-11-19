import Hero from '../components/Hero';
import Services from '../components/Services';
import Capabilities from '../components/Capabilities';
import Portfolio from '../components/Portfolio';
import Process from '../components/Process';
import Stats from '../components/Stats';
import Contact from '../components/Contact';
import Script from 'next/script';

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Rahmet Labs',
  url: 'https://rahmetlabs.com',
  description: 'Automation, AI, and Web3 product studio helping B2B & B2C teams ship control planes and full-stack experiences.',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://rahmetlabs.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export const metadata = {
  title: 'Rahmet Labs | Web, Mobile, Automation, AI & Web3 Product Studio',
  description:
    'We build web and mobile products, automation control planes, AI agents, and Web3 infrastructure. Full-stack development + intelligent automation. Start shipping in weeks.',
  keywords: [
    'automation agency',
    'AI development studio',
    'web3 product team',
    'Next.js agency',
    'n8n experts',
    'AI automation services',
    'web development',
    'mobile app development',
    'smart contracts',
    'automation consulting',
    'full-stack development',
    'SaaS development',
  ],
  alternates: {
    canonical: 'https://rahmetlabs.com',
    languages: {
      'en-US': 'https://rahmetlabs.com/?lang=en',
      'ru-RU': 'https://rahmetlabs.com/?lang=ru',
      'kk-KZ': 'https://rahmetlabs.com/?lang=kk',
    },
  },
};

export default function Home() {
  return (
    <>
      <Script
        id="website-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <main className="relative bg-black">
        <Hero />
        <Services />
        <Capabilities />
        <Portfolio />
        <Process />
        <Stats />
        <Contact />
      </main>
    </>
  );
}
