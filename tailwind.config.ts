import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Oswald", "sans-serif"],
        space: ["var(--font-space)", "Space Grotesk", "sans-serif"],
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "monospace"],
      },
      colors: {
        canvas: "var(--surface-canvas)",
        surface: {
          DEFAULT: "var(--surface-card)",
          interactive: "var(--surface-interactive)",
          elevated: "var(--surface-elevated)",
        },
        border: "var(--border-hairline)",
        ink: {
          DEFAULT: "var(--text-primary)",
          muted: "var(--text-secondary)",
          subtle: "var(--text-muted)",
        },
        terracotta: {
          DEFAULT: "#C85A32",
          hover: "#B24B25",
        },
        sage: {
          DEFAULT: "var(--accent-sage)",
          bg: "var(--accent-sage-bg)",
        },
        sand: {
          light: "#F4F0EB",
          surface: "#EAE4DA",
          border: "#DFD5C6",
          dark: "#161617",
          darkSurface: "#1F1E1D",
          darkBorder: "#2E2C29",
        },
      },
    },
  },
  plugins: [],
};

export default config;
