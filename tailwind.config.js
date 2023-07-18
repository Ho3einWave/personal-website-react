/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      rubik: ["rubik", "sans-serif"],
      mono: ["IBM Plex Mono", "sans-serif"],
      hand: ["Caveat", "sans-serif"]
    },
    extend: {
      colors: {
        navbar: "#1B1B1B",
        boxes: "#1E1E1E",
        primary: "#0080F5"
      }
    },
  },
  plugins: [],
}

