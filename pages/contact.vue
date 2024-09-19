<template>
  <div class="contactPageContainer">
    <PagesTitle>Contact</PagesTitle>
    <h2>X: {{ mouse.x }}, Y: {{ mouse.y }}</h2>
    <img
      src="/assets/images/viaduct.jpg"
      alt=""
    >
  </div>
</template>

<script setup lang="ts">
const mouse = useMouse()
</script>