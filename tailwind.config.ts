/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",    // for App Router
    "./pages/**/*.{js,ts,jsx,tsx}",  // for Pages Router (optional)
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-open-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")], // required for ShadCN UI
};
