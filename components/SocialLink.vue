<template>
    <a
      :href="href"
      target="_blank"
      rel="noreferrer"
      class="text-teal-700 transition hover:text-teal-700/75"
    >
      <span class="sr-only">{{ label }}</span>
      <slot />
    </a>
  </template>
  
  <script setup>
  defineProps({
    href: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  });
  </script>