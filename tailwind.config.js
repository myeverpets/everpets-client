import { require } from 'flowbite/plugin';
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        rede: '#E62C36',
        blacke: '#191919', 
      },
      dropShadow: {
        lgL: [
          '0 10px 8px rgb(255, 255, 255, 0.04)',
          '0 4px 3px rgb(255, 255, 255, 0.1)',
        ],
      }, 
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
      darkMode: 'class',
    },
  },
  plugins: [require('flowbite/plugin')],
};
