/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#91b7eb',
          300: '#72a6eb',
          500: '#629dec',
          700: '#5795e7',
          900: '#4385dd',
        },
        secondary: {
          100: '#52bda9',
          300: '#3bb59e',
          500: '#34ad96',
          700: '#349e8a',
          900: '#318272',
        },
        tertiary: {
          100: '#d9a183',
          300: '#d88e65',
          500: '#d88456',
          700: '#d27c4d',
          900: '#c46c3c',
        },
        neutral: {
          100: '#666666',
          300: '#565656',
          500: '#3f3f3f',
          700: '#343434',
          900: '#303030',
        },
        font: {
          default: '#303030',
        },
        background: '#fafafa',
      },
    },
  },
  plugins: [],
};
