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
        h1: ['40px', { lineHeight: 'normal' }],
        h2: ['36px', { lineHeight: 'normal' }],
      },
      spacing: {},
    },

    screens: {
      mb: '390px',
      xs: '440px',
      sm: '640px',
      md: '768px',
      lg: '992px',
      xl: '1240px',
      '2xl': '1440px',
    },

    backgroundImage: {
      silver:
        'linear-gradient(319.96deg, #a8a8a6 21.63%, #696969 52.66%, #f9f8f6 67.32%, #d4d4d4 78.31%, #7f7f7f 90.33%)',
      'black-transition':
        'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #0b0705 73.08%);',
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
