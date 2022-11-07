/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  
  theme: {
    extend: {
      colors : {
          colorMain : '#03506F',
          secundary: '#06283D',
          third: '#90E0EF',
          fourth: '#CAF0F8'        
      },
      
      backgroundImage: theme => ({
          'hero': "url('/hero.jpg')",  
          'hero2': "url('/hero2.jpg')"                     
         })
  },
  },
  plugins: [],
}
