/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./*.html", "./pages/*.html"],
   theme: {
      extend: {},
      screens: {
         'smm': "320px",
         'sm': "640px",
         'md': "768px",
         'lg': "1024px",
         'xl': "1280px",
         '2xl': "1536px",
      },
   },
   plugins: [],
}
