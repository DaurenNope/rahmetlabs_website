'use client';

import Script from 'next/script';
import { useLanguage } from '../context/LanguageContext';

export default function StructuredData({ type, data }) {
  const { language } = useLanguage();

  if (!data) return null;

  const baseUrl = 'https://rahmetlabs.com';
  const langMap = { en: 'en-US', ru: 'ru-RU', kz: 'kk-KZ' };
  const currentLang = langMap[language] || 'en-US';

  let schema = {};

  switch (type) {
    case 'service':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: data.name,
        description: data.description,
        provider: {
          '@type': 'Organization',
          name: 'Rahmet Labs',
          url: baseUrl,
        },
        areaServed: 'Worldwide',
        availableLanguage: ['English', 'Russian', 'Kazakh'],
      };
      break;

    case 'faq':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: data.items.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      };
      break;

    case 'breadcrumb':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: data.items.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: `${baseUrl}${item.url}`,
        })),
      };
      break;

    case 'webpage':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: data.name,
        description: data.description,
        url: `${baseUrl}${data.url}`,
        inLanguage: currentLang,
        isPartOf: {
          '@type': 'WebSite',
          name: 'Rahmet Labs',
          url: baseUrl,
        },
      };
      break;

    default:
      return null;
  }

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

