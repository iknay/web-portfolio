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
        secondary: "#333333",
        paper: "#EFEEEE",
        accent: '#A16F70',
        accent2: "#F1CCBF"
      },
      backgroundImage: (theme) => ({
        'gradient-primary': `linear-gradient(180deg, #F1CCBF 0%, #D2A0A1 34.17%, #B17982 72.71%, #A76D79 100%);
        `,
      }),
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
