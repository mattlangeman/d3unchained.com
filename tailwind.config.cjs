/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}', './src/**/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      blue: colors.blue,
      gray: colors.warmGray,
      yellow: colors.yellow,
    },
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
        header: ["Montserrat", "Open Sans", ...defaultTheme.fontFamily.sans],
        body: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
