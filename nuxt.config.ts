import { Script } from "vm";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  ssr: false,
  app: {
    baseURL: "/MuslimGuide/",
    buildAssetsDir: "assets",
    head: {
      link: [
        { rel: "icon", type: "image/svg", href: "/MuslimGuide/favicon.png" },
      ],
      title: "Muslim Guide"
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  router: {
    options: {
      scrollBehaviorType: "smooth"
    },
  },
  nitro: {
    prerender: {
      failOnError: false,
    },
  },
  vue: {
    compilerOptions: {
      whitespace: 'preserve'
    }
  },
  css: [
    "~/assets/css/main.css"
  ],
  modules: [
    "lenis/nuxt",
    "maz-ui/nuxt",
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/ui",
    "@pinia/nuxt",

  ],
  icon: {
    clientBundle: {
      icons: [],
      scan: true,
      includeCustomCollections: true,
      sizeLimitKb: 256,
    },
  },
});
