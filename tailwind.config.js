/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'servitec-cyan': '#22d3ee',
        'servitec-dark': '#0f172a',
      },
    },
  },
  plugins: [],
}
