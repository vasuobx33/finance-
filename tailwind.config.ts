import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        terminal: {
          bg: "#0A0E14",
          panel: "#0F1621",
          panel2: "#131B29",
          border: "#1E2A3A",
          blue: "#3B82F6",
          emerald: "#10B981",
          amber: "#F59E0B",
          red: "#EF4444",
          text: "#E2E8F0",
          muted: "#7C8CA5",
        },
      },
      fontFamily: {
        display: ["'IBM Plex Sans'", "system-ui", "sans-serif"],
        mono: ["'IBM Plex Mono'", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;
