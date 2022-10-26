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
        paper: "#EFEEEE",
        background: "#1E1E1E"

      }
    },
  },
  plugins: [],
}
