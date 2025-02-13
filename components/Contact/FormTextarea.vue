<template>
  <div :class="wrapperClass">
    <label :for="id" class="block text-sm font-semibold text-gray-900">
      {{ label }}
      <span v-if="required" class="text-red-600">*</span>
    </label>
    <div class="mt-2.5">
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

const props = defineProps({
  label: { type: String, required: true },
  id: { type: String, required: true },
  rows: { type: Number, default: 4 },
  wrapperClass: { type: String, default: "" },
  required: { type: Boolean, default: false },
  modelValue: { type: String, default: "" }
});

const emit = defineEmits(["update:modelValue"]);

const value = computed({
  get: () => props.modelValue,
  set(newValue) {
    emit("update:modelValue", newValue);
  }
});
</script>

<style scoped>
/* Styles specific to this component */
</style>

