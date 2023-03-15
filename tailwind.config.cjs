/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        Hero: "url('./src/assets/Background-main.webp')",
      },
    },
  },
  plugins: [],
}
