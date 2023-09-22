<template>
  <div class="grid grid-cols-4 gap-4 mx-auto max-w-7xl">
    <!-- left colomn -->
    <div class="col-span-1 main-left">
      <div class="p-4 bg-white border border-gray-200 rounded-lg">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, quos quod molestias eum
        itaque cupiditate nemo recusandae eligendi dolores velit!
      </div>
    </div>

    <!-- Left colomn -->
    <div class="col-span-3 space-y-4 main-center">
      <!-- New Post -->
      <div class="p-4 bg-white border border-gray-200 rounded-lg">
        <!-- Sender and receiver chat history -->
      </div>
      <div class="bg-white border border-gray-200 rounded-lg">
        <div class="p-4 pb-0">
          <form-text-area v-model="massageText" placeholder="Message content" />
        </div>
        <div class="flex items-center justify-between p-4">
          <!-- create a new button component with a chiled component to accept an icon -->
          <action-button title="Send" type="primary" :isSmall="true" class="w-32" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ActionButton from '@/components/shared/ActionButton.vue'
import FormTextArea from '@/components/shared/FormTextArea.vue'
export default {
  name: 'ChatSystem',
  components: {
    FormTextArea,
    ActionButton
  },
  props: {
    userImage: String
  },
  data() {
    return {
      massageText: '',
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
