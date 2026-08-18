import type { Metadata } from 'next';
import { Oswald, Onest, JetBrains_Mono, Spectral } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

/* Oswald carries the monumental display role: full cyrillic-ext coverage,
   which Kazakh requires and Russo One lacks (Қ Ң Ү Ө Һ Ә Ғ). */
const display = Oswald({
  weight: ['500', '600'],
  subsets: ['latin', 'cyrillic', 'cyrillic-ext'],
  variable: '--font-display',
});

const body = Onest({
  weight: ['400', '500', '600'],
  subsets: ['latin', 'cyrillic', 'cyrillic-ext'],
  variable: '--font-body',
});

const mono = JetBrains_Mono({
  weight: ['400', '500'],
  subsets: ['latin', 'cyrillic', 'cyrillic-ext'],
  variable: '--font-mono',
});

/* editorial italic accent, used only for annotation voice (cta accent line) */
const accent = Spectral({
  weight: '500',
  style: 'italic',
  subsets: ['latin', 'cyrillic', 'cyrillic-ext'],
  variable: '--font-accent',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rahmetlabs.com'),
  openGraph: {
    siteName: 'Rahmet Labs',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Rahmet Labs — the particle crown resolves into the night pasture' }],
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable} ${accent.variable}`}>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
