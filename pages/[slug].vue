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
          {{ slug }}
        </h2>
        <p class="mt-2 text-lg/8 text-gray-600">
          Dynamic content for <strong>{{ slug }}</strong>.
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
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useHead } from '@vueuse/head';

import Header from '~/components/Header/Header.vue';
import Divider from '~/components/Divider.vue';
import UpperFooter from '~/components/Footer/UpperFooter.vue';
import LowerFooter from '~/components/Footer/LowerFooter.vue';

const route = useRoute();
const slug = computed(() => route.params.slug);

// Set head metadata
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

