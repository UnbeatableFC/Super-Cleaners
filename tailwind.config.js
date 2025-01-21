/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-20": "#1FC8FF",
        "primarybg-100": "#2C55FF",
        "bluelogo-500": "#2646DA",
        "blueicon-500": "#2E56FE",
      },

      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
      },
    },
  },
  plugins: [],
}

