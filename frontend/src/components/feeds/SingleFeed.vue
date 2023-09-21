<template>
  <div class="p-4 bg-white border border-gray-200 rounded-lg">
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center space-x-6">
        <img :src="userImage" class="w-[40px] rounded-full" />
        <p class="font-bold">{{ postAuthor }}</p>
      </div>
      <p class="text-gray-500">{{ postDate }}</p>
    </div>
    <img v-if="postImage" :src="postImage" alt="" class="w-full rounded-lg" />
    <p class="my-6">{{ postTextContent }}</p>

    <div class="flex justify-between my-6">
      <div class="flex space-x-6">
        <div class="flex items-center space-x-2">
          <font-awesome-icon class="text-red-700" :icon="['fas', 'heart']" />
          <span class="text-xs text-gray-500"> {{ postLikes }} Likes</span>
        </div>
        <div class="flex items-center space-x-2">
          <font-awesome-icon class="text-blue-500" :icon="['far', 'comments']" />
          <span class="text-xs text-gray-500"> {{ postComments }} Comments</span>
        </div>
      </div>
      <div>
        <font-awesome-icon :icon="['fas', 'ellipsis-vertical']" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleFeed',
  props: {
    postTextContent: String,
    userImage: String,
    postImage: String,
    postLikes: Number,
    postComments: Number,
    postDate: String,
    postAuthor: String
  }
}
</script>
