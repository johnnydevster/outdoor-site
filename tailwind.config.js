const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      gray: colors.slate,
    },
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.yellow,
      },
    },
  },
  plugins: [],
};
