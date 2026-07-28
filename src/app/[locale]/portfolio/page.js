import { notFound } from 'next/navigation';
import { isValidLocale } from '../../../lib/locales';
import { getDictionary } from '../../../lib/content';
import Work from '../../../components/Work';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    title: dict.meta.portfolio.title,
    description: dict.meta.portfolio.description,
    alternates: { canonical: `https://rahmetlabs.com/${locale}/portfolio` },
  };
}

export default async function PortfolioPage({ params }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return <Work locale={locale} work={dict.work} full />;
}
