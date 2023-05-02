module.exports = {
  content: [
    "storyblok/**/*.{vue,js}",
    "components/**/*.{vue,js}",
    "pages/**/*.vue",
  ],
  theme: {
    fontFamily: {
      sans: "Nunito, sans-serif",
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // require("@tailwindcss/line-clamp"),
    require("prettier-plugin-tailwindcss"),
  ],
  tailwindConfig: "./styles/tailwind.config.js",
};
