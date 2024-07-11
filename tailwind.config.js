/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8EC137"
      },
      screens: {
        'xs': '0px',  // Custom breakpoint for extra small screens
        'sm': '375px',
        'md': '426px',
        'lg': '769px',
        'xl': '1280px',
      },
    },
  },
  plugins: [],
}

