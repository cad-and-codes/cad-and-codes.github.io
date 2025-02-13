<template>
  <!-- Footer link component with mobile centered styling -->
  <a
    :href="href"
    class="block text-gray-900 hover:text-blue-900 transition duration-300"
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

