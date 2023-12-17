module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    fontFamily: {
      'josefin': ['Josefin Sans', 'sans'],
      'MyFont': ['"My Font"', 'serif'] // Ensure fonts with spaces have " " surrounding it.
    },
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};