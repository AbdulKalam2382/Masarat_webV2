import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          navy: '#0D1B2A',
          blue: '#1A56DB',
          'blue-soft': '#3B82F6',
          ice: '#DBEAFE',
          pearl: '#F8FAFF',
          surface: '#F0F5FF',
          muted: '#64748B',
          'muted-dark': '#94A3B8',
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        outfit: ["var(--font-outfit)"],
        cairo: ["var(--font-cairo)"],
      },
    },
  },
  plugins: [],
};
export default config;
