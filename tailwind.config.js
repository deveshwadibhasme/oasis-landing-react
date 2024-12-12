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

