import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        aurora: {
          cream: "#FBF7EF",
          linen: "#F4E8D9",
          terracotta: "#B96044",
          olive: "#66724E",
          gold: "#C59A54",
          ink: "#27231F"
        }
      },
      boxShadow: {
        soft: "0 18px 45px rgba(72, 50, 33, 0.10)",
        glow: "0 20px 60px rgba(185, 96, 68, 0.18)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"]
      }
    }
  },
  plugins: []
};

export default config;
