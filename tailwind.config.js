/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'screen-2xl': '1440px',
      },
      screens: {
        '2xl': '1440px',
      },
    },
  },
  plugins: [],
}
