/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      screens: {
        'med':'910px',
        'medi':'767px',
        'xs': '400px',
        '2xs': '300px',
      },
    },
  },
  plugins: [],
}

