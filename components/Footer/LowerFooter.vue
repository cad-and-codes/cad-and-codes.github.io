<template>
  <!-- Footer container with responsive layout -->
  <footer class="bg-white">
    <div class="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
      <!-- Flex wrapper for content alignment -->
      <div class="text-center sm:flex sm:justify-between sm:items-center sm:text-left">
        <!-- Copyright information component -->
        <Copyright />

        <!-- Navigation links for footer -->
        <nav aria-label="Footer Links" class="mt-4 sm:mt-0">
          <ul class="flex justify-center gap-4 text-sm text-gray-500">
            <!-- Terms of Service link -->
            <li>
              <LowerFooterLink text="Terms of Service" href="/terms-of-service" />
            </li>
            <!-- Privacy Policy link -->
            <li>
              <LowerFooterLink text="Privacy Policy" href="/privacy-policy" />
            </li>
            <!-- FAQs link -->
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
// Import the Copyright component to display copyright info
import Copyright from "~/components/Footer/CopyrightInfo.vue";

// Import the LowerFooterLink component for individual navigation links
import LowerFooterLink from "~/components/Footer/LowerFooterLink.vue";
</script>
