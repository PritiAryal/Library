/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  //   plugins: [],
  // };
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar": {
          "::-webkit-scrollbar": {
            width: "8px",
            height: "8px",
          },
          "::-webkit-scrollbar-track": {
            background: "#f1f1f1",
            borderRadius: "4px",
          },
          "::-webkit-scrollbar-thumb": {
            background: "#888",
            borderRadius: "4px",
          },
          "::-webkit-scrollbar-thumb:hover": {
            background: "#555",
          },
          "::-webkit-scrollbar-corner": {
            background: "#f1f1f1",
          },
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
