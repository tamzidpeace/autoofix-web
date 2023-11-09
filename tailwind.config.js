/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'blue' : {
          1 : "",
          2 : "",
        },
        'purple': {
          1 : '#646BEE',
          4 : '#5437A1',
        },
        'gray' : {
          1: '#F1F1F1',
          2: '#F0EEFE',
          5: '#63636B',
          6: '#555555',
          7: '#2B2B2B',
          8: '#232323'
        },
        'yellow' : {
          7 : '#F79009'
        }
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}

