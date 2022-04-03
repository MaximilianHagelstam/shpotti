module.exports = {
  mode: "jit",
  purge: {
    content: ["./src/**/*.tsx", "./public/index.html"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
