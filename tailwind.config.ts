import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        '74': '4.625rem',
      },
      boxShadow: {
        standard: '0px 2px 12px 0px #3C3C3B33',
      },
      colors: {
        primary: '#00463D',
        borderLight: '#D0D0D0',
        secondary: '#706F6F',
        secondaryDark: '#3C3C3B',
        secondaryLight: '#A8A8A8',
      }
    },
  },
  plugins: [],
}
export default config
