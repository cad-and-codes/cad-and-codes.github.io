<template>
  <div class="bg-white">
    <!-- Main header section -->
    <Header />

    <!-- Hero section -->
    <HeroSection />
    <!-- Visual divider -->
    <Divider />
    <!-- Upper footer section -->
    <UpperFooter />
    <!-- Visual divider -->
    <Divider />
    <!-- Lower footer section -->
    <LowerFooter />
  </div>
</template>

<script setup>
// Import required components
import Header from '~/components/Header/Header.vue'
import Divider from '~/components/Divider.vue'
import HeroSection from '~/components/HeroSection/HeroSection.vue'
import UpperFooter from '~/components/Footer/UpperFooter.vue'
import LowerFooter from '~/components/Footer/LowerFooter.vue'

// Set SEO meta tags for the page
useSeoMeta({ 
  title: 'CAD & CODES | FAQs',
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

// Set additional head attributes like language and favicon
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
