/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  
  theme: {
    extend: {
      colors : {
          colorMain : '#ca9c2e',
          secundary: '#242424',
          third: '#1A4D2E',
          fourth: '#FAF3E3'        
      },
      
      backgroundImage: theme => ({
          'hero': "url('/hero.jpg')",  
          'hero2': "url('/hero2.jpg')"                     
         })
  },
  },
  plugins: [],
}
