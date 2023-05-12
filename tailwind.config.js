/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    minWidth: {
      '550': '550px',
    }
  },
  plugins: [],
};
