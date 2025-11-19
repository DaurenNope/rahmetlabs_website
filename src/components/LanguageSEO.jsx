'use client';

import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

function ensureMeta(attr, value, content) {
  if (!content) return;
  const selector = `meta[${attr}="${value}"]`;
  let meta = document.head.querySelector(selector);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attr, value);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
}

export default function LanguageSEO() {
  const { language, dictionary } = useLanguage();

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.documentElement.lang = language;

    const seo = dictionary?.seo;
    if (!seo) return;

    const { title, description, keywords, ogLocale, url, image, twitterCard } = seo;

    if (title) document.title = title;

    ensureMeta('name', 'description', description);
    ensureMeta('name', 'keywords', keywords);
    ensureMeta('property', 'og:title', title);
    ensureMeta('property', 'og:description', description);
    ensureMeta('property', 'og:locale', ogLocale);
    ensureMeta('property', 'og:url', url);
    if (image) {
      const absoluteImage = image.startsWith('http') ? image : `${window.location.origin}${image}`;
      ensureMeta('property', 'og:image', absoluteImage);
      ensureMeta('name', 'twitter:image', absoluteImage);
    }
    ensureMeta('name', 'twitter:card', twitterCard || 'summary_large_image');
    ensureMeta('name', 'twitter:title', title);
    ensureMeta('name', 'twitter:description', description);
  }, [language, dictionary]);

  return null;
}

