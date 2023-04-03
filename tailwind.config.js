module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.vue", "./components/**/*.vue"],
  theme: {
    colors: {
      bgColor: "#431407",
      textW: "#f3f4f6",
      textB: "#71717a",
      textTitle: "",
    },
    screens: {
      mobile: "640px",
      tablet: "1024px",
      pc: "1280px",
    },
  },
  variants: {},
  plugins: [],
};
