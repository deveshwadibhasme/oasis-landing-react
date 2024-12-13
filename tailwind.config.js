const { transform } = require('motion');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%': { backgroundPositionX: '0' },
          '100%': { backgroundPositionX: '100rem' },
        },
        float: {
          '0%': {tranform :'translate(0,0)'},
          '100%': {tranform :'translate(200px,20px)'},
        },
      },
      animation :{
        floatSlow:'float 4s linear infinite alternate-reverse',
        floatMid:'float 6s linear infinite alternate-reverse'
      },
      colors: {
        'textBackground': 'rgb(108,92,231)',
        'textWhite': 'rgb(255,255,255)',
      },
      backgroundColor: {
        'bgBackground': 'rgb(108,92,231)',
        'bgGray': 'rgb(5,5,5)',
        'btnSlate': 'rgb(25,255,255)',
        'bgWhite': 'rgb(255,255,255)'
      },
    },
  },
  plugins: [],
}

