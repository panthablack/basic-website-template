<template>
  <div class="homePageContainer">
    <Title>Home</Title>
    <div class="landingPageContainer">
      <SectionsHero />
      <SectionsFeature />
      <SectionsTestimonial />
      <SectionsPricing />
      <SectionsFAQ />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'landing'
})
</script>