<template>
  <!-- Footer link component with mobile centered styling -->
  <a
    :href="props.href"
    class="block text-center mt-4 text-sm text-gray-500 hover:text-blue-500 sm:inline-block sm:ml-4 sm:mt-0 transition duration-300 font-semibold"
  >
    <!-- Display link text -->
    {{ props.text }}
  </a>
</template>

<script setup>
// Define props for the component
const props = defineProps({
  // The text of the link
  text: {
    type: String,
    required: true
  },
  // The href of the link
  href: {
    type: String,
    required: true
  }
});
</script>

