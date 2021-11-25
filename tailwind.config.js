module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {  
      colors: {
        primary: '#8BAC3E',
        gray: {
          'primary': '#C4C4C4',
          'light1': '#757575',
          'light2': '#F2F2F2'
        },
        dark: '#333333',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
