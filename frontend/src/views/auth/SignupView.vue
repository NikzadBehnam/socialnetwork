<template>
  <div class="grid grid-cols-2 gap-4 mx-auto max-w-7xl">
    <div class="main-left">
      <div class="min-h-full p-12 bg-white border border-gray-200 rounded-lg">
        <h1 class="mb-6 text-2xl">Sign up</h1>
        <p class="mb-6 leading-loose text-justify text-gray-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magnam. Aut, corrupti
          veniam? Odit doloremque enim nostrum fugit, reiciendis vitae cumque doloribus ipsam illo
          dicta voluptates eaque ex accusantium ab a! A ratione quasi quia ullam asperiores labore
          vitae dolore.lorem
        </p>
        <p class="font-bold">
          Lorem ipsum dolor sit?
          <router-link :to="{ name: 'login' }" class="underline">Login</router-link>
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
    </div>
    <div class="main-right">
      <div class="p-12 bg-white border border-gray-200 rounded-lg">
        <sign-up />
      </div>
    </div>
  </div>
</template>

<script>
import SignUp from '@/components/auth/SignUp.vue'
export default {
  name: 'SignupView',
  components: {
    SignUp
  }
}
</script>
