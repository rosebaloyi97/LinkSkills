module.exports = {
  prefix: '',
  purge: {
    enabled: false,
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'Noto+San': ['Noto+San', 'sans-serif'],
      'MyFont': ['"My Font"', 'serif']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
};
