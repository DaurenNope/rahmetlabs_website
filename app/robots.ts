import type { MetadataRoute } from 'next';

const aiCrawlers = [
  // search-augmented + assistant crawlers: these drive citations
  'GPTBot',
  'ClaudeBot',
  'PerplexityBot',
  'Google-Extended',
  'Applebot-Extended',
  'OAI-SearchBot',
  'ChatGPT-User',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      ...aiCrawlers.map((bot) => ({ userAgent: bot, allow: '/' })),
    ],
    sitemap: 'https://rahmetlabs.com/sitemap.xml',
  };
}
