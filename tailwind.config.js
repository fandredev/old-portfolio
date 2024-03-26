/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Roboto", "sans-serif"],
        secondary: ["Kumbh Sans", "sans-serif"],
        tertiary: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
