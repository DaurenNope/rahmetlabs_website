import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { locales, isLocale, type Locale } from '@/lib/i18n';
import { getDictionary } from '@/lib/content';
import LenisProvider from '@/components/LenisProvider';
import LangSetter from '@/components/LangSetter';

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang);
  return {
    title: t.meta.home.title,
    description: t.meta.home.description,
    keywords: t.meta.home.keywords,
    alternates: {
      canonical: `/${lang}`,
      languages: { en: '/en', ru: '/ru', kk: '/kz', 'x-default': '/en' },
    },
    openGraph: {
      title: t.meta.home.title,
      description: t.meta.home.description,
      locale: lang === 'kz' ? 'kk_KZ' : lang === 'ru' ? 'ru_RU' : 'en_US',
      type: 'website',
    },
  };
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Rahmet Labs',
  url: 'https://rahmetlabs.com',
  logo: 'https://rahmetlabs.com/icon.svg',
  description:
    'Business automation and AI development studio based in Almaty, Kazakhstan.',
  address: { '@type': 'PostalAddress', addressLocality: 'Almaty', addressCountry: 'KZ' },
  sameAs: [
    'https://github.com/rahmetlabs',
    'https://linkedin.com/company/rahmetlabs',
    'https://x.com/rahmetlabs',
  ],
};

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  return (
    <>
      <LangSetter locale={locale} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LenisProvider>{children}</LenisProvider>
    </>
  );
}
