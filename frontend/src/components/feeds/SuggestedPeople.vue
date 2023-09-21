<template>
  <div class="flex items-center justify-between">
    <div class="flex items-center space-x-2">
      <img :src="userImage" class="w-[40px] rounded-full" />
      <p class="font-bold">{{ userName }}</p>
    </div>
    <action-button :isSmall="true" title="Show" type="primary" />
  </div>
</template>
<script>
import ActionButton from '@/components/shared/ActionButton.vue'
export default {
  name: 'SuggestedPeople',
  props: {
    userImage: String,
    userName: String
  },
  components: {
    ActionButton
  }
}
</script>
