<template>
  <div class="bg-white">
    <!-- Header Section -->
    <Header />

    <!-- About Section -->
    <AboutSection />

    <!-- Divider -->
    <Divider />

    <!-- Upper Footer Section -->
    <UpperFooter />

    <!-- Divider -->
    <Divider />

    <!-- Lower Footer Section -->
    <LowerFooter />
  </div>
</template>

<script setup>
// Import core components
import Header from '~/components/Header/Header.vue'
import Divider from '~/components/Divider.vue'
import AboutSection from '~/components/AboutSection/AboutSection.vue'
import UpperFooter from '~/components/Footer/UpperFooter.vue'
import LowerFooter from '~/components/Footer/LowerFooter.vue'

/*
 * SEO Meta Information
 * The useSeoMeta hook sets metadata values used by search engines and social media.
 */
useSeoMeta({ 
  title: 'CAD & CODES | About Us',
  description: "CAD & CODES is a software development company specializing in web development, mobile app development, and digital marketing. We're here to help you grow your business.",
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
 * HTML Head Configuration
 * The useHead hook configures global HTML attributes.
 */
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
