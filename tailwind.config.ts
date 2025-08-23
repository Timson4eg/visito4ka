/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: { ggg: "#000" },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        grotesk: ['"Space Grotesk"', "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "marquee 8s linear infinite",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".fade-mask": {
          "-webkit-mask-image":
            "linear-gradient(to right, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
          "-webkit-mask-repeat": "no-repeat",
          "-webkit-mask-size": "100% 100%",
          "mask-image":
            "linear-gradient(to right, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
          "mask-repeat": "no-repeat",
          "mask-size": "100% 100%",
        },
      });
    },
  ],
};

export default config;
