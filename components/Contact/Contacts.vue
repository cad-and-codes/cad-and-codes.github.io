<template>
  <section class="relative bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-16 lg:grid-cols-2">
        <ContactHeroSection />
        <div class="rounded-3xl bg-white p-4 shadow-lg lg:p-12">
          <SectionHeader
            title="Get in touch"
            description="We'd love to hear from you"
          />
          <ContactForm />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ContactForm from '~/components/Contact/ContactForm.vue'
import ContactHeroSection from '~/components/Contact/ContactHeroSection.vue'
import SectionHeader from '~/components/Header/SectionHeader.vue'
</script>

