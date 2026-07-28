/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Light "ledger" surface
        void: '#FAFAF8',
        panel: '#F1F0E9',
        'panel-raised': '#E9E7DD',
        hairline: '#DEDCD2',
        ink: '#17181C',
        'ink-muted': '#5E5F63',
        'ink-faint': '#9B9C98',
        // Primary accent — warm amber (automated / live / CTA)
        amber: {
          DEFAULT: '#D97706',
          dim: '#92400E',
          soft: 'rgba(217,119,6,0.08)',
        },
        // Secondary — muted red (manual / stale, semantic only)
        manual: {
          DEFAULT: '#B4513A',
          dim: '#6E2E20',
          soft: 'rgba(180,81,58,0.08)',
        },
        // Dark inset "viewport" — the one place glow/dark/WebGL lives
        viewport: '#0A0B0E',
        'viewport-raised': '#16181E',
        'viewport-hairline': '#2B2D35',
        'viewport-ink': '#F5F4EE',
        'viewport-ink-muted': '#9C9DA6',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-plex-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        display: ['clamp(2.5rem, 6vw, 5.25rem)', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        headline: ['clamp(1.75rem, 3.2vw, 2.5rem)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
      },
      borderRadius: {
        none: '0px',
        sm: '3px',
        DEFAULT: '3px',
      },
      boxShadow: {
        none: 'none',
      },
      spacing: {
        row: '0.875rem',
        panel: '1.5rem',
      },
      maxWidth: {
        content: '1400px',
        prose: '720px',
      },
      transitionTimingFunction: {
        terminal: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
