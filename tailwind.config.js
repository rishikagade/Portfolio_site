/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'italian-roast': '#280B0F',
        'tamarind': '#361319',
        'rubine': '#6D3A3C',
        'boho': '#7B694E',
        'camel-coat': '#C6B39A',
        'cream': '#F7F4EF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'Manrope', 'Sora', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}