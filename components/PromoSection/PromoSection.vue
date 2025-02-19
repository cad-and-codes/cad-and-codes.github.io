<template>
  <!-- Promo Section Container -->
  <div class="relative overflow-hidden bg-white">
    <!-- Main Content Container -->
    <div class="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
      <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
        <!-- Text Content -->
        <div class="sm:max-w-lg">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Summer styles are finally here
          </h1>
          <p class="mt-4 text-xl text-gray-500">
            This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care if you live or die.
          </p>
        </div>

        <!-- Image Grid and Call-to-Action -->
        <div class="mt-10">
          <!-- Decorative Image Grid -->
          <div aria-hidden="true" class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
            <div class="absolute transform sm:top-0 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2 lg:translate-x-8">
              <div class="flex items-center space-x-6 lg:space-x-8">
                <!-- Loop through each image column -->
                <template v-for="(column, colIndex) in imageColumns" :key="colIndex">
                  <div class="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <!-- Loop through images in the current column -->
                    <template v-for="(img, idx) in column" :key="idx">
                      <div :class="img.wrapperClass">
                        <img 
                          :src="img.src" 
                          :alt="img.alt" 
                          loading="lazy" 
                          class="object-cover w-full h-full"
                        />
                      </div>
                    </template>
                  </div>
                </template>
              </div>
            </div>
          </div>

          <!-- Call-to-Action Button -->
          <a 
            href="#"
            class="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
          >
            Shop Collection
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Define an array of image columns for the decorative grid
const imageColumns = [
  // Column 1
  [
    {
      src: "https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg",
      alt: "Summer collection image 1",
      wrapperClass: "h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100",
    },
    {
      src: "https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg",
      alt: "Summer collection image 2",
      wrapperClass: "h-64 w-44 overflow-hidden rounded-lg",
    },
  ],
  // Column 2
  [
    {
      src: "https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg",
      alt: "Summer collection image 3",
      wrapperClass: "h-64 w-44 overflow-hidden rounded-lg",
    },
    {
      src: "https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg",
      alt: "Summer collection image 4",
      wrapperClass: "h-64 w-44 overflow-hidden rounded-lg",
    },
    {
      src: "https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg",
      alt: "Summer collection image 5",
      wrapperClass: "h-64 w-44 overflow-hidden rounded-lg",
    },
  ],
  // Column 3
  [
    {
      src: "https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg",
      alt: "Summer collection image 6",
      wrapperClass: "h-64 w-44 overflow-hidden rounded-lg",
    },
    {
      src: "https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg",
      alt: "Summer collection image 7",
      wrapperClass: "h-64 w-44 overflow-hidden rounded-lg",
    },
  ],
]
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
