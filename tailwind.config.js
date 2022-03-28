module.exports = {
  mode: "jit",
  purge: {
    content: ["./src/**/*.tsx", "./public/index.html"],
  },
  theme: {
    colors: {
      red: "#df4716",
      white: "#ffffff",
      black: "#000000",
    },
    extend: {
      fontFamily: {
        sans: ["Poppins"],
      },
    },
  },
  plugins: [],
};
