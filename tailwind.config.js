/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs:"200px",
        sm: "350px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      }
    },
    colors: {
      "sum-blue": "#216DD1",
      "sum-white": "#FFFFFF",
      "sum-gray": "#EEEDEB",
      "sum-black":"#000000",
      "sum-red":"#FF0000",
      "sum-green":"#008000"
      
    }
  },
  plugins: [require("tailwindcss-animate"),
  require('tailwindcss'),
  require('autoprefixer'),],
}

