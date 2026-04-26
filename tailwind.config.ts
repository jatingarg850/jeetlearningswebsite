import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canam: {
          red: '#C20000',
          'red-dark': '#B30000',
          'red-link': '#C50000',
          'red-active': '#E70000',
          'red-line': '#DA1313',
          text: '#505050',
          gray: '#757575',
          border: '#EEEEEE',
          bg: 'rgba(238, 238, 238, 0.50)',
        },
        primary: '#C20000',
      },
      fontSize: {
        'xs': '16px',
        'sm': '18px',
        'base': '20px',
        'lg': '24px',
        'xl': '28px',
        '2xl': '32px',
        '3xl': '40px',
        '4xl': '48px',
        '5xl': '64px',
        '6xl': '72px',
        '7xl': '96px',
        '8xl': '120px',
        '9xl': '144px',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
        inter: ['var(--font-inter)', 'Inter', 'sans-serif'],
        sans: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
        fredoka: ['Fredoka', 'sans-serif'],
        'luckiest-guy': ['Luckiest Guy', 'cursive'],
        'dm-sans': ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
