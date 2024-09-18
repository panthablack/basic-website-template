<template>
  <header class="relative inset-x-0 top-0 z-50 w-full bg-blue-950">
    <NavNavbar
      :mobile-menu-open
      @update:mobile-menu-open="mobileMenuOpen = $event"
    />
    <NavMobileMenu
      :mobile-menu-open
      @update:mobile-menu-open="mobileMenuOpen = $event"
    />
  </header>
</template>


<script setup lang="ts">
const mobileMenuOpen: Ref<boolean> = ref(false)
</script>