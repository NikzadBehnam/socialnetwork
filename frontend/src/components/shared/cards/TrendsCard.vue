<template>
  <div class="space-y-4">
    <div class="flex items-center justify-between space-y-4">
      <div class="flex items-center space-x-2">
        <p class="flex flex-col text-xs">
          <span class="text-lg font-bold">{{ hashtag }}</span>
          <span class="text-gray-500">180 posts</span>
        </p>
      </div>
      <action-button :isSmall="true" title="See all" type="info" />
    </div>
  </div>
</template>
<script>
import ActionButton from '@/components/shared/ActionButton.vue'
export default {
  name: 'TrendsCard',
  props: {
    hashtag: String
  },
  components: {
    ActionButton
  }
}
</script>
