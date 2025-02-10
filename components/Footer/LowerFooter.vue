<template>
  <footer class="bg-white">
    <div
      class="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8 lg:py-6"
    >
      <div class="text-center sm:flex sm:justify-between sm:text-left">
        <Copyright />
        <p class="text-sm text-gray-500">
          <LowerFooterLink text="Terms of Service" href="/terms-of-service" />
          <LowerFooterLink text="Privacy Policy" href="/privacy-policy" />
          <LowerFooterLink text="FAQs" href="/faqs" />
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import Copyright from "~/components/Footer/CopyrightInfo.vue";
import LowerFooterLink from "~/components/Footer/LowerFooterLink.vue";
</script>

