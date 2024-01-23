/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#272727',
        secondary: "#F25477",
        paper: "#fff",
      },
      fontFamily: {
        "rubik": ["Rubik", "sans-serif"],
      },
      fontSize: {
        '6xl': '96px',
        '5xl': '80px',
        '4xl': '72px',
        '3xl': '64px',
        '2xl': '56px',
        'xl': '40px',
        'lg': '32px',
        'md': '24px',
        'sm': '16px'
      },
      screens: {
        'sm': '319px',
        // => @media (min-width: 319px) { ... }
  
        'md': '481px',
        // => @media (min-width: 481px) { ... }
  
        'lg': '1201px',
        // => @media (min-width: 1201px) { ... }
  
        'xl': '1601px',
        // => @media (min-width: 1601px) { ... }
  
    },
    },
    
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
