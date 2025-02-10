<template>
  <!-- Contact form component -->
  <div class="isolate bg-white px-2 py-2 sm:px-3 lg:px-4">
    <!-- Background gradient -->
    <BackGradient1 />
    <!-- Form -->
    <form action="#" method="POST" class="mx-auto mt-6 max-w-xl sm:mt-12">
      <!-- Form fields -->
      <div class="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
        <!-- First name -->
        <FormInput
          label="First name"
          name="first-name"
          type="text"
          autocomplete="given-name"
          placeholder="Jane Doe"
        />
        <!-- Last name -->
        <FormInput
          label="Last name"
          name="last-name"
          type="text"
          autocomplete="family-name"
          placeholder="Doe"
        />
        <!-- Company -->
        <FormInput
          label="Company"
          name="company"
          type="text"
          autocomplete="organization"
          placeholder="Acme Inc."
          class="sm:col-span-2"
        />
        <!-- Email -->
        <FormInput
          label="Email"
          name="email"
          type="email"
          autocomplete="email"
          placeholder="jane.doe@example.com"
          class="sm:col-span-2"
        />
        <!-- Phone number -->
        <FormInput
          label="Phone number"
          name="phone-number"
          id="phone-number"
          type="tel"
          autocomplete="tel"
          placeholder="123-456-7890"
          class="sm:col-span-2"
        />
        <!-- Message -->
        <FormTextarea
          label="Message"
          name="message"
          id="message"
          rows="4"
          placeholder="Leave a message..."
          class="sm:col-span-2"
        />
        <!-- Agree to policies -->
        <SwitchGroup as="div" class="flex gap-x-4 sm:col-span-2">
          <div class="flex h-6 items-center">
            <Switch
              v-model="agreed"
              :class="[
                agreed ? 'bg-indigo-600' : 'bg-gray-200',
                'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-gray-900/5 transition-colors duration-200 ease-in-out ring-inset focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
              ]"
            >
              <!-- Toggle switch -->
              <span class="sr-only">Agree to policies</span>
              <span
                aria-hidden="true"
                :class="[
                  agreed ? 'translate-x-3.5' : 'translate-x-0',
                  'size-4 transform rounded-full bg-white ring-1 shadow-xs ring-gray-900/5 transition duration-200 ease-in-out',
                ]"
              />
            </Switch>
          </div>
          <!-- Label -->
          <SwitchLabel class="text-sm/6 text-gray-600">
            By selecting this, you agree to our
            <a href="/privacy-policy" class="font-semibold text-indigo-600">
              <span>Privacy Policy</span>
            </a>
            .
          </SwitchLabel>
        </SwitchGroup>
      </div>
      <!-- Submit button -->
      <div class="mt-10">
        <button
          type="submit"
          class="block w-full rounded-full bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Let's talk
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import BackGradient1 from "../Background/BackGradient-1.vue";
import { ChevronDownIcon } from "@heroicons/vue/16/solid";
import { Switch, SwitchGroup, SwitchLabel } from "@headlessui/vue";
import FormInput from "./FormInput.vue";
import FormTextarea from "./FormTextarea.vue";

const agreed = ref(false);
</script>
