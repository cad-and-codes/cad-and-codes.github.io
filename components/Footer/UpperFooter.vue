<template>
  <!-- Main footer container with background and responsive spacing -->
  <footer class="bg-white">
    <div class="mx-auto max-w-screen-xl px-4 pb-6 pt-6 sm:px-6 lg:px-8 lg:pt-10">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
        
        <!-- Left Column: Logo and Social Icons -->
        <div>
          <FooterLogo />
          <SocialLinks />
        </div>

        <!-- Right Column: Footer Link Sections and Contact -->
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
          
          <!-- About Us Section -->
          <FooterLinksGroup title="About Us">
            <UpperFooterLink text="Company History" href="/" />
            <UpperFooterLink text="Meet the Team" href="/" />
            <UpperFooterLink text="Careers" href="/" />
          </FooterLinksGroup>

          <!-- Our Services Section -->
          <FooterLinksGroup title="Our Services">
            <UpperFooterLink text="Company History" href="/" />
            <UpperFooterLink text="Meet the Team" href="/" />
            <UpperFooterLink text="Careers" href="/" />
          </FooterLinksGroup>

          <!-- Helpful Links Section -->
          <FooterLinksGroup title="Helpful Links">
            <UpperFooterLink text="Company History" href="/" />
            <UpperFooterLink text="Meet the Team" href="/" />
            <!-- Live Chat Link with Notification Ping -->
            <li>
              <a class="group flex justify-center gap-1.5 sm:justify-start" href="#">
                <span class="text-gray-900 hover:text-blue-900 transition duration-300">
                  Live Chat
                </span>
                <span class="relative flex h-2 w-2">
                  <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"></span>
                  <span class="relative inline-flex h-2 w-2 rounded-full bg-teal-500"></span>
                </span>
              </a>
            </li>
          </FooterLinksGroup>

          <!-- Footer Contact Information -->
          <FooterContact />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
/*
  Importing necessary components for the Footer.
  These components are organized under the "Footer" folder.
*/
import FooterLogo from '~/components/Footer/FooterLogo.vue'
import SocialLinks from '~/components/Footer/SocialLinks.vue'
import FooterLinksGroup from '~/components/Footer/FooterLinksGroup.vue'
import FooterContact from '~/components/Footer/FooterContact.vue'
import UpperFooterLink from '~/components/Footer/UpperFooterLink.vue'
</script>
