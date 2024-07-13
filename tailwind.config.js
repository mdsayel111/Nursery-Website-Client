/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3A9943",
        "primary-10": "#4ea356",
        "primary-20": "#61ad69",
        "primary-30": "#75b87b",
        "primary-40": "#89c28e",
        "primary-50": "#9dcca1",
        "primary-60": "#b0d6b4",
        "primary-70": "#c4e0c7",
        "primary-80": "#d8ebd9",
        "primary-90": "#ebf5ec",
        secondary: "#333333"
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

