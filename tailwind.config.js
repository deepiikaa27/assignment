/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        "light-cream": "#FFF0DCAB",
        "soft-blue": "#EDF6FFB2",
      },
    },
  },
  plugins: [],
};
