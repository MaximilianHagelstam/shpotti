const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
  },
  theme: {
    colors: {
      brand: "#df4716",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
    },
    extend: {
      fontFamily: {
        sans: ["Poppins"],
      },
    },
  },
  plugins: [],
};
