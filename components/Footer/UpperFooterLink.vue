<template>
  <!-- 
    Footer Link Component
    Renders an anchor tag that navigates to the provided URL.
    The link text is provided via a prop.
  -->
  <a
    :href="href"
    class="block text-gray-900 hover:text-blue-900 transition duration-300"
  >
    {{ text }}
  </a>
</template>

<script setup>
// Define the component properties (props) with type-checking and required flags.
const { text, href } = defineProps({
  text: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    required: true,
  },
});
</script>
