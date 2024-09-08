<template>
  <canvas
    id="webglcanvas"
    width="640"
    height="480"
  />
</template>

<script setup lang="ts">
import { useWebGLStore } from '@/stores/webgl'
const webGLStore = useWebGLStore()
onMounted(() => {
  webGLStore.start('webglcanvas')
})
</script>