import flowbiteReact from "flowbite-react/plugin/tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",


    ".flowbite-react/class-list.json",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        "sm": "2.5rem",
        "lg": "4rem",
        "xl": "2.5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        "mainColor": "#40C1BD",
        "darkGreen": "#236A68",
        "subColor": "#F6D776",
        "txtGray": '#676767',
        "hoverSubColor": "#E7BF46",
        "textColor": "#1B514F",
        "grayy": "#4C4C4C",
        "bluee": "#40C1BD",
        "txt-black": "#1F1F1F",
        "txt-op-0":"#696969",
        "input":"#F5F5F5",
        'redd': '#FF0000',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Set Poppins as the default font
        "poppins": ["Poppins", "sans-serif"],
        "inter": ["Inter", "sans-serif"],
        "roboto": ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        "side": "url('./src/assets/images/side.png')",
      },
    },
  },
  plugins: [flowbiteReact],
};