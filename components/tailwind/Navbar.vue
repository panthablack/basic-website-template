<template>
  <nav
    class="flex items-center justify-between p-6 lg:px-8"
    aria-label="Global"
  >
    <div class="flex lg:flex-1">
      <a
        href="#"
        class="-m-1.5 p-1.5"
      >
        <span class="sr-only">ManMachine</span>
        <LogosManMachine class="h-8 w-auto" />
      </a>
    </div>
    <div class="flex lg:hidden">
      <button
        type="button"
        class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
        @click="emit('update:mobile-menu-open', true)"
      >
        <span class="sr-only">Open main menu</span>
        <Bars3Icon
          class="h-6 w-6"
          aria-hidden="true"
        />
      </button>
    </div>
    <div class="hidden lg:flex lg:gap-x-12">
      <a
        v-for="item in navigation"
        :key="item.name"
        :href="item.href"
        class="text-sm font-semibold leading-6 text-white"
      >{{ item.name }}</a>
    </div>
    <div class="hidden lg:flex lg:flex-1 lg:justify-end">
      <a
        href="#"
        class="text-sm font-semibold leading-6 text-white"
      >Log in <span aria-hidden="true">&rarr;</span></a>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { Bars3Icon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

const emit = defineEmits(['update:mobile-menu-open'])
</script>