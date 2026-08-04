import '../globals.css';
import { Geologica, Noto_Sans_Mono, Spectral } from 'next/font/google';
import { notFound } from 'next/navigation';
import { locales, htmlLang, isValidLocale } from '../../lib/locales';
import { getDictionary } from '../../lib/content';
import SmoothScroll from '../../components/SmoothScroll';
import SiteChrome from '../../components/SiteChrome';
import Footer from '../../components/Footer';
import JsonLd from '../../components/JsonLd';
import Analytics from '../../components/Analytics';

const geologica = Geologica({
  subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const notoSansMono = Noto_Sans_Mono({
  subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext'],
  weight: ['400', '500', '700'],
  variable: '--font-mono',
  display: 'swap',
});

const spectral = Spectral({
  subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext'],
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

  const absoluteOg = `${siteUrl}/og-image.png`;

  return {
    metadataBase: new URL(siteUrl),
    title: { default: meta.title, template: '%s | Rahmet Labs' },
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages: { 'x-default': siteUrl, ...languages },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${siteUrl}/${locale}`,
      siteName: 'Rahmet Labs',
      images: [{ url: absoluteOg, secureUrl: absoluteOg, width: 1200, height: 630, alt: 'Rahmet Labs — engineered systems studio', type: 'image/png' }],
      locale: htmlLang[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => htmlLang[l]),
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [absoluteOg],
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

  const alternateLinks = [
    { hrefLang: 'x-default', href: siteUrl },
    ...locales.map((loc) => ({ hrefLang: htmlLang[loc], href: `${siteUrl}/${loc}` })),
  ];

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
      'Custom AI agents',
      'Search engine optimization (SEO/AEO/GEO)',
      'Content systems and management',
      'Web application development',
      'Mobile application development',
      'Blockchain and smart contract development',
    ],
  };

  return (
    <html lang={htmlLang[locale]} className={`${geologica.variable} ${notoSansMono.variable} ${spectral.variable}`}>
      <head>
        {alternateLinks.map((l) => (
          <link key={l.hrefLang} rel="alternate" hrefLang={l.hrefLang} href={l.href} />
        ))}
      </head>
      <body className="bg-paper font-sans text-ink antialiased">
        <Analytics />
        <JsonLd data={organizationJsonLd} />
        <SmoothScroll>
          <SiteChrome locale={locale} nav={dict.nav} />
          <main id="main-content">{children}</main>
          <Footer locale={locale} footer={dict.footer} nav={dict.nav} thesis={dict.facts.thesis} />
        </SmoothScroll>
        <div className="grain-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}
