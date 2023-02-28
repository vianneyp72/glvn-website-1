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
    extend: {
      fontFamily: {
        sans: ["var(--font-robo)"],
      },
      colors: {
        primary: "#01081d",
        secondary: "#111a3b",
        tertiary: "#051635",
        fourth: "#14264e",
        primarytext: "#87c3f6",
        onhover: "#2f6dc8",
      },
    },
  },
  plugins: [],
};
