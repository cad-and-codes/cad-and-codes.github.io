<template>
  <!-- Footer link component with mobile centered styling -->
  <a
    :href="href"
    class="block text-center mt-4 text-sm text-gray-500 hover:text-blue-500 sm:inline-block sm:ml-4 sm:mt-0 transition duration-300 font-semibold"
  >
    {{ text }}
  </a>
</template>

<script setup>
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

