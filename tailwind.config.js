/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-brown": "#4C3D3D",
        red: "#C53C3A",
        blue: "#50A3AB",
        "dark-blue": "#1D313C",
        "light-brown": "#FFD95A",
        "yellow-mencret": "#C07F00",
      },
      backgroundImage: {
        "patern-1": "url(/images/patern-1.png)",
        "patern-2": "url(/images/patern-2.png)",
      },
      fontFamily: {
        lily: "Lily Script One",
        rubik: "Rubik",
        inter: "Inter",
      },
    },
  },
  plugins: [],
};
