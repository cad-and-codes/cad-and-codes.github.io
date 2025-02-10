<template>
  <!-- Hero section with a background gradient and some text -->
  <div class="px-2 sm:px-3 lg:px-4">
    <BackGradient1 />
    <!-- Content -->
    <div class="mx-auto max-w-2xl">
      <!-- Title and description -->
      <div class="text-center sm:text-left">
        <h1 class="text-3xl font-semibold tracking-tight text-balance text-gray-900 sm:text-4xl">
          How Can We Help You Grow Your Business?
        </h1>
        <p class="mt-6 font-basic text-pretty text-gray-600">
          We provide a range of services to help you grow your business, including web development, mobile app development, and digital marketing.
        </p>
        <ul class="mt-6 space-y-3">
          <li v-for="point in points" :key="point" class="flex items-center gap-x-3">
            <CheckIcon class="w-5 h-5 text-green-600" aria-hidden="true" />
            <span class="font-basic text-pretty text-gray-600">{{ point }}</span>
          </li>
        </ul>

        <!-- Call to action -->
        <div class="mt-10 flex items-center justify-center gap-x-6 sm:justify-start">
          <a href="/" class="rounded-full bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get
            started</a>
          <a href="/services" class="text-sm/6 font-semibold text-gray-900">Learn more <span
              aria-hidden="true">→</span></a>
        </div>
      </div>
    </div>
    <BackGradient2 />
  </div>
</template>

<script setup>
import BackGradient1 from "../Background/BackGradient-1.vue";
import BackGradient2 from "../Background/BackGradient-2.vue";
import { CheckIcon } from "@heroicons/vue/16/solid";

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

