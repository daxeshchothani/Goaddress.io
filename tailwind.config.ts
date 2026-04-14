import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F7F9FD",
        card: "#FFFFFF",
        "card-hover": "#F2F6FC",
        "accent-blue": "#4F6EF7",
        "accent-mint": "#00E5A0",
        "text-primary": "#111827",
        "text-muted": "#5B6473",
        "border-color": "#D6DFEB",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(79, 110, 247, 0.12), 0 16px 40px rgba(79, 110, 247, 0.12)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        pulseGlow: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.9" },
          "50%": { transform: "scale(1.02)", opacity: "1" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "pulse-glow": "pulseGlow 2.2s ease-in-out infinite",
      },
      backgroundImage: {
        "dot-grid": "radial-gradient(circle at 1px 1px, rgba(139, 139, 158, 0.28) 1px, transparent 0)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
