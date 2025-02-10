<template>
  <!-- Form input component with label and input field -->
  <div :class="wrapperClass">
    <!-- Label for the input field -->
    <label :for="id" class="block text-sm font-medium text-gray-900">
      {{ label }}
      <!-- Required indicator -->
      <span v-if="required" class="text-red-600">*</span>
    </label>
    <!-- Input field container -->
    <div class="mt-2">
      <!-- Input field with default classes and props -->
      <input
        v-bind="attrs"
        :id="id"
        :type="type"
        :required="required"
        class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
      />
    </div>
  </div>
</template>

<script setup>
// Import the useAttrs hook to access the attributes passed to the component
import { useAttrs } from "vue";

// Define the props for the component
defineProps({
  // Label for the input field
  label: { type: String, required: true },
  // ID for the input field
  id: { type: String, required: true },
  // Type of the input field (e.g. text, email, password)
  type: { type: String, default: "text" },
  // Whether the input field is required
  required: { type: Boolean, default: false },
  // Additional classes for the wrapper element
  wrapperClass: { type: String, default: "" }
});

// Get the attributes passed to the component
const attrs = useAttrs();
</script>

