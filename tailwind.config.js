/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 👇 Add CSS variables
        opensans: ["var(--font-opensans)"],
        raleway: ["var(--font-raleway)"],
      },
      colors: {
        darkBlue: "hsl(217, 28%, 15%)",
        darkBlue1: "hsl(218, 28%, 13%)",
        darkBlue2: "hsl(216, 53%, 9%)",
        darkBlue3: "hsl(219, 30%, 18%)",
        accentCyan: "hsl(176, 68%, 64%)",
        accentBlue: "hsl(198, 60%, 50%)",
        lightRed: "hsl(0, 100%, 63%)",
      },
      backgroundImage: (theme) => ({
        "logo-dark-mode": "url('/logo-dark-mode.svg')",
        "logo-light-mode": "url('/logo-light-mode.svg')",
        "curvy-dark-mode": "url('/bg-curvy-dark-mode.svg')",
        "curvy-light-mode": "url('/bg-curvy-light-mode.svg')",
      }),
    },
  },
  variants: {
    extend: {
      backgroundImage: ["dark"],
    },
  },
  plugins: [],
};
