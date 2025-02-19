<template>
  <!-- Centered container for header section -->
  <div class="mx-auto max-w-2xl text-center">
    <!-- Section title -->
    <h2 class="text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl sm:leading-snug">
      {{ title }}
    </h2>
    <!-- Section description -->
    <p class="mt-2 text-sm text-gray-600 md:text-base">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
// Define component properties with type validation
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
/* Component-specific styles */
</style>
