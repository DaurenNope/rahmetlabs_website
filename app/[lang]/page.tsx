import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale } from '@/lib/i18n';
import { getDictionary } from '@/lib/content';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Doors from '@/components/Doors';
import Systems from '@/components/Systems';
import Comparison from '@/components/Comparison';
import Process from '@/components/Process';
import Work from '@/components/Work';
import Cta from '@/components/Cta';
import Footer from '@/components/Footer';
import Divider from '@/components/Divider';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const m = getDictionary(lang).meta.home;
  return {
    title: m.title,
    description: m.description,
    keywords: m.keywords,
    alternates: {
      canonical: `/${lang}`,
      languages: { en: '/en', ru: '/ru', kk: '/kz' },
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);

  return (
    <main>
      <Nav locale={lang} t={t} />
      <Hero t={t} />
      <Divider variant="on-bone" />
      <Doors t={t} locale={lang} />
      <Divider variant="on-bone" />
      <Systems t={t} locale={lang} />
      <Divider variant="on-bone" />
      <Comparison t={t} />
      <Divider variant="on-red" />
      <Work t={t} locale={lang} />
      <Divider variant="on-bone" />
      <Process t={t} />
      <Divider variant="on-red" />
      <Cta t={t} />
      <Footer t={t} locale={lang} />
    </main>
  );
}
