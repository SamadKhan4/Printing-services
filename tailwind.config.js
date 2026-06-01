/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#080808",
        coal: "#141414",
        smoke: "#f5f5f3",
        line: "#e8e6df",
        brand: {
          red: "#ef233c",
          blue: "#00a8ff"
        }
      },
      fontFamily: {
        display: ["Poppins", "Inter", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 60px rgba(8, 8, 8, 0.12)"
      }
    }
  },
  plugins: []
};
