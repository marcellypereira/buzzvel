/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#581C87",
        dark: "#0F172A",
        blue: "#0369A1",
        lightGray: "#FFFFFF",
        orange: "#D97706",
        yellow: "#FCD34D",
        brown: "#78350F"
      }
    },
  },
  plugins: [],
}

