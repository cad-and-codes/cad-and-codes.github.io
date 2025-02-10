<template>
    <div :class="wrapperClass">
      <label :for="id" class="block text-sm font-semibold text-gray-900">
        {{ label }}
        <span v-if="required" class="text-red-600">*</span>
      </label>
      <div class="mt-2.5">
        <textarea
          :name="id"
          :id="id"
          :rows="rows"
          class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
          :required="required"
          @input="$emit('update:modelValue', $event.target.value)"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    label: String,
    id: String,
    rows: { type: Number, default: 4 },
    wrapperClass: { type: String, default: "" },
    required: Boolean,
    modelValue: String
  });

  defineEmits(["update:modelValue"]);
  </script>


