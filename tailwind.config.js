/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F5F5DC', // Subtle Beige
        text: '#4A7C59', // Muted Green
        accentGreen: '#81B29A', // Muted Green
        accentBrown: '#B08968', // Warm Brown
        secondaryBg: '#F3EAC2', // Subtle Beige
        secondaryText: '#A3B18A', // Muted Green
        highlight: '#D9C5B2', // Warm Brown
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], 
        merriweather: ['Merriweather', 'serif'], 
      },
    },
  },
  plugins: [],
}

