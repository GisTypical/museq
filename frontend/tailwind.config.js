module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        heading: ["Nunito Sans", "sans-serif"],
      },
      colors: {
        russianviolet: "#1C0436",
        violetcard: "#2D134A",
        violetinput: "#3E225D",
        purple: "#6C08A6",
        chromeyellow: "#F29E00",
        selectiveyellow: "#FFB700",
        hotmagenta: "#FF16CE",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
