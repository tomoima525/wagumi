/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  mode: "jit",
  darkMode: "class",
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
};
