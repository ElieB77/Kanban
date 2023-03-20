/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      light: "#FFFFFF",
      dark: "#000112",
      "dark-gray": "#2B2C37",
      "darker-gray": "#20212C",
      "medium-gray": "#3E3F4E",
      "light-gray": "#828FA3",
      "lighter-gray": "#E4EBFA",
      "lightest-gray": "#F4F7FD",
      blue: "#635FC7",
      purple: "#A8A4FF",
      red: "#EA5555",
      "light-red": "#FF9898",
    },
    fontSize: {
      xsm: "0.75rem",
      sm: "0.8125rem",
      base: "0.9375rem",
      xl: "1.125rem",
      "2xl": "1.5rem",
    },
  },
  plugins: [],
};
