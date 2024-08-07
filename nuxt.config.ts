// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxt/ui",
    "@nuxtjs/color-mode",
    "@nuxt/content",
    "@nuxt/image-edge",
    "@vueuse/nuxt",
  ],

  css: ["@/assets/css/tailwind.css"],

  plugins: [
    {
      src: "~/plugins/chart.js",
      mode: "client",
    },
  ],
});
