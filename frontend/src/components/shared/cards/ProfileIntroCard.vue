<template>
  <div class="p-4 text-center bg-white border border-gray-200 rounded-lg w-fit ">
    <div class="flex flex-col items-center justify-center ">
      <img :src="userImage" alt="Woman Image" class="object-cover w-20 h-20 mb-6 text-center border rounded-full enter" />
      <p class="font-bold">{{ userName }}</p>
    </div>
    <div class="flex justify-around mt-6 space-x-8 border-t-2">
      <span class="flex flex-col text-gray-500 text-sx">
        <span class="text-sm">{{ friendsCount }}</span>
        <span>friends</span>
      </span>
      <span class="flex flex-col text-gray-500 text-sx">
        <span class="text-sm">{{ postsCount }}</span>
        <span>Posts</span>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProfileIntroCard',
  props: {
    userName: String,
    userImage: String,
    friendsCount: Number,
    postsCount: Number
  }
}
</script>
