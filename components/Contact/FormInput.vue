<template>
  <div :class="wrapperClass">
    <!-- Label for the input field -->
    <label :for="id" class="block text-sm font-medium text-gray-900">
      {{ label }}
      <span v-if="required" class="text-red-600">*</span>
    </label>
    <!-- Input field container -->
    <div class="mt-2">
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
import { computed } from 'vue'
import { useAttrs } from 'vue'

const props = defineProps({
  label: { type: String, required: true },
  id: { type: String, required: true },
  type: { type: String, default: 'text' },
  required: { type: Boolean, default: false },
  wrapperClass: { type: String, default: '' },
  modelValue: { type: String, default: '' }
})

const emit = defineEmits(['update:modelValue'])

const value = computed({
  get: () => props.modelValue,
  set(newValue) {
    emit('update:modelValue', newValue)
  }
})

const attrs = useAttrs()
</script>

<style scoped>
/* Styles specific to this component */
</style>

