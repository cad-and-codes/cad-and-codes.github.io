<template>
  <!-- About Section -->
  <section class="relative bg-white py-24 sm:py-32">
    <div class="container items-center max-w-6xl px-8 mx-auto xl:px-5">
      <!-- Flex wrapper for content and image -->
      <div class="flex flex-wrap items-center sm:-mx-3">
        <!-- Left Column: Text Content -->
        <div class="py-2 w-full md:w-1/2 md:px-3">
          <div class="space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0">
            <!-- Headline -->
            <h1 class="py-2 mt-2 text-sm font-bold tracking-tight text-gray-900 sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              CAD and Codes is a leading Engineering and IT Solution company known for its innovative and tailored services in computer-aided design (CAD) and cutting-edge coding.
            </h1>
            <!-- Divider component for visual separation -->
            <Divider />
            <!-- First Description Paragraph -->
            <p class="py-2 mt-2 mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
              Our goal is to provide exceptional solutions to complex engineering and technology challenges with a commitment to quality, innovation, and sustainability. We take pride in delivering customized and inventive services to diverse industries, leveraging our expertise in CAD and cutting-edge coding techniques.
            </p>
            <!-- Second Description Paragraph -->
            <p class="py-2 mt-2 mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
              Our focus is on driving growth and optimizing operations for businesses by empowering them with efficient, cost-effective, and sustainable approaches to improve their bottom line and stay ahead of the competition.
            </p>
            <!-- Call-to-Action Button -->
            <div class="py-0.5 flex flex-col items-center sm:flex-row sm:space-x-4">
              <NuxtLink
                to="/contact-us"
                class="flex items-center w-full px-6 py-2 mb-3 text-lg text-white bg-indigo-600 rounded-full hover:bg-indigo-700 sm:mb-0 sm:w-auto"
              >
                Contact Us
                <!-- Right Arrow Icon -->
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
              </NuxtLink>
            </div>
          </div>
        </div>
        <!-- Right Column: Image -->
        <div class="py-2 w-full md:w-1/2 lg:pl-16 xl:pl-16 md:pl-2">
          <!-- Image Container -->
          <div class="w-full h-auto overflow-hidden rounded-xl sm:rounded-2xl">
            <img
              src="/assets/page-img/about-us.jpg"
              alt="About us image"
              loading="lazy"
              class="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Scoped styles for the About Section component */

/* You can add specific component styles here if needed */
</style>
