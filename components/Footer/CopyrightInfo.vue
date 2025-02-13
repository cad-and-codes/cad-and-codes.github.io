<template>
  <!-- Container for copyright and privacy policy links -->
  <p class="mt-4 text-sm text-gray-500 sm:mt-0">
    &copy; {{ currentYear }}&nbsp;
    <a
      href="/"
      target="_blank"
      rel="noopener noreferrer"
      class="text-gray-500 hover:text-gray-700 transition"
    >
      <b>{{ author }}</b>
    </a>
    &nbsp;&nbsp;&nbsp; All rights reserved.
  </p>
</template>

<script setup>
const currentYear = new Date().getFullYear();
const author = "CAD & CODES";
</script>

<style scoped>
/* Styles specific to this component */
</style>

