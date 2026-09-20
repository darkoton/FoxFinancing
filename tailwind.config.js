/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        'gray-black': '#161415',
        gray: '#3F3F3F',
        black: '#050505',
        orange: '#F45722',
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
        Inter: ['Inter', 'sans-serif'],
      },
      spacing: {},
    },
  },
  plugins: [],
};
