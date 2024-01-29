/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        gainsboro: "#e5e7eb",
        "slate-900": "#0f172a",
        "slate-400": "#94a3b8",
        "slate-100": "#f1f5f9",
        "slate-500": "#64748b",
        "slate-700": "#334155",
        "slate-200": "#e2e8f0",
        lightgray: "#cbd5e1",
      },
      spacing: {},
      fontFamily: {
        large: "Inter",
      },
      borderRadius: {
        "10xs": "3px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      xs: "12px",
      lg: "18px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
