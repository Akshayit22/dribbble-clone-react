/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        colors:{
            bgcolor:'#f8f7f4'
        }
    },
  },
  plugins: [],
};
