<template>
  <div class="grid grid-cols-4 gap-4 mx-auto max-w-7xl">

    <!-- left colomn -->
    <div class="col-span-1 main-left">
      <div class="p-4 text-center bg-white border border-gray-200 rounded-lg">
        <img alt="Woman Image" class="object-contain mb-6 text-center rounded-full w-100 h-100 enter">
        <p class="font-bold">Code with me</p>
        <div class="flex justify-around mt-6 space-x-8">
          <p class="text-gray-500 text-sx">182 friends</p>
          <p class="text-gray-500 text-sx">120 posts</p>
        </div>
      </div>
    </div>

    <!-- middle colomn -->
    <div class="col-span-2 space-y-4 main-center">

      <!-- New Post -->
      <div class="bg-white border border-gray-200 rounded-lg ">
        <div class="p-4">
          <form-text-area v-model="text" placeholder="What's on your mind" />
        </div>
        <div class="flex items-center justify-between p-4">
          <action-button title="Attach image" type="secondary" />
          <action-button title="Post" type="primary" />
        </div>
      </div>

      <!-- Posts -->
      <div class="p-4 bg-white border border-gray-200 rounded-lg">
        <div class="flex items-center justify-between mb-6">
          <div class="flex items-center space-x-6">
            <img :src="userImage" class="w-[40px] rounded-full">
            <p class="font-bold">Code with me</p>
          </div>
          <p class="text-gray-500">18 minutes ago</p>
        </div>
        <img src="https://picsum.photos/200" alt="" class="w-full rounded-lg">
      </div>


    </div>

    <!-- right colomn -->
    <div class="col-span-1 space-y-4 main-center">
      <div class="bg-white border border-gray-200 rounded-lg ">
        Right column
      </div>
    </div>
  </div>
</template>
<script>
import FormTextArea from '@/components/shared/FormTextArea.vue';
import ActionButton from '@/components/shared/ActionButton.vue';
import userImage from '@/assets/userimage.png'
export default {
  name: "DailyFeeds",
  components: {
    FormTextArea,
    ActionButton
  },
  data() {
    return {
      text: '',
      userImage
    }
  }
}

</script>

<!-- src="https://shorturl.at/bdqJW" -->