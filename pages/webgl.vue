<template>
  <div class="webGLPageContainer h-full">
    <PagesTitle>Web GL</PagesTitle>
    <div class="webGLContainer flex justify-center items-start p-8 h-full">
      <client-only>
        <GraphicsWebglCanvas />
      </client-only>
    </div>
  </div>
</template>

<script setup lang="ts">
//
</script>

<style scoped lang="css">
.webGLContainer {
  min-height: 100vh;
}
</style>