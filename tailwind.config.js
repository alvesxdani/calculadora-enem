/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      opensans: ['Open Sans', 'sans-serif']
    },
    colors: {
      'blue': '#012a6b',
      'red': '#a60510',
      'light-grey': '#bfbfbf',
      'dark-grey': '#5e5d5d',
      'black': '#212121',
      'white': '#fff'
    },
    extend: {},
  },
  plugins: [],
}

