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
        // "The Thread" — dark editorial system
        void: '#08090A',
        panel: '#0D0F10',
        raised: '#131517',
        hairline: '#202326',
        ink: '#F4F1EA',
        'ink-muted': '#99978B',
        'ink-faint': '#5F5E56',
        // Signature amber — the thread, live state, primary actions
        amber: {
          DEFAULT: '#E8A33D',
          deep: '#B97A24',
          soft: 'rgba(232,163,61,0.09)',
        },
        // Terminal red — ONLY opposite amber in manual-vs-system context
        terminal: {
          DEFAULT: '#C1503B',
          soft: 'rgba(193,80,59,0.09)',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        mono: ['var(--font-plex-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        display: ['clamp(2.75rem, 7vw, 6rem)', { lineHeight: '1.02', letterSpacing: '-0.02em' }],
        headline: ['clamp(2rem, 4.2vw, 3.5rem)', { lineHeight: '1.06', letterSpacing: '-0.015em' }],
        subhead: ['clamp(1.25rem, 2.2vw, 1.75rem)', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
      },
      letterSpacing: {
        kicker: '0.22em',
      },
      maxWidth: {
        content: '1320px',
        prose: '720px',
      },
      borderRadius: {
        panel: '10px',
      },
      transitionTimingFunction: {
        reveal: 'cubic-bezier(0.16, 1, 0.3, 1)',
        settle: 'cubic-bezier(0.7, 0, 0, 1)',
      },
    },
  },
  plugins: [],
}
