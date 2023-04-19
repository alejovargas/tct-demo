import { apiPlugin } from "@storyblok/vue";

export default defineNuxtConfig({
  css: ["@/assets/css/roboto.css"],
  modules: [
    [
      "@storyblok/nuxt",
      {
        accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
        // accessToken: "xr4OhJ2GGQ6Oco2ugxQn0Att",
        use: [apiPlugin],
        apiOptions: { region: "us" },
      },
    ],
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
  ],
  i18n: {
    strategy: "prefix_except_default",
    locales: ["en", "es"],
    defaultLocale: "en", // default locale
  },
  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },
});
