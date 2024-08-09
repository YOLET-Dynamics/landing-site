// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  modules: ["@nuxtjs/tailwindcss", "nuxt-svgo", "@nuxt/content", "@nuxt/image"],
  devtools: { enabled: true },
  css: [
    "~/assets/css/global.css",
    "~/assets/css/button.css",
  ],
  svgo: {
    autoImportPath: "./assets/svgs/",
  },
});
