import AboutPage from '../../components/AboutPage';

const pageUrl = 'https://rahmetlabs.com/about';

export const metadata = {
  title: 'About Rahmet Labs | Automation-Native Product Studio',
  description:
    'Meet the automation-native builders behind Rahmet Labs. We deliver web/mobile products, automation control planes, and Web3 infrastructure for ambitious teams.',
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: 'About Rahmet Labs | Automation-Native Product Studio',
    description:
      'Automation-native builders shipping web/mobile products, automation control planes, and Web3 infrastructure.',
    url: pageUrl,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Rahmet Labs',
    description: 'Meet the team building automation, AI, and Web3 systems.',
    images: ['/og-image.png'],
  },
};

export default function About() {
  return <AboutPage />;
}

