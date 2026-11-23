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
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "monospace"],
        display: ["var(--font-unbounded)", "var(--font-inter)", "sans-serif"],
      },
      colors: {
        canvas: "var(--surface-canvas)",
        card: {
          DEFAULT: "var(--surface-card)",
          interactive: "var(--surface-interactive)",
          elevated: "var(--surface-elevated)",
        },
        hairline: "var(--border-hairline)",
        accent: {
          DEFAULT: "var(--accent-primary)",
          hover: "var(--accent-primary-hover)",
          cyan: "var(--accent-cyan)",
          cream: "var(--accent-cream)",
        },
      },
    },
  },
  plugins: [],
};

export default config;
