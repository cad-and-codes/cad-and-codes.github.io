<template>
  <!-- Main container with a white background -->
  <div class="bg-white">
    <!-- Header section -->
    <Header />

    <!-- Hero section -->
    <HeroSection />

    <!-- Divider between sections -->
    <Divider />

    <!-- Upper footer section -->
    <UpperFooter />

    <!-- Divider between footer sections -->
    <Divider />

    <!-- Lower footer section -->
    <LowerFooter />
  </div>
</template>

<script setup>
// Importing components used in the page
import Header from '~/components/Header/Header.vue'
import Divider from '~/components/Divider.vue'
import HeroSection from '~/components/HeroSection/HeroSection.vue'
import UpperFooter from '~/components/Footer/UpperFooter.vue'
import LowerFooter from '~/components/Footer/LowerFooter.vue'

// SEO metadata for the page using useSeoMeta
useSeoMeta({ 
  title: 'CAD & CODES | Services',
  description: "CAD & CODES is a software development company that specializes in web development, mobile app development, and digital marketing. We're here to help you grow your business.",
  // OpenGraph meta tags
  ogTitle: 'Your OpenGraph Title',
  ogDescription: 'Your OpenGraph description',
  ogImage: 'https://yourwebsite.com/your-image.png',
  ogUrl: 'https://yourwebsite.com/your-page-url',
  // Twitter meta tags
  twitterTitle: 'Your Twitter Title',
  twitterDescription: 'Your Twitter Description',
  twitterImage: 'https://yourwebsite.com/your-image.png',
  twitterCard: 'summary'
})

// Additional head configuration using useHead
useHead({
  // Set the language attribute for the HTML tag
  htmlAttrs: { lang: 'en' },
  // Define favicon for the webpage
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.svg'
    }
  ]
})
</script>
