import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#EEF5FF",
          100: "#D8E8FF",
          600: "#184A82",
          800: "#102F55",
          900: "#0B1F3A",
          950: "#061326",
        },
        cyan: {
          300: "#66F1FF",
          400: "#00E5FF",
          500: "#00BBD4",
        },
        steel: {
          100: "#F4F7FB",
          200: "#E6EBF3",
          300: "#D7DEEA",
          400: "#BFC7D5",
          600: "#67748A",
          800: "#263447",
        },
        success: "#18B27A",
        signal: "#FFB020",
      },
      boxShadow: {
        glow: "0 0 34px rgba(0, 229, 255, 0.25)",
        enterprise: "0 24px 80px rgba(6, 19, 38, 0.16)",
      },
      backgroundImage: {
        "enterprise-grid":
          "linear-gradient(rgba(0,229,255,.09) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,.09) 1px, transparent 1px)",
        "radial-cyan":
          "radial-gradient(circle at 50% 0%, rgba(0,229,255,.22), rgba(6,19,38,0) 38%)",
      },
      keyframes: {
        scan: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        scan: "scan 6s linear infinite",
        pulseGlow: "pulseGlow 3.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
