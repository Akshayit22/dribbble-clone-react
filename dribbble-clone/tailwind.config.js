/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgcolor: "#f8f7f4",
        yellowbg: "rgba(var(--yellowbg))",
      },
      animation: {
        "loop-scroll-hero": "loop-scroll 100s linear infinite",
        "loop-scroll-footer": "loop-scroll 60s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-2000%)" },
        },
      },
    },
  },
  plugins: [],
};
