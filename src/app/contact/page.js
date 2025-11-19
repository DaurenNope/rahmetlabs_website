import ContactPage from '../../components/ContactPage';

export const metadata = {
  title: 'Contact Us | Get in Touch | Rahmet Labs',
  description:
    'Contact Rahmet Labs via WhatsApp, Telegram, or Email. Discuss your automation, AI, Web3, or full-stack product needs. Fast response, direct communication.',
  keywords: [
    'contact automation agency',
    'AI development contact',
    'web3 development contact',
    'automation consultation',
    'Rahmet Labs contact',
  ],
  alternates: {
    canonical: 'https://rahmetlabs.com/contact',
    languages: {
      'en-US': 'https://rahmetlabs.com/contact?lang=en',
      'ru-RU': 'https://rahmetlabs.com/contact?lang=ru',
      'kk-KZ': 'https://rahmetlabs.com/contact?lang=kk',
    },
  },
  openGraph: {
    title: 'Contact Us | Get in Touch | Rahmet Labs',
    description: 'Contact Rahmet Labs via WhatsApp, Telegram, or Email. Fast response, direct communication.',
    url: 'https://rahmetlabs.com/contact',
    siteName: 'Rahmet Labs',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Contact Rahmet Labs',
      },
    ],
    locale: 'en_US',
    alternateLocale: ['ru_RU', 'kk_KZ'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Get in Touch | Rahmet Labs',
    description: 'Contact Rahmet Labs via WhatsApp, Telegram, or Email.',
    images: ['/og-image.png'],
    creator: '@rahmetlabs',
  },
};

export default function Contact() {
  return <ContactPage />;
}

