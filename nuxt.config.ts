import { Script } from "vm";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  ssr: false,
  app: {
    baseURL: "/UmrahGuide/",
    buildAssetsDir: "assets",
    head: {
      link: [
        { rel: "icon", type: "image/svg", href: "/UmrahGuide/favicon.png" },
        { rel: "preconnect", href: "https://fonts.gstatic.com/", crossorigin: "" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?display=swap&amp;family=Noto+Serif%3Awght%40400%3B500%3B700%3B900&amp;family=Noto+Sans%3Awght%40400%3B500%3B700%3B900" },
      ],
      title: "Umrah Guide"
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
