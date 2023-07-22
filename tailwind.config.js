/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'color-1': '#FFAC42',
        'color-2': '#FF1F57',
        'color-3': '#333333',
        'color-4': '#666666'
      },
      fontFamily: {
        Poppins: ["Poppins", "cursive"],
      },
      fontSize: {
        'xxs': '10px'
      },
      screens: {
        'xxxs': '280px',
        'xxs': '360px',
        'xs': '480px'
      }
    },
  },
  plugins: [],
}

