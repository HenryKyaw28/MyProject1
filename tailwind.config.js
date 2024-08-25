/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        main: ['new-amsterdam-regular', 'Nunito']
      },
      colors: {
        forText: {
          dark: '#f2fed7',
          light: '#d1dabc',
        },
        background: '#0e1300',
        nav: '#1a1d11',
        primary: '#dffd7e',
        secondary: {
          dark: '#029d03',
          light: '#00cc02',
        },
        accent: '#29fc6e',
      },
    },
  },
  plugins: [],
}

