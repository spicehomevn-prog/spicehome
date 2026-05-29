import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAFAF8',
        surface: '#FFFFFF',
        dark: '#1A1A18',
        'primary-text': '#2C2C2A',
        'muted-text': '#7A7A72',
        accent: '#C4773B',
        'accent-hover': '#A8622E',
        border: '#E8E4DC',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      transitionDuration: {
        '700': '700ms',
      },
    },
  },
  plugins: [],
}

export default config
