<template>
  <div class="bg-white">
    <!-- Header section -->
    <Header />

    <!-- Hero section for a featured message -->
    <HeroSection />

    <!-- Separator divider -->
    <Divider />

    <!-- Upper part of the footer -->
    <UpperFooter />

    <!-- Separator divider -->
    <Divider />

    <!-- Lower part of the footer -->
    <LowerFooter />
  </div>
</template>

<script setup>
// Importing components used on this page
import Header from '~/components/Header/Header.vue'
import Divider from '~/components/Divider.vue'
import HeroSection from '~/components/HeroSection/HeroSection.vue'
import UpperFooter from '~/components/Footer/UpperFooter.vue'
import LowerFooter from '~/components/Footer/LowerFooter.vue'

// Configure SEO metadata for the page
useSeoMeta({ 
  title: 'CAD & CODES | Privacy Policy',
  description: "CAD & CODES is a software development company that specializes in web development, mobile app development, and digital marketing. We're here to help you grow your business.",
  ogTitle: 'Your OpenGraph Title',
  ogDescription: 'Your OpenGraph description',
  ogImage: 'https://yourwebsite.com/your-image.png',
  ogUrl: 'https://yourwebsite.com/your-page-url',
  twitterTitle: 'Your Twitter Title',
  twitterDescription: 'Your Twitter Description',
  twitterImage: 'https://yourwebsite.com/your-image.png',
  twitterCard: 'summary'
})

// Define additional head properties like language and favicon
useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.svg'
    }
  ]
})
</script>
