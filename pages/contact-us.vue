<template>
  <!-- Main container with white background -->
  <div class="bg-white">
    <!-- Header component -->
    <Header />

    <!-- Contacts component -->
    <Contacts />
    
    <!-- Divider component for visual separation -->
    <Divider />
    
    <!-- UpperFooter component -->
    <UpperFooter />
    
    <!-- Divider component for visual separation -->
    <Divider />
    
    <!-- LowerFooter component -->
    <LowerFooter />
  </div>
</template>

<script setup>
// Importing Vue components
import Header from '~/components/Header/Header.vue'
import Contacts from '~/components/Contact/Contacts.vue'
import Divider from '~/components/Divider.vue'
import UpperFooter from '~/components/Footer/UpperFooter.vue'
import LowerFooter from '~/components/Footer/LowerFooter.vue'

/* SEO Meta Tags Setup */
// Configuring SEO meta data for the page
useSeoMeta({ 
  title: 'CAD & CODES | Contact Us',
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

// Configuring HTML head properties
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
