<template>
  <!-- Main container with white background -->
  <div class="bg-white">
    <!-- Header component -->
    <Header />
    <!-- Hero section component -->
    <HeroSection />
    <!-- Divider component -->
    <Divider />
    <!-- Upper footer component -->
    <UpperFooter />
    <!-- Divider component -->
    <Divider />
    <!-- Lower footer component -->
    <LowerFooter />
  </div>
</template>

<script setup>
// Import components for the page
import Header from '~/components/Header/Header.vue'
import Divider from '~/components/Divider.vue'
import HeroSection from '~/components/HeroSection/HeroSection.vue'
import UpperFooter from '~/components/Footer/UpperFooter.vue'
import LowerFooter from '~/components/Footer/LowerFooter.vue'

/*
  SEO Meta Tags:
  Sets up meta tags for search engines and social media sharing
*/
useSeoMeta({ 
  title: 'CAD & CODES | Home',
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

/*
  Global head configuration:
  Sets the language attribute and favicon for the document
*/
useHead({
  htmlAttrs: { lang: 'en' },
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.svg' }
  ]
})
</script>
