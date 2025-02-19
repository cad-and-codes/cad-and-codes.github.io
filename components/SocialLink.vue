<template>
  <!-- SocialLink component: an accessible anchor that opens in a new tab -->
  <a
    :href="href"
    target="_blank"
    rel="noreferrer"
    class="text-teal-700 transition hover:text-teal-700/75"
  >
    <!-- Screen reader only label for improved accessibility -->
    <span class="sr-only">{{ label }}</span>
    <!-- Default slot to allow insertion of custom content (e.g., icons) -->
    <slot />
  </a>
</template>

<script setup>
// Props definition ensures that the component is used correctly and is type-safe.
// - href: target URL for the link; must be provided.
// - label: a textual description for accessibility; must be provided.
const props = defineProps({
  href: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  }
});
</script>
