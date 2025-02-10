<template>
  <!-- Footer link component with mobile centered styling -->
  <a
    :href="props.href"
    class="block  text-gray-900 hover:text-blue-900  transition duration-300"
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

