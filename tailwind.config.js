/** @type {import('tailwindcss').Config} */
export default {
  content: [    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {

      keyframes: {
        shakeY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateY(-10px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateY(10px)' },
        }
      },
      animation: {
        shakeY: 'shakeY 5s ease-in-out infinite',
      }
    



    },
  },
  plugins: [
   
],

  

}

