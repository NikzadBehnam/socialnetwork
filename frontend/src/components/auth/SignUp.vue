<template>
  <form action="" class="space-y-6">
    <div>
      <label for="">E-Mail</label>
      <form-input v-model="email" inputType="email" placeholder="Your e-mail" />
    </div>
    <div>
      <label for="">Name</label>
      <form-input v-model="name" imputType="text" placeholder="Your name" />
    </div>
    <div>
      <label for="">Password</label>
      <form-input v-model="password" inputType="password" placeholder="Password" />
    </div>
    <div>
      <label for="">Confirm Password</label>
      <form-input v-model="confirmPassword" inputType="password" placeholder="Confirm password" />
    </div>
    <div>
      <action-button title="Sign Up" type="primary" />
    </div>
  </form>
</template>

<script>
import FormInput from '../shared/FormInput.vue'
import ActionButton from '../shared/ActionButton.vue'
export default {
  name: 'SignUp',
  data() {
    return {
      email: '',
      name: '',
      password: '',
      confirmPassword: ''
    }
  },
  components: {
    FormInput,
    ActionButton
  }
}
</script>
