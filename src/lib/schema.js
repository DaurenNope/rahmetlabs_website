/** JSON-LD builders shared across [locale] routes. */

const siteUrl = 'https://rahmetlabs.com';
const htmlLangFor = { en: 'en', ru: 'ru', kz: 'kk' };

export function breadcrumbJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url ? `${siteUrl}${item.url}` : undefined,
    })),
  };
}

export function localeHomeUrl(locale) {
  return `${siteUrl}/${locale}`;
}

/** ItemList of shipped work — gives AI/search engines a crawlable roster. */
export function workItemListJsonLd({ locale, work }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    inLanguage: htmlLangFor[locale],
    itemListElement: work.positions.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.title,
      description: item.description,
      ...(item.links?.length ? { url: item.links[0].url } : {}),
    })),
  };
}
