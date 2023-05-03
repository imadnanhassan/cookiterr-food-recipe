/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) =>({
        'bg': "url('https://foodhub.modeltheme.com/wp-content/uploads/2020/02/foodhub-slider-main-food-v4.jpg?id=20741')",
        'bg1': "url('https://images.unsplash.com/photo-1515821937231-c43ad7ed05fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')"
        
      }),
      fontFamily: {
        Primary: ['"Merienda"', 'cursive'],
        Secondary: ['"Montserrat"', 'sans-serif']
      }
    },
  },
  plugins: [],
}

