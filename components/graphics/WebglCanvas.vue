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
  const canvasId = 'webglcanvas'
  webGLStore.start(canvasId)
  const context = webGLStore.contexts[canvasId]
  drawRectangle(context)
})
</script>

<style scoped lang="css">
.thing {
  width: 14pn;
}
</style>