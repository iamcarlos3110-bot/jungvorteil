import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Native Olive Green Palette (Verde Oliva)
        olive: {
          50: "#F4F6F0",
          100: "#E5ECE0",
          200: "#CEDDC2",
          300: "#ADC797",
          400: "#8EAC73",
          500: "#708F52",
          600: "#556F3B", // Authentic Olive Green
          700: "#43592E", // Deep Forest Olive
          800: "#364725",
          900: "#2A381D",
          950: "#131C0D",
        },
        // Map indigo to olive so all components automatically use Olive Green
        indigo: {
          50: "#F4F6F0",
          100: "#E5ECE0",
          200: "#CEDDC2",
          300: "#ADC797",
          400: "#8EAC73",
          500: "#708F52",
          600: "#556F3B", // Primary Olive
          700: "#43592E",
          800: "#364725",
          900: "#2A381D",
          950: "#131C0D",
        },
        // Deep Black & Carbon Neutral Palette (Negro profundo)
        slate: {
          50: "#F7FAF5", // Soft olive-tinted white
          100: "#EDF2EA",
          200: "#DCE3D6",
          300: "#C2CCC0",
          400: "#8A9787",
          500: "#5D6B5B",
          600: "#455143",
          700: "#303A2E",
          800: "#1D241C",
          900: "#111610", // Elegant rich black
          950: "#090D08", // Pure deep black
        },
      },
    },
  },
  plugins: [],
};
export default config;
