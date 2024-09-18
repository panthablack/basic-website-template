<template>
  <div class="piniaTestPageContainer">
    <PagesTitle>Pinia</PagesTitle>
    <div class="clickable text-blue-600">Current Count: {{ counterStore.count }}</div>
    <button @click="counterStore.increment()">+</button>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()
</script>