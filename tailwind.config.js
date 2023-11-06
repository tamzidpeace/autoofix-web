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
          2 : '',
        }
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}

