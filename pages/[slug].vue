<template>
  <!-- Main container for the dynamic page -->
  <div>
    <!-- Navigation header -->
    <Header />

    <!-- Content section with a responsive container -->
    <div class="relative bg-white px-6 py-24 sm:py-32 lg:px-8">
      <!-- Background gradient effect -->
      <div
        class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      ></div>

      <!-- Page header displaying the dynamic slug -->
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-4xl font-bold tracking-tight text-balance text-gray-900 sm:text-5xl">
          {{ slug }}
        </h2>
        <p class="mt-2 text-lg/8 text-gray-600">
          Dynamic content for <strong>{{ slug }}</strong>.
        </p>
      </div>

      <!-- Main content area for dynamic slot content -->
      <div class="mt-12 prose prose-lg prose-gray-500 mx-auto">
        <slot />
      </div>
    </div>

    <!-- Page footer with upper and lower sections separated by dividers -->
    <Divider />
    <UpperFooter />
    <Divider />
    <LowerFooter />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useHead } from '#imports';

import Header from '~/components/Header/Header.vue';
import Divider from '~/components/Divider.vue';
import UpperFooter from '~/components/Footer/UpperFooter.vue';
import LowerFooter from '~/components/Footer/LowerFooter.vue';

// Retrieve the current route to get the dynamic slug parameter
const route = useRoute();

// Use a computed property to dynamically track the slug
const slug = computed(() => route.params.slug);

// Set up page metadata (e.g., language attribute and favicon)
useHead({
  htmlAttrs: { lang: 'en' },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.svg'
    }
  ]
});
</script>

<style scoped>
/* Add your custom styles here */
</style>
