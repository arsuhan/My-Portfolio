/** @type {import('tailwindcss').Config} */
// tailwind.config.js

// tailwind.config.js


export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      sx: '425px',
      xx: '375px',
      xs: '320px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1920px',
    },
  },
  plugins: [require('flowbite/plugin')],
}
