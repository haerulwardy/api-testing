module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#5B59DB',
        secondary: '#5B59DB',
        title: '#4A3354'
      },
      screens: {
        'phone': '576px',
        'tablet': '768px',
        'laptop': '992px',
        'dekstop': '1200px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
