/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brick-red': '#C72F41',
        'brick-red-light': '#E85D6F',
        'brick-red-lighter': '#F498A5',
        'onyx': '#401421',
        'seashell': '#F9F6EE',
        'neutral': '#404855',
        'text-primary': '#121212',
      },
      fontFamily: {
        'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
