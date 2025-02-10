<template>
  <!-- Contact section -->
  <div class="grid gap-4 lg:gap-8">
    <BackGradient1 />
    <section class="relative isolate bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <!-- Contact form and hero section -->
        <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <!-- Hero section -->
          <div class="lg:col-span-2 lg:py-12">
            <ContactHeroSection />
          </div>

          <!-- Contact form -->
          <div class="rounded-3xl bg-white p-4 shadow-lg lg:col-span-3 lg:p-12">
            <SectionHeader
              title="Get in touch"
              description="We'd love to hear from you"
            />
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
    <BackGradient2 />
  </div>
</template>

<script setup>
import { ref } from "vue";
import ContactForm from "~/components/Contact/ContactForm.vue";
import ContactHeroSection from "~/components/Contact/ContactHeroSection.vue";
import BackGradient1 from "~/components/Background/BackGradient-1.vue";
import BackGradient2 from "~/components/Background/BackGradient-2.vue";
import SectionHeader from "~/components/Header/SectionHeader.vue";

const agreed = ref(false);
</script>

