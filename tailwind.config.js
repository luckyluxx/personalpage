/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./assets/*.{scss,css}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif_Customs: ['Gloock', 'serif'],
        sans_Customs: ['Carlito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}