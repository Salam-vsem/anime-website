module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        yellow: {
          400: '#facc15',
        },
      },
      keyframes: {
        infiniteSlide: {
          '0%': {transform: 'translate3d(0, 0, 0)'},
          '100%': {transform: 'translate3d(-50%, 0, 0)'},
        },
      },
      animation: {
        infiniteSlide: 'infiniteSlide 5s linear infinite',
      },
    },
  },
  plugins: [],
}
