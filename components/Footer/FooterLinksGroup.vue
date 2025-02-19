<template>
  <!-- Container with responsive text alignment -->
  <div class="text-center sm:text-left">
    <!-- Render the footer group title -->
    <p class="text-lg font-medium text-gray-900">{{ title }}</p>
    <!-- Render the list of footer links via slot -->
    <ul class="mt-8 space-y-4 text-sm">
      <slot></slot>
    </ul>
  </div>
</template>

<script setup>
// Define component props with type validation
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
})

// This component represents a group of footer links.
// The 'title' prop specifies the group's heading, and the slot is used to pass in link items.
</script>