import './globals.css';
import { Syne, Inter, Space_Grotesk } from 'next/font/google';
import Script from 'next/script';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollProgress from '../components/ScrollProgress';
import { LanguageProvider } from '../context/LanguageContext';
import LanguageSEO from '../components/LanguageSEO';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const siteUrl = 'https://rahmetlabs.com';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Rahmet Labs | Automation, AI & Web3 Product Studio',
  description:
    'We build automation control planes, AI agents, web3 experiences, and full-stack products for B2B & B2C teams. Start shipping in weeks, own everything forever.',
  keywords: [
    'automation agency',
    'AI development studio',
    'web3 product team',
    'Next.js agency',
    'n8n experts',
    'AI automation services',
  ],
  openGraph: {
    title: 'Rahmet Labs | Automation, AI & Web3 Product Studio',
    description: 'Launch automation, AI, and web3 products with a team that ships and stays on to operate your stack.',
    url: siteUrl,
    siteName: 'Rahmet Labs',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Rahmet Labs - Automation Studio',
      },
    ],
    locale: 'en_US',
    alternateLocale: ['ru_RU', 'kk_KZ'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rahmet Labs | Automation, AI & Web3 Product Studio',
    description: 'Automation control planes, AI agents, web3 experiences, and full-stack products for ambitious teams.',
    images: ['/og-image.png'],
    creator: '@rahmetlabs',
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      'en-US': `${siteUrl}/?lang=en`,
      'ru-RU': `${siteUrl}/?lang=ru`,
      'kk-KZ': `${siteUrl}/?lang=kk`,
    },
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Rahmet Labs',
  url: siteUrl,
  logo: `${siteUrl}/favicon.svg`,
  description: 'Automation, AI, and web3 product studio helping B2B & B2C teams ship control planes and full-stack experiences.',
  sameAs: [
    'https://www.linkedin.com/company/rahmetlabs',
    'https://twitter.com/rahmetlabs',
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: 'hi@rahmetlabs.com',
      areaServed: 'Worldwide',
      availableLanguage: ['English', 'Russian', 'Kazakh'],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <Script id="rahmet-schema" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(organizationJsonLd)}
        </Script>
        <LanguageProvider>
          <LanguageSEO />
          <ScrollProgress />
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}