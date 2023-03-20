/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "375px",
      // => @media (min-width: 375px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
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

        // Primary: "#D6E4F0" or "#F2F4F8"
        // Secondary: "#C4D0E0" or "#E5E9F2"
        // Tertiary: "#AFBCCF" or "#D8E0F2"
        // Fourth: "#B9C7DC" or "#E3EAF6"
      },
    },
  },
  plugins: [require("flowbite/plugin"), "./node_modules/flowbite/**/*.js"],
};
