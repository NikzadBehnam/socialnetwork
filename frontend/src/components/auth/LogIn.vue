<template>
  <form action="" class="space-y-6">
    <div>
      <label for="">E-Mail</label>
      <form-input v-model="email" inputType="email" placeholder="Your e-mail" />
    </div>
    <div>
      <label for="">Password</label>
      <form-input v-model="password" inputType="password" placeholder="Password" />
    </div>

    <div>
      <action-button title="Log In" type="success" />
    </div>
  </form>
</template>

<script>
import FormInput from '../shared/FormInput.vue';
import ActionButton from '../shared/ActionButton.vue';
export default {
  name: "SignUp",
  data() {
    return {
      email: "",
      password: "",
    }
  },
  components: {
    FormInput,
    ActionButton
  }
}
</script>