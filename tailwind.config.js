/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': {max: '575px'},
      'sm': '768px',
      'md': '992px',
      'lg': '1200px',
      'xl': '1400px',
    },
    extend: {
    },
  },
  plugins: [],
}

