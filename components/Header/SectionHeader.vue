<template>
  <!-- Section header component -->
  <div class="mx-auto max-w-2xl text-center">
    <!-- Title -->
    <h2
      class="text-2xl font-semibold tracking-tighter text-balance text-gray-900 sm:text-4xl sm:leading-snug"
    >
      {{ title }}
    </h2>
    <!-- Description -->
    <p class="mt-2 text-sm text-gray-600 md:text-base">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
// Define props for the component
const props = defineProps({
  // Title of the section
  title: {
    type: String,
    required: true,
  },
  // Description of the section
  description: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
/* Styles specific to this component */
</style>
