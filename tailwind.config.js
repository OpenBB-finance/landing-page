module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary": "#0dc4a5",
        "primaryLighter": "#10DBB9"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
