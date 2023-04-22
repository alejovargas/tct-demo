import { apiPlugin } from "@storyblok/vue";

export default defineNuxtConfig({
  css: ["@/assets/css/nunito.css"],
  modules: [
    [
      "@storyblok/nuxt",
      {
        accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
        use: [apiPlugin],
        apiOptions: { region: "us" },
      },
    ],
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
  ],
  i18n: {
    strategy: "prefix_except_default",
    locales: ["en", "es", "ht"],
    defaultLocale: "en", // default locale
  },
  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },
});
