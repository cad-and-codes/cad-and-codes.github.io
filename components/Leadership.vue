<template>
  <!-- Main section container -->
  <section class="bg-white py-24 sm:py-32">
    <!-- Responsive grid layout for intro text and leadership list -->
    <div class="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
      
      <!-- Leadership introduction section -->
      <div class="max-w-xl">
        <h2 class="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          Meet our leadership
        </h2>
        <p class="mt-6 text-lg text-gray-600">
          We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.
        </p>
      </div>

      <!-- Leadership list section -->
      <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
        <!-- Loop over each person in the array -->
        <li v-for="person in people" :key="person.name">
          <div class="flex items-center gap-x-6">
            <!-- Leader image with alt text for accessibility -->
            <img
              class="w-16 h-16 rounded-full"
              :src="person.imageUrl"
              :alt="person.name"
            />
            <div>
              <!-- Leader name -->
              <h3 class="text-base font-semibold tracking-tight text-gray-900">
                {{ person.name }}
              </h3>
              <!-- Leader role with an accent color -->
              <p class="mt-1 text-sm font-semibold text-indigo-600">
                {{ person.role }}
              </p>
            </div>
          </div>
        </li>
      </ul>
      
    </div>
  </section>
</template>

<script setup>
// Array that holds the leadership team data.
// This can be extended with more person objects as needed.
const people = [
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  // Additional leadership member objects can be added here.
];
</script>
