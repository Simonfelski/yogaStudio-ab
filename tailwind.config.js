/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      'primary': '#d5c6b3',
      'secondary': '#8d6b5f',
      'button': '#713132',
      'button-hover':'#bb9d85'
      
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.perspective-1000': {
          perspective: '1000px',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}

// #e4e1dc