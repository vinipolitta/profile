/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        azul: {
          claro: '#C5DFFF',
          escuro: '#061E3C',
          hover: '#1057B0'
        }
      },
      fontFamily: {
        inter: ['Inter,', 'sans-serif']
      }
    },
  },
  plugins: [require("daisyui")],
}

