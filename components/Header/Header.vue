<template>
  <div>
    <!-- Header section with desktop and mobile navigation -->
    <header class="bg-white">
      <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <nav class="flex items-center justify-between p-6" aria-label="Global">
          <!-- Logo/Brand Section -->
          <div class="flex lg:flex-1">
            <a href="/" class="-m-1.5 p-1.5">
              <span class="sr-only">CAD & CODES</span>
              <img class="h-8 w-auto" src="/images/logo.svg" alt="CAD & CODES logo" />
            </a>
          </div>

          <!-- Mobile menu button, visible only on small screens -->
          <div class="flex lg:hidden">
            <button
              type="button"
              class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              @click="mobileMenuOpen = true">
              <span class="sr-only">Open main menu</span>
              <Bars3Icon class="size-6" aria-hidden="true" />
            </button>
          </div>

          <!-- Desktop navigation links, hidden on mobile -->
          <div class="hidden lg:flex lg:gap-x-12">
            <a
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              class="text-sm/6 font-semibold text-gray-900 hover:text-indigo-900">
              {{ item.name }}
            </a>
          </div>
        </nav>

        <!-- Mobile navigation dialog -->
        <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
          <!-- Backdrop overlay -->
          <div class="fixed inset-0 z-50" />

          <!-- Mobile menu panel -->
          <DialogPanel
            class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            
            <!-- Mobile header with logo and close button -->
            <div class="flex items-center justify-between">
              <a href="/" class="-m-1.5 p-1.5">
                <span class="sr-only">CAD & CODES</span>
                <img class="h-8 w-auto" src="/images/logo.svg" alt="CAD & CODES logo" />
              </a>
              <button
                type="button"
                class="-m-2.5 rounded-md p-2.5 text-gray-700"
                @click="mobileMenuOpen = false">
                <span class="sr-only">Close menu</span>
                <XMarkIcon class="size-6" aria-hidden="true" />
              </button>
            </div>

            <!-- Mobile navigation links -->
            <div class="mt-6 flow-root">
              <div class="-my-6 divide-y divide-gray-500/10">
                <div class="space-y-2 py-6">
                  <a
                    v-for="item in navigation"
                    :key="item.name"
                    :href="item.href"
                    class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:text-indigo-900">
                    {{ item.name }}
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </div>
    </header>
    <!-- Divider below the header -->
    <Divider />
  </div>
</template>

<script setup>
/* Importing Vue's ref for reactive variables */
import { ref } from "vue";

/* Importing Headless UI components for the dialog functionality */
import { Dialog, DialogPanel } from "@headlessui/vue";

/* Importing Heroicons for the mobile menu icons */
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

/* Divider component used for visual separation */
import Divider from "~/components/Divider.vue";

/* Navigation links data */
const navigation = [
  { name: "About Us", href: "/about-us" },
  { name: "Services", href: "/services" },
  { name: "Teams", href: "/" },
  { name: "Contact Us", href: "/contact-us" },
];

/* State variable for mobile menu dialog visibility */
const mobileMenuOpen = ref(false);
</script>
