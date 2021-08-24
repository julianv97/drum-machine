module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "340px",
      // => @media (min-width: 640px) { ... }

      md: "780px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      russo: "Russo One",
    },
    extend: {
      colors: {
        "regal-blue": "#3456FF",
        "regal-gray": "F8F8FA",
        "regal-white": "#EEEDF0",
        "regal-black": "#17181F",
        "regal-purple": "#6C72CB",
        "regal-pink": "#CB69B1",
      },
      spacing: {
        22: "5.5rem",
        18: "4.5rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
