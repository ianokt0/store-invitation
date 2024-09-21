/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: "0.65rem",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        color: {
          accent: "#ae9166",
          primary: "#fbb520",
          secondary: "#784800",
          danger: "#ec1d24",
          light: "#fefefe",
          dark: "#222831",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
