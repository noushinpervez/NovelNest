/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blob: 'blob 19s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)'
          },
          '33%': {
            transform: 'translate(80%, -15%) scale(1.2)'
          },
          '66%': {
            transform: 'translate(-80%, 15%) scale(0.8)'
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)'
          },
        },
      },
    },
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
      purple: 'rgb(216 180 254)',
      pink: 'rgb(249 168 212)',
      yellow: 'rgb(253 224 71)',
      green: 'rgb(134 239 172)',
    },
  },
  plugins: [require("daisyui")],
}