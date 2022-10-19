/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": {
          DEFAULT: "#646cff",
          light: "#747bff"
        }
      }
    },
  },
  plugins: [],
}
