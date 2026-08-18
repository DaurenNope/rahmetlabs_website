import type { MetadataRoute } from 'next';

const aiCrawlers = [
  // search-augmented + assistant crawlers: these drive citations
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'Meta-ExternalAgent',
  'MistralAI-User',
  'DuckAssistBot',
  'Amazonbot',
  'AI2Bot',
  'cohere-ai',
  'CCBot', // Common Crawl — feeds the training corpora of most frontier models
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
