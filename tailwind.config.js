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
          1 : "#D2D3EA",
          2 : "#F9F9FF",
          3 : "#F6F8FF",
          4 : "#F5F6F6",
          8 : "#3B67DC",
        },
        'purple': {
          1 : '#646BEE',
          2 : '#dcc9f5',
          4 : '#5437A1',
        },
        'gray' : {
          1: '#F1F1F1',
          2: '#F0EEFE',
          3: '#F5F7FA',
          4: '#F2F2FD',
          9: '#6D6D6D',
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

