/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        glow: "0 10px 40px rgba(168,85,247,0.25)",
      },
      backgroundImage: {
        'radial-faint': 'radial-gradient(closest-side, rgba(168,85,247,0.25), transparent)',
      }
    },
  },
  plugins: [],
}
