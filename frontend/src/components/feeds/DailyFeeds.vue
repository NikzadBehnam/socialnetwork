<template>
  <div class="grid grid-cols-4 gap-4 mx-auto max-w-7xl">
    <!-- left colomn -->
    <div class="col-span-1 main-left">
      <div class="p-4 text-center bg-white border border-gray-200 rounded-lg">
        <img src="https://shorturl.at/bdqJW" alt="Woman Image"
          class="object-contain mb-6 text-center rounded-full w-100 h-100 enter" />
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
      <div class="bg-white border border-gray-200 rounded-lg">
        <div class="p-4">
          <form-text-area v-model="newPostText" placeholder="What's on your mind" />
        </div>
        <div class="flex items-center justify-between p-4">
          <action-button title="Attach image" type="secondary" class="w-32" />
          <action-button title="Post" type="primary" class="w-32" />
        </div>
      </div>


      <single-feed v-for="post in 5" :key="post" :postImage="post === 3 ? postImage : null" :userImage="userImage"
        :postAuthor="postAuthor" :postComments="postComments" :postLikes="postLikes" :postDate="postDate"
        :postTextContent="postTextContent" />
    </div>

    <!-- right colomn -->
    <div class="col-span-1 space-y-4 main-right">
      <div class="p-4 bg-white border border-gray-200 rounded-lg">
        <h3 class="mb-6 text-xl">People you may know</h3>
        <div class="space-y-4">
          <suggested-people v-for="index in  5 " :key="index" :userImage="userImage" userName="AnyName" />
        </div>
      </div>
      <div class="p-4 bg-white border border-gray-200 rounded-lg">
        <h3 class="mb-6 text-xl">Trends</h3>
        <trends-section v-for="index in  5 " :key="index" hashtag="#codewithstain" />
      </div>
    </div>
  </div>
</template>
<script>
import TrendsSection from './TrendsSection.vue'
import SingleFeed from './SingleFeed.vue'
import FormTextArea from '@/components/shared/FormTextArea.vue'
import ActionButton from '@/components/shared/ActionButton.vue'
import userImage from '@/assets/userimage.png'
import SuggestedPeople from '@/components/feeds/SuggestedPeople.vue'
export default {
  name: 'DailyFeeds',
  components: {
    FormTextArea,
    ActionButton,
    SingleFeed,
    SuggestedPeople,
    TrendsSection
  },
  data() {
    return {
      newPostText: '',
      userImage,
      postTextContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      postImage: 'https://picsum.photos/200',
      postLikes: 182,
      postComments: 120,
      postDate: '12/12/2022',
      postAuthor: 'Code with me'
    }
  }
}
</script>

<!--  -->
