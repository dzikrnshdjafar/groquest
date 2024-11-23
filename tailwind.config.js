/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'primary': '#171717',
      'secondary': '#6ee7b7',
      'sechov': '#10b981',
      'emerald' : '#d1fae5',
      'neutral' : '#262626',
      'slate': '#e2e8f0',
      'red': '#fca5a5',
      'redhov': '#f87171'
    },},
  },
  plugins: [],
}