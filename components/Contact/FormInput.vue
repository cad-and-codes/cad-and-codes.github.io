<template>
  <div :class="wrapperClass">
    <!-- Display the input label with optional required indicator -->
    <label :for="id" class="block text-sm font-medium text-gray-900">
      {{ label }}
      <span v-if="required" class="text-red-600">*</span>
    </label>
    <!-- Input field container -->
    <div class="mt-2">
      <!-- Bind v-model for two-way data binding, and pass extra attributes -->
      <input
        v-model="value"
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
// Import Vue's composition functions
import { computed } from 'vue'
import { useAttrs } from 'vue'

// Define component props with default values and type validations.
const props = defineProps({
  label: { type: String, required: true },
  id: { type: String, required: true },
  type: { type: String, default: 'text' },
  required: { type: Boolean, default: false },
  wrapperClass: { type: String, default: '' },
  modelValue: { type: String, default: '' }
})

// Declare the custom event for v-model update.
const emit = defineEmits(['update:modelValue'])

// Create a computed property for two-way binding with v-model.
// The getter returns current modelValue and the setter emits an update.
const value = computed({
  get: () => props.modelValue,
  set(newValue) {
    emit('update:modelValue', newValue)
  }
})

// Collect any additional attributes passed to the component.
const attrs = useAttrs()
</script>

<style scoped>
/* Scoped styles for FormInput component */
</style>
