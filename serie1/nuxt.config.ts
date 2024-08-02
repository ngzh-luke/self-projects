import { resolve } from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  features: {
    devLogs: true,
  },

  app: {
    rootAttrs: {
      id: "projects.lukecreated.com",
    },
  },

  alias: {
    "@": resolve(__dirname, "/"),
  },
  css: ["~/assets/main.scss"],
  security: {
    headers: {
      crossOriginEmbedderPolicy:
        process.env.NODE_ENV === "development" ? "unsafe-none" : "require-corp",
    },
  },
  modules: [
    "@nuxtjs/i18n",
    "@nuxtjs/color-mode",
    "@nuxt/icon",
    "@vueuse/nuxt",
    "nuxt-security",
    "@dargmuesli/nuxt-cookie-control",
    "@nuxt/image",
    "@stefanobartoletti/nuxt-social-share",
    "@artmizu/nuxt-prometheus",
  ],
});
