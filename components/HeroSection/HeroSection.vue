<template>
  <!-- Hero Section -->
  <section class="px-2 py-48 bg-white md:px-0">
    <div class="container items-center max-w-6xl px-8 mx-auto xl:px-5">
      <div class="flex flex-wrap items-center sm:-mx-3">
        <div class="w-full md:w-1/2 md:px-3">
          <!-- Content -->
          <div
            class="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0"
          >
            <h1
              class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl"
            >
              <!-- Title -->
              <span class="block xl:inline">Empowering Your Business </span>
              <span
                class="block text-indigo-600 xl:inline"
                data-primary="indigo-600"
                >with Cutting-Edge Technology</span
              >
            </h1>
            <p
              class="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl"
            >
              <!-- Subtitle -->
              Shaping the Future with Precision Design and Code Mastery. Let's build
              something extraordinary together.
            </p>
            <div class="relative flex flex-col sm:flex-row sm:space-x-4">
              <!-- Buttons -->
              <a
                href="#_"
                class="flex items-center w-full px-6 py-2 mb-3 text-lg text-white bg-indigo-600 rounded-full sm:mb-0 hover:bg-indigo-700 sm:w-auto"
                data-primary="indigo-600"
                data-rounded="rounded-md"
              >
                Try It Free
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 ml-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <a
                href="#_"
                class="flex items-center px-6 py-2 text-gray-500 bg-gray-100 rounded-full hover:bg-gray-200 hover:text-gray-600"
                data-rounded="rounded-md"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2">
          <!-- Image -->
          <div
            class="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl"
            data-rounded="rounded-xl"
            data-rounded-max="rounded-full"
          >
            <img
              src="https://cdn.devdojo.com/images/november2020/hero-image.jpeg"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
