<template>
  <header class="absolute inset-x-0 top-0 z-50">
    <TailwindNavbar
      :mobile-menu-open
      @update:mobile-menu-open="mobileMenuOpen = $event"
    />
    <TailwindMobileMenu
      :mobile-menu-open
      @update:mobile-menu-open="mobileMenuOpen = $event"
    />
  </header>
</template>


<script setup lang="ts">
const mobileMenuOpen: Ref<boolean> = ref(false)
</script>