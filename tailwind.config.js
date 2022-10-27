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
        secondary: "#1E1E1E",
        paper: "#EFEEEE",
        tertiary: '#333333',

      }
    },
  },
  plugins: [],
}
