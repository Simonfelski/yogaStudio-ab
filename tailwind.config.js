/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      'primary': '#713132',
      'secondary': '#9f7c65',
      'third': '#e6dcd2',
      'fourth': '#c6b1a6',
      'section': '#e6dcd2',
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