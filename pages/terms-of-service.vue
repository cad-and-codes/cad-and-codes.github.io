<template>
  <div class="bg-white">
    <!-- Header Section -->
    <Header />

    <!-- Hero Section -->
    <HeroSection />

    <!-- Divider between content areas -->
    <Divider />

    <!-- Upper Footer Section -->
    <UpperFooter />

    <!-- Divider before the lower footer -->
    <Divider />

    <!-- Lower Footer Section -->
    <LowerFooter />
  </div>
</template>

<script setup>
// Importing required components
import Header from '~/components/Header/Header.vue'
import HeroSection from '~/components/HeroSection/HeroSection.vue'
import Divider from '~/components/Divider.vue'
import UpperFooter from '~/components/Footer/UpperFooter.vue'
import LowerFooter from '~/components/Footer/LowerFooter.vue'

// Configure SEO metadata for the page
useSeoMeta({ 
  title: 'CAD & CODES | Terms of Service',
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

// Set HTML attributes and include favicon using useHead
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
