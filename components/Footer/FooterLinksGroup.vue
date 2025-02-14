<template>
    <div class="text-center sm:text-left">
      <p class="text-lg font-medium text-gray-900">{{ title }}</p>
      <ul class="mt-8 space-y-4 text-sm">
        <slot></slot>
      </ul>
    </div>
  </template>
  
  <script setup>
  defineProps({
    title: {
      type: String,
      required: true,
    },
  })
  </script>
  