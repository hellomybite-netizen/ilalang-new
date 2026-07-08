/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Poppins", "sans-serif"],
      },
      colors: {
        brand: {
          beige: "#E3DDD1",
          earth: "#79891F",
          lime: "#77A22B",
          dark: "#0F2216",
          gray: "#595959",
          border: "#D6D0C1",
        }
      }
    },
  },
  plugins: [],
}
