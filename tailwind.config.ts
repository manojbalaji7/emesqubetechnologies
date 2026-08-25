import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef7ff",
          100: "#d8edff",
          500: "#1677d2",
          600: "#0f63b2",
          700: "#0b4d8c",
          900: "#07335f"
        }
      },
      boxShadow: {
        soft: "0 18px 50px rgba(7, 51, 95, 0.12)"
      }
    }
  },
  plugins: []
};
export default config;
