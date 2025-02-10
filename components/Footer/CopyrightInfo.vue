<template>
  <!-- Container for copyright and privacy policy links -->
  <p
    class="mt-4 text-sm text-gray-500 sm:mt-0"
  >
    <!-- Copyright notice with current year and author name -->
    &copy; {{ currentYear }}&nbsp;
    <a
      href="/"
      target="_blank"
      rel="noopener noreferrer"
      class="text-gray-500 hover:text-gray-700 transition"
      ><b>{{ author }}</b></a
    >&nbsp;&nbsp;&nbsp; All rights reserved.
  </p>
</template>

<script setup>
import { ref } from 'vue';

// Dynamic data for the current year
const currentYear = ref(new Date().getFullYear());
// Author name
const author = ref("CAD & CODES");
</script>

<style scoped>
/* Styles specific to this component */
</style>

