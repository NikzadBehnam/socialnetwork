<template>
  <div class="grid grid-cols-4 gap-4 mx-auto max-w-7xl">
    <!-- left colomn -->
    <div class="col-span-1 main-left">
      <profile-intro-card userName="John Doe" userImage="https://shorturl.at/LTUV5" friendsCount="10" postsCount="20" />
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
        <div class="space-y-6">
          <suggested-people-card v-for="index in 5" :key="index" :userImage="userImage" userName="AnyName" />
        </div>
      </div>
      <div class="p-4 bg-white border border-gray-200 rounded-lg">
        <h3 class="mb-6 text-xl">Trends</h3>
        <trends-card v-for="index in 5" :key="index" hashtag="#codewithstain" />
      </div>
    </div>
  </div>
</template>
<script>
import TrendsCard from '@/components/shared/cards/TrendsCard.vue'
import SingleFeed from './SingleFeed.vue'
import FormTextArea from '@/components/shared/FormTextArea.vue'
import ActionButton from '@/components/shared/ActionButton.vue'
import SuggestedPeopleCard from '@/components/shared/cards/SuggestedPeopleCard.vue'
import ProfileIntroCard from '@/components/shared/cards/ProfileIntroCard.vue'
export default {
  name: 'DailyFeeds',
  components: {
    FormTextArea,
    ActionButton,
    SingleFeed,
    SuggestedPeopleCard,
    TrendsCard,
    ProfileIntroCard
  },
  data() {
    return {
      newPostText: '',
      userImage: "https://shorturl.at/rIKMU ",
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
