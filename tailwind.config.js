module.exports = {
  mode: "jit",
  purge: {
    content: ["./src/**/*.tsx", "./public/index.html"],
  },
  theme: {
    colors: {
      brand: "#df4716",
    },
    extend: {
      fontFamily: {
        sans: ["Poppins"],
      },
    },
  },
  plugins: [],
};
