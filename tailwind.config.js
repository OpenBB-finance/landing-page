const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: "jit",
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "primary": "#0dc4a5",
        "primaryLighter": "#10DBB9",
        "primaryDarker": "#0b9c83"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
