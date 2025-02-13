<template>
  <form
    action="#"
    method="POST"
    class="mx-auto max-w-xl space-y-6"
    @submit.prevent="handleSubmit"
  >
    <!-- Form fields -->
    <div class="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
      <!-- First name -->
      <FormInput
        v-model="formData.firstName"
        label="First name"
        name="first-name"
        type="text"
        autocomplete="given-name"
        placeholder="Jane Doe"
        required
      />
      <!-- Last name -->
      <FormInput
        v-model="formData.lastName"
        label="Last name"
        name="last-name"
        type="text"
        autocomplete="family-name"
        placeholder="Doe"
        required
      />
      <!-- Company -->
      <FormInput
        v-model="formData.company"
        label="Company"
        name="company"
        type="text"
        autocomplete="organization"
        placeholder="Acme Inc."
        class="sm:col-span-2"
      />
      <!-- Email -->
      <FormInput
        v-model="formData.email"
        label="Email"
        name="email"
        type="email"
        autocomplete="email"
        placeholder="jane.doe@example.com"
        class="sm:col-span-2"
        required
      />
      <!-- Phone number -->
      <FormInput
        v-model="formData.phoneNumber"
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
        v-model="formData.message"
        label="Message"
        name="message"
        id="message"
        rows="4"
        placeholder="Leave a message..."
        class="sm:col-span-2"
        required
      />
    </div>
    <!-- Agree to policies -->
    <div class="flex items-center space-x-4">
      <SwitchGroup as="div" class="flex items-center">
        <Switch
          v-model="agreed"
          :class="[
            agreed ? 'bg-indigo-600' : 'bg-gray-200',
            'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-600'
          ]"
        >
          <span class="sr-only">Agree to policies</span>
          <span
            aria-hidden="true"
            :class="[
              agreed ? 'translate-x-5' : 'translate-x-0',
              'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out'
            ]"
          />
        </Switch>
        <SwitchLabel class="text-sm text-gray-600">
          By selecting this, you agree to our
          <a href="/privacy-policy" class="font-semibold text-indigo-600">
            Privacy Policy
          </a>
          .
        </SwitchLabel>
      </SwitchGroup>
    </div>
    <!-- Submit button -->
    <div class="mt-6">
      <button
        type="submit"
        class="block w-full rounded-full bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        :disabled="!agreed"
      >
        Let's talk
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { Switch, SwitchGroup, SwitchLabel } from "@headlessui/vue";
import FormInput from "./FormInput.vue";
import FormTextarea from "./FormTextarea.vue";

const formData = ref({
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  phoneNumber: "",
  message: "",
});

const agreed = ref(false);

const handleSubmit = () => {
  if (agreed.value) {
    // Submit the form data
    console.log(formData.value);
  }
};
</script>

