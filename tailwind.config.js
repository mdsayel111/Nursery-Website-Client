/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8EC137",
        "primary-10": "#98c74c",
        "primary-20": "#a4cd60",
        "primary-30": "#afd474",
        "primary-40": "#bbda88",
        "primary-50": "#c6e09c",
        "primary-60": "#d1e6af",
        "primary-70": "#ddecc3",
        "primary-80": "#e8f3d7",
        "primary-90": "#f4f9eb",
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

