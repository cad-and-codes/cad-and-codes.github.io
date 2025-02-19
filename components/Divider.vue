<template>
  <!-- Divider with a gradient background that adapts to light and dark modes -->
  <hr class="divider" />
</template>

<style scoped>
/* Base styles for the divider */
.divider {
  /* Remove the default border */
  border: 0;
  /* Set the divider's thickness */
  height: 1px;
  /* Apply a left-to-right gradient background for light mode */
  background-image: linear-gradient(to right, transparent, #6b7280, transparent);
  /* Slightly reduce opacity */
  opacity: 0.75;
  /* Reset margin to eliminate any default spacing */
  margin: 0;
}

/* Styles specific to dark mode */
@media (prefers-color-scheme: dark) {
  .divider {
    /* Use a darker gradient background for dark mode */
    background-image: linear-gradient(to right, transparent, #374151, transparent);
  }
}
</style>
