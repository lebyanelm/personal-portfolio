/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        theme: "#FF5100",
        background: "#FFFFFF",
        text: "#000000",
      },
      fontFamily: {
        sans: ["Signika Negative", "Arial", "sans-serif"],
        serif: ["Libre Baskerville", "serif"],
        icon: ["Long Cang"],
      },
    },
  },
  plugins: [],
};
