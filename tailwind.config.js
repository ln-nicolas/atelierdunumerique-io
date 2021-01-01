const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans : [
          'Ubuntu',
          ...defaultTheme.fontFamily.sans
        ],
      },
      colors: {
        adn : {
          '300': '#d7e6ed',
          '500': '#00b5d9',
          '700': '#0b3b58',
          '800': '#0b062c'
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
