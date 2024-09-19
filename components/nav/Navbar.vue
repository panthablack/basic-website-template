<template>
  <nav
    class="flex items-center justify-between p-6 lg:px-8 relative"
    aria-label="Global"
  >
    <div class="flex lg:flex-1">
      <NuxtLink
        to="/"
        class="-m-1.5 p-1.5"
      >
        <span class="sr-only">ManMachine</span>
        <LogosManMachine class="h-8 w-auto" />
      </NuxtLink>
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
      <NuxtLink
        v-for="item in navigation"
        :key="item.name"
        :to="item.href"
        class="text-sm font-semibold leading-6 text-white"
      >{{ item.name }}</NuxtLink>
    </div>
    <div class="hidden lg:flex lg:flex-1 lg:justify-end">
      <NuxtLink
        href="/auth/login"
        class="text-sm font-semibold leading-6 text-white"
      >Log in <span aria-hidden="true">&rarr;</span></NuxtLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { Bars3Icon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Pinia', href: '/pinia' },
  { name: 'Web GL', href: '/webgl' },
]

const emit = defineEmits(['update:mobile-menu-open'])
</script>