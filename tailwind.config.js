/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'dark-grey': '#262626',
      black: '#101010',
      green: '#428D26',
      white: 'white',
      'light-grey': '#D9D9D9',
      'mid-grey': '#ABABAB',
      grey: '#6C6C6C'
    },
    extend: {},
  },
  plugins: [],
}

