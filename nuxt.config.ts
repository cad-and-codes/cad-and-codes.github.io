// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ['@nuxtjs/mdc', '@nuxt/content'],
  // Optional: Configure Nuxt Content module
  content: {
    // Add options here if needed
  },
  ssr: true,
  app: {
    head: {
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "icon", type: "image/png", href: "/favicon.png" },
      ],
    },
    baseURL: "/", // default
  },

  vite: {
    plugins: [tailwindcss()],
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
});
