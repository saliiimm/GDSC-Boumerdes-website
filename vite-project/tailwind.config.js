/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xs": "300px",
        "xs": "400px",
        "medi": "767px",
        "med": "910px",
        "lg": "1440px",
      },
    },
  },
  plugins: [],
};
