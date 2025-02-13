<template>
  <div class="mx-auto max-w-2xl text-center">
    <h2 class="text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl sm:leading-snug">
      {{ title }}
    </h2>
    <p class="mt-2 text-sm text-gray-600 md:text-base">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
});
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
