import '../globals.css';
import { Onest, IBM_Plex_Mono, Fraunces } from 'next/font/google';
import { notFound } from 'next/navigation';
import { locales, htmlLang, isValidLocale } from '../../lib/locales';
import { getDictionary } from '../../lib/content';
import SmoothScroll from '../../components/SmoothScroll';
import SiteChrome from '../../components/SiteChrome';
import Footer from '../../components/Footer';
import JsonLd from '../../components/JsonLd';

const onest = Onest({
  subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext'],
  weight: ['400', '500', '600'],
  variable: '--font-plex-mono',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const siteUrl = 'https://rahmetlabs.com';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  const meta = dict.meta.home;

  const languages = Object.fromEntries(locales.map((loc) => [htmlLang[loc], `${siteUrl}/${loc}`]));

  return {
    metadataBase: new URL(siteUrl),
    title: { default: meta.title, template: '%s | Rahmet Labs' },
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${siteUrl}/${locale}`,
      siteName: 'Rahmet Labs',
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Rahmet Labs' }],
      locale: htmlLang[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => htmlLang[l]),
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: ['/og-image.png'],
    },
    icons: {
      icon: '/favicon.svg',
      shortcut: '/favicon.svg',
      apple: '/favicon.svg',
    },
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dict = getDictionary(locale);

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Rahmet Labs',
    url: siteUrl,
    logo: `${siteUrl}/favicon.svg`,
    description: dict.facts.whatWeDo,
    areaServed: ['Kazakhstan', 'Central Asia', 'Europe', 'Gulf Cooperation Council'],
    address: { '@type': 'PostalAddress', addressCountry: 'KZ' },
    sameAs: ['https://t.me/RahmetLabs'],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: 'rahmetlabs@gmail.com',
        url: 'https://wa.me/77088413062',
        areaServed: 'Worldwide',
        availableLanguage: ['English', 'Russian', 'Kazakh'],
      },
    ],
    knowsAbout: [
      'Business process automation',
      'AI agents and LLM integration',
      'Web application development',
      'Mobile application development',
      'Blockchain and smart contract development',
    ],
  };

  return (
    <html lang={htmlLang[locale]} className={`${onest.variable} ${plexMono.variable} ${fraunces.variable}`}>
      <body className="bg-void font-sans text-ink antialiased">
        <JsonLd data={organizationJsonLd} />
        <SmoothScroll>
          <SiteChrome locale={locale} nav={dict.nav} />
          <main>{children}</main>
          <Footer locale={locale} footer={dict.footer} nav={dict.nav} />
        </SmoothScroll>
        <div className="grain-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}
