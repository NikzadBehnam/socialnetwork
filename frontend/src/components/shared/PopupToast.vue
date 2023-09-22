
<script setup>
import { useToastStore } from '@/stores/toast';
const store = useToastStore()
return {
  store
}
</script>
<template>
  <div v-if="store.isVisible"
    class="fixed p-6 transition duration-500 ease-in-out delay-500 shadow-xl rounded-xl top-full right-8">
    :class="store.classes"
    >{{ store.message }}
  </div>
</template>
>