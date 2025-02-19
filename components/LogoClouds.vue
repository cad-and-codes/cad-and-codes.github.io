<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Section heading -->
      <h2 class="text-center text-lg font-semibold text-gray-900">
        Trusted by the world’s most innovative teams
      </h2>
      <!-- Responsive grid layout for logos -->
      <div class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
        <!-- Using logo.alt as a unique key for each logo -->
        <template v-for="logo in logos" :key="logo.alt">
          <img
            :class="logo.class"
            :src="logo.src"
            :alt="logo.alt"
            :width="logo.width"
            :height="logo.height"
            loading="lazy"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
// Array of logo objects with their respective properties.
// The 'alt' property is used as the unique key for rendering.
const logos = [
  {
    src: "https://tailwindui.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg",
    alt: "Transistor",
    width: 158,
    height: 48,
    class: "col-span-2 max-h-12 w-full object-contain lg:col-span-1",
  },
  {
    src: "https://tailwindui.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg",
    alt: "Reform",
    width: 158,
    height: 48,
    class: "col-span-2 max-h-12 w-full object-contain lg:col-span-1",
  },
  {
    src: "https://tailwindui.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg",
    alt: "Tuple",
    width: 158,
    height: 48,
    class: "col-span-2 max-h-12 w-full object-contain lg:col-span-1",
  },
  {
    src: "https://tailwindui.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg",
    alt: "SavvyCal",
    width: 158,
    height: 48,
    class: "col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1",
  },
  {
    src: "https://tailwindui.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg",
    alt: "Statamic",
    width: 158,
    height: 48,
    class: "col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1",
  },
];
</script>

<style scoped>
/* Component-specific styles can be added here if needed */
</style>
