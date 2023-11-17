const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: { background: "#F5F5F5" }, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: { background: "#020617" }, // dark theme colors
        },
      },
    }),
  ],
};
