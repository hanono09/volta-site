import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0A0D", // base background
          950: "#070709",
          900: "#0A0A0D",
          800: "#131318",
          700: "#1A1A21",
          600: "#232329",
          500: "#2E2E36",
        },
        bone: {
          DEFAULT: "#F4F4F2", // primary text on dark
          muted: "#93939D",
          dim: "#6B6B74",
        },
        volt: {
          DEFAULT: "#6E6BFF", // signature electric violet-blue
          50: "#F1F0FF",
          100: "#E3E2FF",
          300: "#ABA8FF",
          400: "#8784FF",
          500: "#6E6BFF",
          600: "#4F4BFF",
          700: "#3A36E0",
        },
        mint: {
          DEFAULT: "#00E5A0", // secondary accent, used sparingly
          400: "#2EEFB3",
          600: "#00B57F",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      maxWidth: {
        container: "1280px",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(244,244,242,0) 0%, rgba(10,10,13,1) 90%)",
        "radial-volt":
          "radial-gradient(circle at 50% 0%, rgba(110,107,255,0.18), transparent 60%)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        "dash-travel": {
          to: { strokeDashoffset: "0" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "pulse-soft": "pulse-soft 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
