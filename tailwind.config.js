const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      borderRadius: {
        
      },
      fontFamily: {
        sans: ['"Outfit"', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        lg: "1200px",
        xl: "1900px",
      },
      backgroundImage: {
       
      },
    },
    colors: {
      white: "#FFFFFF",
      FloralWhite: "#FFFAF2",
      RootBrew: "#270A05"
      
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          margin: "0 auto",
          padding: "0 16px",
          "@screen md": {
            maxWidth: "768px",
            padding: "0 30px",
          },
          "@screen lg": {
            maxWidth: "1071px",
            padding: "0",
          },
          "@screen xl": {
            maxWidth: "1400px",
          },
        },
      });
    },
  ],
};
