<template>
  <!-- Hero section container with background and padding -->
  <section class="relative bg-white py-20 sm:py-32 lg:py-40">
    <!-- Decorative background gradients -->
    <BackGradient1 />
    
    <!-- Content container -->
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="text-center sm:text-left">
        <!-- Section title -->
        <h1 class="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          How Can We Help You Grow Your Business?
        </h1>
        <!-- Section description -->
        <p class="mt-6 text-lg text-gray-600">
          We provide a range of services to help you grow your business,
          including web development, mobile app development, and digital
          marketing.
        </p>
        
        <!-- List of service points -->
        <ul class="mt-6 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
          <li
            v-for="(point, index) in points"
            :key="index"
            class="flex items-center gap-x-3"
          >
            <!-- CheckIcon for list item indicator -->
            <CheckIcon class="w-5 h-5 text-green-600" aria-hidden="true" />
            <span class="text-gray-600">{{ point }}</span>
          </li>
        </ul>

        <!-- Call-to-action buttons -->
        <div class="mt-10 flex items-center justify-center gap-x-6 sm:justify-start">
          <a
            href="/"
            class="inline-block rounded-full bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get started
          </a>
          <a
            href="/services"
            class="inline-block text-sm font-semibold text-gray-900 hover:underline"
          >
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
    
    <!-- Second decorative gradient -->
    <BackGradient2 />
  </section>
</template>

<script setup>
// Import background gradient components
import BackGradient1 from "../Background/BackGradient-1.vue";
import BackGradient2 from "../Background/BackGradient-2.vue";

// Import the CheckIcon from Heroicons
import { CheckIcon } from "@heroicons/vue/16/solid";

// Service points list
const points = [
  "Custom web development solutions",
  "Native and cross-platform mobile app development",
  "Digital marketing services including SEO, PPC and social media marketing",
  "E-commerce solutions",
  "Content management systems",
  "Web hosting and maintenance",
  "And much more",
];
</script>
