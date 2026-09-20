/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        white: 'rgb(var(--white-rgb), <alpha-value>)',
        'gray-black': 'rgb(var(--gray-black-rgb), <alpha-value>)',
        gray: 'rgb(var(--gray-rgb), <alpha-value>)',
        black: 'rgb(var(--black-rgb), <alpha-value>)',
        orange: 'rgb(var(--orange-rgb), <alpha-value>)',
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
        Inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        h1: ['40px', { lineHeight: '48px' }],
        h2: ['36px', { lineHeight: '43px' }],
      },
      spacing: {},
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
