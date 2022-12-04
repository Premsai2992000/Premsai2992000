/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        'body': '#e0e1dd',
        'navbar': '#0d1b2a',
        'selectheader': '#778da9',
        'theme': '#778da9',
        'input-border': '#565666',
        'input': '#2A2A35'
      },
      fontFamily: {
        'outfit': ['outfit']
      }
    },
  },
  plugins: [],
}
// 'selected-text': '#A3A3FF',
//         'theme': '#3F3FFF',
//         'nav': '#404053',
//         'secondary': '#9191A4',
//         'badge': '#3F3F51',
//         'input-border': '#565666',
//         'input': '#2A2A35'