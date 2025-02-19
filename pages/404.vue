<template>
  <!-- The root element should be wrapped in <html class="h-full"> and <body class="h-full"> in your main layout -->
  <main
    class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8"
  >
    <div class="text-center">
      <!-- Large 404 text -->
      <p class="text-9xl font-black text-gray-200">404</p>
      <!-- Subheading message -->
      <p class="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Uh-oh!
      </p>
      <!-- Main error message -->
      <h1
        class="mt-4 text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl"
      >
        Page not found.
      </h1>
      <!-- Brief explanation for the visitor -->
      <p class="mt-6 text-lg font-medium text-gray-500 sm:text-xl/8">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <!-- Navigation links -->
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <!-- Link to go back to homepage -->
        <a
          href="/"
          class="rounded-full bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Go back home
        </a>
        <!-- Link to contact support -->
        <a href="/contact-us" class="text-sm font-semibold text-gray-900">
          Contact support <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  </main>
</template>

<script setup>
// SEO metadata configuration for better search engine and social media integration.
useSeoMeta({
  title: '404 | Not Found', // Page title
  description: "Sorry, we couldn’t find the page you’re looking for.", // Meta description
  ogTitle: 'Your OpenGraph Title', // OpenGraph title for social sharing on Facebook, etc.
  ogDescription: 'Your OpenGraph description', // OpenGraph description
  ogImage: 'https://yourwebsite.com/your-image.png', // OpenGraph image URL
  ogUrl: 'https://yourwebsite.com/your-page-url', // OpenGraph URL
  twitterTitle: 'Your Twitter Title', // Twitter title for sharing
  twitterDescription: 'Your Twitter Description', // Twitter description
  twitterImage: 'https://yourwebsite.com/your-image.png', // Twitter image URL
  twitterCard: 'summary' // Twitter card type
});

// Use Head API to set global HTML attributes and link tags.
useHead({
  htmlAttrs: {
    lang: 'en' // Sets the language attribute on <html>
  },
  link: [
    {
      rel: 'icon',          // Favicon relationship
      type: 'image/png',      // MIME type for the favicon
      href: '/favicon.svg'    // URL to the favicon
    }
  ]
});
</script>