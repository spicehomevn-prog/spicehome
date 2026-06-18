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
        // Minibar palette
        mb: {
          terra: '#B14A24',
          'terra-dark': '#8A3415',
          amber: '#E0935A',
          sand: '#F6E2CF',
          cream: '#FBF4E9',
          ink: '#2E2620',
          muted: '#917C68',
          line: '#ECDFCC',
          'empty-bar': '#EFE4D2',
          'qr-frame': '#5C2410',
        },
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
