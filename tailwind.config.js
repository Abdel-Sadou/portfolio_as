/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'selected-text': '#A3A3FF',
        'theme': '#3F3FFF',
        'sub-menu':'#4C4CC9',
        'nav': '#404053',
        'secondary': '#9191A4',
        'badge': '#3F3F51',
        'card':'#676779',
        'input-border': '#565666',
        'input': '#2A2A35'
      },
      fontFamily:{
        'poppins':["'Poppins'",'sans-serif'],
        'montserrat':["'Montserrat'",'sans-serif'],
      }
    },
  },
  plugins: [],
}
