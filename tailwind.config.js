/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F08080',
        secondary: '#333333',
        paper: "#f8f8f8",

      }
    },
  },
  plugins: [],
}
