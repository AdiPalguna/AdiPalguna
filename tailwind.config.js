/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xxxs': '280px',
        'xxs': '360px',
        'xs' : '480px'
      },
      fontFamily: {
        poppins: ["Poppins", "cursive"],
      },
      colors: {
        'color-1': '#FF67B2',
        'color-2': '#6237A0',
        'color-3': '#333333',
        'color-4': '#1A1A1A'
      }
    },
  },
  plugins: [],
}

