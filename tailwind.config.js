module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Lato'],
      },
      colors: {
        primary: '#ffb000',
        primaryWithOpacity: 'rgba(255, 176, 0, 0.5)',

        // Light Mode
        background: '#ffecc7',
        lightgrey: '#f4f4f5',

        // Dark Mode
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
