/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        mainYellow: {
          500: "#FFCF40",
          700: "#DFA700",
        },
        mainBlack: {
          500: "#000000",
        },
        ashGray: {
          500: "#36454F",
        },
      },
      fontSize: {
        "12xl": "16rem",
        "13xl": "18rem",
        "14xl": "20rem",
        "16xl": "24rem",
        "20xl": "32rem",
      },
    },
    fontFamily: {
      display: ["AnonymousPro"],
      body: ["DMSans"],
    },
  },
};
