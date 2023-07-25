/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        woodsmoke: {
          50: "#f5f7f8",
          100: "#e0e3e7",
          200: "#c0c8cf",
          300: "#99a4af",
          400: "#747f8d",
          500: "#596473",
          600: "#464f5b",
          700: "#3b414a",
          800: "#32353d",
          900: "#2c3035",
          950: "#0a0b0d",
        },
        cinnabar: {
          50: "#fef3f2",
          100: "#fee4e2",
          200: "#fecdca",
          300: "#fbaba6",
          400: "#f77a72",
          500: "#ec4237",
          600: "#da3328",
          700: "#b8261d",
          800: "#98241c",
          900: "#7e241e",
          950: "#440e0b",
        },
        azure: {
          50: "#f4f6fb",
          100: "#e7ecf7",
          200: "#cad6ed",
          300: "#9cb3dd",
          400: "#668aca",
          500: "#436cb4",
          600: "#375da9",
          700: "#29437b",
          800: "#253a67",
          900: "#243456",
          950: "#182139",
        },
        "oxford-blue": {
          50: "#f6f7f9",
          100: "#eceef2",
          200: "#d4d8e3",
          300: "#afb6ca",
          400: "#8490ac",
          500: "#647193",
          600: "#505b79",
          700: "#414963",
          800: "#3c4358",
          900: "#333847",
          950: "#22252f",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
