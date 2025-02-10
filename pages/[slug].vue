<template>
  <!-- Dynamic page displaying content based on the slug from the route parameter -->
  <div>
    <!-- Navbar component -->
    <Header />

    <!-- Main content container -->
    <div class="relative bg-white px-6 py-24 sm:py-32 lg:px-8">
      <!-- Background gradient effect -->
      <div
        class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      ></div>

      <!-- Page header -->
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-4xl font-bold tracking-tight text-balance text-gray-900 sm:text-5xl">
          {{ $route.params.slug }}
        </h2>
        <p class="mt-2 text-lg/8 text-gray-600">
          Dynamic content for <strong>{{ $route.params.slug }}</strong
          >.
        </p>
      </div>

      <!-- Page content -->
      <div class="prose prose-lg mt-12 mx-auto">
        <slot />
      </div>
    </div>

    <!-- Footer component -->
    <Divider />
    <UpperFooter />
    <Divider />
    <LowerFooter />
  </div>
</template>

<script setup>
// Import Navbar and Footer components
import Header from "~/components/Header/Header.vue";
import Divider from "~/components/Divider.vue";
import UpperFooter from "~/components/Footer/UpperFooter.vue";
import LowerFooter from "~/components/Footer/LowerFooter.vue";

//useSeoMeta({ 
//  title: '404 | Not Found',
//  description: "Sorry, we couldn’t find the page you’re looking for.",
//  ogTitle: 'Your OpenGraph Title',
//  ogDescription: 'Your OpenGraph description',
//  ogImage: 'https://yourwebsite.com/your-image.png',
//  ogUrl: 'https://yourwebsite.com/your-page-url',
//  twitterTitle: 'Your Twitter Title',
//  twitterDescription: 'Your Twitter Description',
//  twitterImage: 'https://yourwebsite.com/your-image.png',
//  twitterCard: 'summary'
//})

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.svg'
    }
  ]
})

</script>

<style scoped>
/* Add your styles here */
</style>

