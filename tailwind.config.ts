import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0A0A0F",
        card: "#13131A",
        "card-hover": "#1A1A24",
        "accent-blue": "#4F6EF7",
        "accent-mint": "#00E5A0",
        "text-primary": "#F0F0F5",
        "text-muted": "#8B8B9E",
        "border-color": "#2A2A3A",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(79, 110, 247, 0.15), 0 18px 60px rgba(0, 0, 0, 0.35)",
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
