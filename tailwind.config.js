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
        // "Field Notebook" — warm paper + inks
        paper: '#F6F4EE',
        card: '#FCFBF7',
        well: '#EDEAE1',
        hairline: '#DDD9CE',
        ink: {
          DEFAULT: '#1B1914',
          muted: '#5E5A50',
          faint: '#8A857A',
        },
        // Signal blue — the system: CTAs, live states, the resolved line
        signal: {
          DEFAULT: '#2B4BD7',
          deep: '#1D36A8',
          soft: 'rgba(43,75,215,0.08)',
        },
        // Manual red — ONLY opposite signal in manual-vs-system context
        manual: {
          DEFAULT: '#BF4632',
          soft: 'rgba(191,70,50,0.08)',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
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
        panel: '12px',
      },
      transitionTimingFunction: {
        reveal: 'cubic-bezier(0.16, 1, 0.3, 1)',
        settle: 'cubic-bezier(0.7, 0, 0, 1)',
      },
    },
  },
  plugins: [],
}
