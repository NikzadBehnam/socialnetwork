<template>
  <div class="flex items-center justify-between">
    <div class="flex items-center rounded-full">
      <img :src="userImage" class="object-cover w-10 h-10 rounded-full " />
      <p class="ml-2 font-bold">{{ userName }}</p>
    </div>
    <action-button :isSmall="true" title="Show" type="primary" />
  </div>
</template>
<script>
import ActionButton from '@/components/shared/ActionButton.vue'
export default {
  name: 'SuggestedPeopleCard',
  props: {
    userImage: String,
    userName: String
  },
  components: {
    ActionButton
  }
}
</script>
