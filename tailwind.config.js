/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) =>({
        'bg': "url('https://foodhub.modeltheme.com/wp-content/uploads/2020/02/foodhub-slider-main-food-v4.jpg?id=20741')"
        
      }),
      fontFamily: {
        Primary: ['"Merienda"', 'cursive'],
        Secondary: ['"Montserrat"', 'sans-serif']
      }
    },
  },
  plugins: [],
}

