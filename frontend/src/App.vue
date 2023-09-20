<script setup>
</script>

<template>
  <nav class="px-8 py-10 border-b border-gray-200">
    <div class="mx-auto max-w-7xl">
      <div class="flex items-center justify-between">
        <div class="menu-left">
          <a href="#" class="text-xl">Wey</a>
        </div>
        <div class="flex space-x-12 menu-center">
          <a href="#">
            <font-awesome-icon class="text-2xl" :icon="['fas', 'house']" />
          </a>
          <a href="#">
            <font-awesome-icon class="text-2xl" :icon="['far', 'comment-dots']" />
          </a>
          <a href="#">
            <font-awesome-icon class="text-2xl" :icon="['fas', 'bell']" />
          </a>
          <a href="#">
            <font-awesome-icon class="text-2xl" :icon="['fas', 'magnifying-glass']" />
          </a>
        </div>
        <div class="w-10 h-10 border rounded-full border-gray-50">
          <img :src="userImage" alt="">
        </div>
      </div>
    </div>
  </nav>
  <main class="px-8 py-6 bg-gray-100">
    <RouterView />
  </main>
</template>
<script >
import userImage from '@/assets/userimage.png'
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {
      userImage
    }
  }
}
</script>
<style scoped></style>
