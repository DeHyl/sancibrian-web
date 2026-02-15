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
        // Paleta "Aviación Vintage Tropical"
        arena: {
          DEFAULT: "#F5F0E8",
          light: "#FDFBF7",
        },
        caribe: {
          DEFAULT: "#0A4D68",
          light: "#0E6B8F",
          dark: "#063342",
        },
        selva: {
          DEFAULT: "#1A5D1A",
          light: "#238A23",
          dark: "#0F3A0F",
        },
        coral: {
          DEFAULT: "#E8734A",
          light: "#FF9B73",
          dark: "#C85A32",
        },
        bronze: {
          DEFAULT: "#B8860B",
          light: "#D4AF37",
          dark: "#9B7609",
        },
        perla: "#FEFEFE",
        oscuro: "#1A1A1A",
      },
      fontFamily: {
        sans: [
          "Avenir Next",
          "Avenir",
          "var(--font-montserrat)",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "sans-serif",
        ],
        display: [
          "Avenir Next",
          "Avenir",
          "var(--font-montserrat)",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-tropical": "linear-gradient(135deg, #0A4D68 0%, #1A5D1A 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "float": "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
