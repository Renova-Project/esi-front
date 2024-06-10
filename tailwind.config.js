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
        heroGradientStart: "#011D34",
        heroGradientEnd: "#02111E",
        sectionBgGray: "#F8F8F8",
        btnGradientStart: "#0D4DA4",
        btnGradientEnd: "#3C7DD5",
        grayishBg: "#F8F8F8",
      },
      height: {
        heroSectionMobile: "50vh",
        heroSection: "calc(100vh - 126.36px)",
        heroPartnersMobile:"80vh",
        heroPartners:"calc(100vh - 126.77px)"
      },
    },
  },
  plugins: [],
};
