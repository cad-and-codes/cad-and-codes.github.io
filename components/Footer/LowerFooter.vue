<template>
  <footer class="bg-white">
    <div class="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
      <div class="text-center sm:flex sm:justify-between sm:items-center sm:text-left">
        <Copyright />
        <nav aria-label="Footer Links" class="mt-4 sm:mt-0">
          <ul class="flex justify-center gap-4 text-sm text-gray-500">
            <li>
              <LowerFooterLink text="Terms of Service" href="/terms-of-service" />
            </li>
            <li>
              <LowerFooterLink text="Privacy Policy" href="/privacy-policy" />
            </li>
            <li>
              <LowerFooterLink text="FAQs" href="/faqs" />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script setup>
import Copyright from "~/components/Footer/CopyrightInfo.vue";
import LowerFooterLink from "~/components/Footer/LowerFooterLink.vue";
</script>

