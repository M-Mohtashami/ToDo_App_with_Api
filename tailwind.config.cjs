/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './main.js',
    './App.js',
    './src/**/*.js',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
};
