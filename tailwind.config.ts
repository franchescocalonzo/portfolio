import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Corrected "sans-serif"
      },
      keyframes: {
        blur: {
          "0%": { filter: "blur(3px)", opacity: "0" },
          "100%": { filter: "blur(0)", opacity: "1" },
        },
      },
      animation: {
        blur: "blur 1.5s ease-out",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".font-cv11": {
          fontFeatureSettings: '"cv11"' /* This enables the single-story 'a' */,
        },
      };
      addUtilities(newUtilities);
    },
    function ({ addBase }) {
      addBase({
        "html, body, p, h1, h2, h3, h4, h5, h6, div, span, a": {
          "text-rendering": "optimizeLegibility",
          "-webkit-font-smoothing": "antialiased",
          "-moz-osx-font-smoothing": "grayscale",
        },
      });
    },
  ],
};
export default config;
