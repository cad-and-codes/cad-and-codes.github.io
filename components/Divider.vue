<template>
  <!-- A divider with a gradient in the middle -->
  <hr class="divider" />
</template>

<style scoped>
.divider {
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, transparent, #6b7280, transparent); /* from Tailwind: via-gray-500 */
  opacity: 0.75;
  margin: 0; /* Adjust as needed */
}

@media (prefers-color-scheme: dark) {
  .divider {
    background-image: linear-gradient(to right, transparent, #374151, transparent); /* dark:via-gray-700 */
  }
}
</style>
