/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {    
      colors: {
        "rede": "#E62C36",
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      }
    },


  },
  plugins: [
    require('flowbite/plugin')
  ],
}

