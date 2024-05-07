import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      colors: {
        darkBlue: '#090909',
        lightBlue: '#5C6CFF',
        primary: {
          DEFAULT: '#FFC25C',
          highlighted: '#FFCF80',
        },
        secondary: {
          DEFAULT: '#F25B5C',
          light: '#FF7E7E',
          dark: '#D03F40',
        },
      },
      boxShadow: {
        primary: '0 5px 40px -7px rgb(255, 194, 92)',
      },
    },
  },
  plugins: [],
}
export default config
