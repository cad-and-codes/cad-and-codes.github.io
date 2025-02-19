<template>
  <div :class="wrapperClass">
    <!-- Label for the textarea -->
    <label :for="id" class="block text-sm font-semibold text-gray-900">
      {{ label }}
      <!-- Append an asterisk if the field is required -->
      <span v-if="required" class="text-red-600">*</span>
    </label>

    <div class="mt-2.5">
      <!-- Two-way binding for textarea using computed property -->
      <textarea
        v-model="value"
        :id="id"
        :name="id"
        :rows="rows"
        class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
        :required="required"
      ></textarea>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

// Define component props with their default values and required flags
const props = defineProps({
  label: { type: String, required: true },
  id: { type: String, required: true },
  rows: { type: Number, default: 4 },
  wrapperClass: { type: String, default: "" },
  required: { type: Boolean, default: false },
  modelValue: { type: String, default: "" }
});

// Define event emitter for v-model update event
const emit = defineEmits(["update:modelValue"]);

/*
  Computed property to act as a two-way binding with v-model.
  When the textarea value changes, the setter emits an update event.
*/
const value = computed({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    emit("update:modelValue", newValue);
  }
});
</script>

<style scoped>
/* Scoped styles for the Contact FormTextarea component */
</style>
