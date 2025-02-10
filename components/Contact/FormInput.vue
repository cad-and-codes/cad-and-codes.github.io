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
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
      />
    </div>
  </div>
</template>

<script setup>
import { useAttrs } from 'vue'

// Define props for the component
const props = defineProps({
  label: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'text'
  },
  required: {
    type: Boolean,
    default: false
  },
  wrapperClass: {
    type: String,
    default: ''
  },
  modelValue: {
    type: String,
    default: ''
  }
})

// Use Vue's useAttrs to bind additional attributes
const attrs = useAttrs()
</script>

