/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bgColor: "#f9f9fa",
        white: "#fff",
        secondary: "#eaecf0",
        rksWhite: "#fff",
        primary: "#07beb8",
        disablePrimary: "#68d8d6",
      },
    },
  },
  plugins: [],
};
