// Typed accessor over the curated trilingual content deck.
// The deck is the source of truth: no fabricated stats, no invented
// testimonials, live work carries real links.

import { content as raw } from '@/content/content.js';
import type { Locale } from './i18n';

export type Dictionary = (typeof raw)['en'];

export function getDictionary(locale: Locale): Dictionary {
  return (raw as Record<string, Dictionary>)[locale] ?? raw.en;
}
