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
      sm: "500px",
    },
    extend: {
      colors: {
        pink: "#e79696 ",
        primary2: "#7b4397  ",
      },
    },
  },
  plugins: [],
};
