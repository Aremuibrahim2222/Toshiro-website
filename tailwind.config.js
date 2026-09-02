/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        sans: ['"Public Sans"', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#121317',
          900: '#17181D',
          700: '#3A3C44',
          500: '#8A8D98',
          200: '#DEDFE4',
          100: '#EFEFF2',
          50: '#F8F7F4',
        },
        gold: {
          400: '#D9A24B',
          500: '#C48A34',
        },
      },
    },
  },
  plugins: [],
}
