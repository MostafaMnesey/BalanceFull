import flowbiteReact from "flowbite-react/plugin/tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ".flowbite-react\\class-list.json",
  ],
  theme: {
    extend: {
      colors: {
        'grayy': '#4C4C4C',
        'bluee': '#40C1BD',
      },
      backgroundImage: {
        side: "url('./src/assets/images/side.png')",
      },
      fontFamily: {
        'poppins': ["Poppins", "sans-serif"],
        'roboto': ["Roboto", "sans-serif"],
      },
    },
    plugins: [flowbiteReact],
  },
};
