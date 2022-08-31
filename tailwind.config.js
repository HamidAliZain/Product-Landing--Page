/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "769px",
      lg: "976px",
      xl: "1440px",
    }, 
    extend: {
      backgroundImage :{
        'dubai':" url('../img/dubai-tower.jpeg')",
        'london':" url('../img/london.jpg')",
        'paris':" url('../img/paris.jpg')",
        'grl':" linear-gradient(to right, #4364F7,#6FB1FC)",
         'white':" linear-gradient(to top, #6FB1FC,#6FB1FC)",
         'whiteBLue':" linear-gradient(to right, #6FB1FC,#4364F7)",

      }
    },
  },
  plugins: [],
};
