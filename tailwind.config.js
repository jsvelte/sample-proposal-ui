/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html', 
    './src/**/*.{js,jsx,ts,tsx,vue}'
  ],
  theme: {
    fontFamily: {
      inter: 'Inter, sans-serif'
    },
    extend: {
      colors: {
        primary: '#1164a3',
        'dark-purple': '#350d36',
        'light-purple': '#3f0e40',
        'purple-hover': '#350d36',
        'purple-border': '#522653',
        'light-purple-border': '#dcdcdc'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true })
  ],
}
