<template>
  <!-- Container for copyright and privacy policy links -->
  <p class="mt-4 text-sm text-gray-500 sm:mt-0">
    &copy; {{ currentYear }}&nbsp;
    <!-- Link to the home page with hover effect -->
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
// Get the current year from the system date
const currentYear = new Date().getFullYear();

// Define the author name to be displayed in the copyright notice
const author = "CAD & CODES";
</script>

<style scoped>
/* Component-specific styles */
</style>
