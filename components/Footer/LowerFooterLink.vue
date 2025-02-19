<template>
  <!-- Footer link component with centered styling on mobile devices -->
  <a
    :href="href"
    class="block text-center mt-4 text-sm text-gray-500 hover:text-blue-500 sm:inline-block sm:ml-4 sm:mt-0 transition duration-300 font-semibold"
  >
    {{ text }}
  </a>
</template>

<script setup>
// Define incoming props with their types and requirements
const { text, href } = defineProps({
  text: {
    type: String,
    required: true, // Text to display inside the link
  },
  href: {
    type: String,
    required: true, // URL the link points to
  },
});
</script>
