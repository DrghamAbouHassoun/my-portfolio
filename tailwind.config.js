import flowbite from "flowbite-react/tailwind";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  darkMode: "class",
  theme: {
    
    extend: {
      colors: {
        "primary-100": "#00f8f8",
        "primary-200": "#00baba",
        "primary-300": "#007c7c",
        "primary-400": "#003e3e",
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

