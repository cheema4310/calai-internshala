/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        lightest: '#E6E6E6',
        lighter: '#B0B0B0',
        light: '#6C6C6C',
        dark: '#3D3D3D',
        darker: '#292929',
        darkest: '#0D0D0D',
        glassDarkest: 'rgba(13, 13, 13, 0.6)',
        glassOrange: 'rgba(234, 88, 12, 0.6)',
      },

      fontFamily: {
        heading: ['Lato', 'sans-serif'],
        para: ['Open Sans', 'sans-serif'],
        btn: ['Nunito', 'sans-serif'],
        modern: ['Exo', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
