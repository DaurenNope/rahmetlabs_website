import PortfolioPage from '../../components/PortfolioPage';

export const metadata = {
  title: 'Portfolio | Automation, Web3, AI & Product Case Studies | Rahmet Labs',
  description:
    'Explore our portfolio: automation control planes, Web3 platforms, AI agents, full-stack products, and enterprise solutions. Real metrics, live links, and case studies.',
  keywords: [
    'automation case studies',
    'web3 portfolio',
    'AI project examples',
    'Next.js projects',
    'automation success stories',
    'web development portfolio',
    'smart contract projects',
    'SaaS case studies',
  ],
  alternates: {
    canonical: 'https://rahmetlabs.com/portfolio',
    languages: {
      'en-US': 'https://rahmetlabs.com/portfolio?lang=en',
      'ru-RU': 'https://rahmetlabs.com/portfolio?lang=ru',
      'kk-KZ': 'https://rahmetlabs.com/portfolio?lang=kk',
    },
  },
  openGraph: {
    title: 'Portfolio | Automation, Web3, AI & Product Case Studies | Rahmet Labs',
    description: 'Automation control planes, Web3 platforms, AI agents, and full-stack products. Real metrics and live links.',
    url: 'https://rahmetlabs.com/portfolio',
    siteName: 'Rahmet Labs',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Rahmet Labs Portfolio - Automation, Web3, AI & Product Case Studies',
      },
    ],
    locale: 'en_US',
    alternateLocale: ['ru_RU', 'kk_KZ'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | Automation, Web3, AI & Product Case Studies | Rahmet Labs',
    description: 'Automation, Web3, AI, and full-stack product case studies with real metrics.',
    images: ['/og-image.png'],
    creator: '@rahmetlabs',
  },
};

export default function Portfolio() {
  return <PortfolioPage />;
}

