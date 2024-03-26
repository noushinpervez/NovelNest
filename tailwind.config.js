/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      textColor: '#191D30',
      primaryColor: '#100E2D',
      tagsBgColor: '#e5f8f4',
      tagsText: '#206c5e',
      hover: '#e5eefb',
      category: '#413463',
      categoryBg: '#f2ebff',
      rating: '#3c4d89',
      ratingBg: '#d4e7ff',
    },
  },
  plugins: [require("daisyui")],
}