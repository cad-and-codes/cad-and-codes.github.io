<template>
  <div>
    <!-- Header component with navigation -->
    <header class="bg-white">
      <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <!-- Navigation -->
        <nav class="flex items-center justify-between p-6" aria-label="Global">
          <!-- Logo -->
          <div class="flex lg:flex-1">
            <a href="/" class="-m-1.5 p-1.5">
              <span class="sr-only">CAD & CODES</span>
              <!-- Logo image -->
              <img
                class="h-8 w-auto lg:px-20"
                src="~/assets/images/logo.svg"
                alt=""
              />
            </a>
          </div>
          <!-- Mobile menu button -->
          <div class="flex lg:hidden">
            <button
              type="button"
              class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              @click="mobileMenuOpen = true"
            >
              <span class="sr-only">Open main menu</span>
              <!-- Mobile menu icon -->
              <Bars3Icon class="size-6" aria-hidden="true" />
            </button>
          </div>
          <!-- Desktop navigation -->
          <div class="hidden lg:flex lg:gap-x-12">
            <a
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              class="text-sm/6 font-semibold text-gray-900"
              >{{ item.name }}</a
            >
          </div>
          <!-- Desktop login button -->
          <div class="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" class="text-sm/6 font-semibold text-gray-900 lg:px-20"
              >Log in <span aria-hidden="true">&rarr;</span></a
            >
          </div>
        </nav>

        <!-- Mobile menu -->
        <Dialog
          class="lg:hidden"
          @close="mobileMenuOpen = false"
          :open="mobileMenuOpen"
        >
          <div class="fixed inset-0 z-50" />
          <DialogPanel
            class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
          >
            <!-- Mobile menu header -->
            <div class="flex items-center justify-between">
              <!-- Logo -->
              <a href="/" class="-m-1.5 p-1.5">
                <span class="sr-only">CAD & CODES</span>
                <img class="h-8 w-auto" src="~/assets/images/logo.svg" alt="" />
              </a>
              <!-- Close button -->
              <button
                type="button"
                class="-m-2.5 rounded-md p-2.5 text-gray-700"
                @click="mobileMenuOpen = false"
              >
                <span class="sr-only">Close menu</span>
                <XMarkIcon class="size-6" aria-hidden="true" />
              </button>
            </div>
            <Divider class="my-6" />

            <!-- Mobile menu items -->
            <div class="mt-6 flow-root">
              <div class="-my-6 divide-y divide-gray-500/10">
                <div class="space-y-2 py-6">
                  <a
                    v-for="item in navigation"
                    :key="item.name"
                    :href="item.href"
                    class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:text-teal-700"
                    >{{ item.name }}</a
                  >
                </div>
                <div class="py-6">
                  <a
                    href="#"
                    class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >Log in</a
                  >
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </div>
    </header>
    <Divider />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import Divider from "~/components/Divider.vue";

// Navigation items
const navigation = [
  { name: "About Us", href: "/about-us" },
  { name: "Services", href: "/services" },
  { name: "Teams", href: "#" },
  { name: "Contact Us", href: "/contact-us" },
];

// Mobile menu state
const mobileMenuOpen = ref(false);
</script>
