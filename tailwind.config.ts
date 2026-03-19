import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050816",
        panel: "#0b1120",
        line: "rgba(255,255,255,0.10)",
        glow: {
          mint: "#8FF2C5",
          ice: "#C9D7FF",
          pearl: "#F5F7FB",
        },
      },
      fontFamily: {
        sans: ["Avenir Next", "Satoshi", "Inter", "Segoe UI", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 80px rgba(4, 10, 24, 0.45)",
        glow: "0 0 0 1px rgba(255,255,255,0.08), 0 30px 80px rgba(143, 242, 197, 0.10)",
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at top, rgba(255,255,255,0.08), transparent 36%), linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
