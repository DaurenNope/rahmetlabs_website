import ServicesPage from '../../components/ServicesPage';
import Script from 'next/script';

export const metadata = {
  title: 'Services | Web, Mobile, Automation, AI & Web3 Development | Rahmet Labs',
  description:
    'Full-stack web/mobile products, automation control planes, AI agents, and Web3 infrastructure. One team ships everything from landing pages to enterprise platforms.',
  keywords: [
    'web development services',
    'mobile app development',
    'automation services',
    'AI development studio',
    'web3 development',
    'Next.js agency',
    'React development',
    'n8n automation',
    'LangChain AI',
    'smart contracts',
    'SaaS development',
    'business automation',
  ],
  alternates: {
    canonical: 'https://rahmetlabs.com/services',
    languages: {
      'en-US': 'https://rahmetlabs.com/services?lang=en',
      'ru-RU': 'https://rahmetlabs.com/services?lang=ru',
      'kk-KZ': 'https://rahmetlabs.com/services?lang=kk',
    },
  },
  openGraph: {
    title: 'Services | Web, Mobile, Automation, AI & Web3 | Rahmet Labs',
    description: 'Full-stack products, automation control planes, AI agents, and Web3 infrastructure. One team ships everything.',
    url: 'https://rahmetlabs.com/services',
    siteName: 'Rahmet Labs',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Rahmet Labs Services - Web, Mobile, Automation, AI & Web3 Development',
      },
    ],
    locale: 'en_US',
    alternateLocale: ['ru_RU', 'kk_KZ'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services | Web, Mobile, Automation, AI & Web3 | Rahmet Labs',
    description: 'Full-stack products, automation, AI, and Web3 infrastructure. One team ships everything.',
    images: ['/og-image.png'],
    creator: '@rahmetlabs',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Web Development, Mobile Development, Automation, AI, Web3',
  description:
    'Full-stack web and mobile products, automation control planes, AI agents, and Web3 infrastructure development services.',
  provider: {
    '@type': 'Organization',
    name: 'Rahmet Labs',
    url: 'https://rahmetlabs.com',
  },
  areaServed: 'Worldwide',
  availableLanguage: ['English', 'Russian', 'Kazakh'],
};

export default function Services() {
  return (
    <>
      <Script
        id="services-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <ServicesPage />
    </>
  );
}

