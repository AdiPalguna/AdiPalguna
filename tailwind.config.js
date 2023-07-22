/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'color-1': '#9C51B7',
        'color-2': '#783EA9',
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

