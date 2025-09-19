import { colors } from "@mui/material";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontSize: {
        10: "10px",
      },
      colors: {
        phat: {
          100: "red",
          200: "#F8F7FA",
        },
      },
    },
  },
  plugins: [],
};
