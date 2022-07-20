/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors:{
        // 'body':'#17171F',
        // 'selected-text':'#A3A3FF',
        // 'theme': '#3F3FFF',
        // 'nav': '#404053',
        // 'secondary': '#9191A4',
        // 'badge': '#3F3F51',
        // 'input-border': '#565666',
        // 'input': '#2A2A35'
        'body':'#17171F',
        'selected-text':'#ffa3a3',
        'theme': '#ff3f3f',
        'nav': '#534040',
        'secondary': '#9191A4',
        'badge': '#513f3f',
        'input-border': '#565666',
        'input': '#2A2A35'
      },
      forntFamilt:{
        'poppins':["'Poppins'", "'san-serif'"]
      }
    },
  },
  // plugins: [],
}
