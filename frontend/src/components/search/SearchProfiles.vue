<template>
  <div class="grid grid-cols-4 gap-4 mx-auto max-w-7xl">

    <!-- left colomn -->
    <div class="grid col-span-3 gap-4 p-4 pt-0 main-left">
      <div class="grid-cols-2 p-4 bg-white border border-gray-200 rounded-lg">
        <div class="flex">
          <form-input v-model="searchText" placeholder="Search profiles..." />
          <action-button isSmall="true" title="Search" type="primary" class="ml-2 w-fit" />
        </div>
      </div>
      <div class="flex flex-row flex-wrap justify-center gap-3 p-4 bg-white border border-gray-200 rounded-lg">
        <div v-for="i in 10" :key="i">
          <profile-intro-card userImage="https://shorturl.at/rIKMU" userName="John Doe" friendsCount="10"
            postsCount="120" />
        </div>
      </div>
      <div class="grid-cols-2 p-4 bg-white border border-gray-200 rounded-lg">
        <div class="flex flex-wrap justify-between gap-3 py-4">
          <div v-for="i in 10" :key="i">
            <single-feed :postTextContent="postTextContent" postLikes="182" postComments="120" postDate="12/12/2022"
              postAuthor="John Doe" userImage="https://shorturl.at/rIKMU" />
          </div>

        </div>
      </div>
    </div>

    <!-- right colomn -->
    <div class="col-span-1 space-y-4 main-right">
      <div class="p-4 bg-white border border-gray-200 rounded-lg">
        <h1 class="mb-4 text-2xl ">Suggested people</h1>
        <div class="space-y-6">
          <suggested-people-card v-for="index in 5" :key="index" :userImage="userImage" userName="AnyName" />
        </div>
      </div>

      <div class="p-4 bg-white border border-gray-200 rounded-lg">
        <h1 class="mb-4 text-2xl ">Trends</h1>
        <div class="space-y-6">
          <trends-card v-for="index in 5" :key="index" hashtag="hashtag" />
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import FormInput from '@/components/shared/FormInput.vue'
import ActionButton from '@/components/shared/ActionButton.vue'
import ProfileIntroCard from '@/components/shared/cards/ProfileIntroCard.vue'
import SingleFeed from '@/components/feeds/SingleFeed.vue'
import SuggestedPeopleCard from '@/components/shared/cards/SuggestedPeopleCard.vue'
import TrendsCard from '@/components/shared/cards/TrendsCard.vue'
export default {
  name: 'SearchProfiles',
  components: {
    FormInput,
    ActionButton,
    ProfileIntroCard,
    SingleFeed,
    SuggestedPeopleCard,
    TrendsCard
  },
  data() {
    return {
      searchText: '',
      postTextContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      userImage: 'https://shorturl.at/rIKMU'
    }
  }
}
</script>

<!--  -->
