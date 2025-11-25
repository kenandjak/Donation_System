/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  screens: {
    ms: "570px", // ms = mobile size
  },
  fontFamily: {
    sans: ["Inter", "sans-serif"],
    kdam: ['"Kdam Thmor Pro"', "sans-serif"],
    jua: ["Jua", "sans-serif"],
  },
  plugins: [],
};
