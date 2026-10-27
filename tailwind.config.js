/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          50: '#fdf8f9',
          100: '#fbe8ec',
          200: '#f7d5dc',
          300: '#f2b9c3',
          500: '#e07a90',
          600: '#cc5972',
        },
        maroon: {
          800: '#5c1d30',
          900: '#4a1525',
          950: '#320d18',
        },
        gold: {
          400: '#e5c158',
          500: '#d4af37',
          600: '#b89728',
          700: '#96781e',
        },
        ivory: {
          50: '#fffef9',
          100: '#fbf8ee',
          200: '#f5efdc',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
