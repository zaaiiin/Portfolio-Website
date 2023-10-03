/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      laptop: "1240px",
      xl: "1440px",
    },
    extend: {
      // colors: {
      //   primaryPink: "#e79696 ",
      //   primaryGrey: "#e1dad7",
      //   primaryBlack: "#273332",
      //   primaryYellow: "#FFC727",
      //   primaryGreen: "#286541",
      //   primaryBrown: "#AF958A",
      //   primaryPurple: "#B57C8A",
      //   primaryDarkBrown: "#4A3131",
      //   primaryDarkBlue: "#263238",
      //   primaryBeige: "#E5BFA4",
      // },
      colors: {
        primaryOrange: "#db7f67ff",
        primaryTan: "#dbbea1ff",
        primaryBrown: "#a37b73ff",
        primaryDarkBrown: "#3f292bff",
        primaryRoseRed: "#c43158ff",
      },
    },
  },
  plugins: [],
};
