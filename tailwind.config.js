/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        honolulu: "#0061B1",
        darkblue: "#0C1F38",
        crayola: "#1B76FF",
        grey: "#B3B3B3",
        darkgrey: "#5D5D5D",
      },
    },
  },
  plugins: [],
};
