/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(230,78,78)",
        grey: "rgb(189,186,186)",
        dark: "#1a1a1a"
      },
      fontFamily: {
        sbold: ["Satoshi-Bold", "sans-serif"],
        smedium: ["Satoshi-Medium", "sans-serif"],
        sregular: ["Satoshi-Regular", "sans-serif"],
        slight: ["Satoshi-Light", "sans-serif"]
      }
    }
  },
  plugins: []
};
