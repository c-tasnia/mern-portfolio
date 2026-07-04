/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B0E14',
          soft: '#0F1320',
        },
        surface: {
          DEFAULT: '#131722',
          raised: '#181D2B',
          border: '#232838',
        },
        amber: {
          DEFAULT: '#E8B339',
          soft: '#F2CB6E',
        },
        mint: {
          DEFAULT: '#5EEAD4',
          soft: '#94F3E4',
        },
        fg: {
          primary: '#E6E8EF',
          muted: '#8B92A8',
          faint: '#565D75',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-fade': 'radial-gradient(circle at 1px 1px, rgba(230,232,239,0.06) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
}
