// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: {
    content: ["./src/**/*.tsx", "./public/index.html"],
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
