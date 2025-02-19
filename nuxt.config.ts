// Nuxt configuration file for the project
// For documentation, visit: https://nuxt.com/docs/api/configuration/nuxt-config

// Import required modules
import tailwindcss from "@tailwindcss/vite";
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  // Ensures compatibility with a specific date, useful for experimental features
  compatibilityDate: "2024-11-01",

  // Enable development tools for debugging
  devtools: { enabled: true },

  // Global CSS file inclusion
  css: ["~/assets/css/main.css"],

  // List of Nuxt modules to include in the project
  modules: ["@nuxtjs/mdc", "@nuxt/content"],

  // Optional: Configuration for the Nuxt Content module
  content: {
    // Additional content options can be added here if needed in the future
  },

  // Server-side rendering enabled by default
  ssr: true,

  // Application configuration including global HTML head settings and base URL setup
  app: {
    head: {
      // Define icons and other head properties
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "icon", type: "image/png", href: "/favicon.png" },
      ],
    },
    // Set the base URL depending on the environment
    // In production, serve the app under "/cad-and-codes.github.io/", otherwise use root
    baseURL:
      process.env.NODE_ENV === "production"
        ? "/cad-and-codes.github.io/"
        : "/",
  },

  // Vite configuration for additional plugins
  vite: {
    plugins: [
      // Tailwind CSS integration plugin
      tailwindcss(),
    ],
  },

  // Automatic component registration configuration
  components: [
    {
      // Directory where the components reside
      path: "~/components",
      // Disables automatic path prefixing when referencing components
      pathPrefix: false,
    },
  ],
});
