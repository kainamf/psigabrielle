/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#88A5C3',
        secondary: '#97B9A8',
        background: '#F4F5F0',
        accent: '#436258',
      },
    },
  },
  plugins: [],
};
