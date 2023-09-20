<template lang="">
    <button :class="buttonClass" class="hover:shadow" >{{title}}</button>
</template>
<script>
export default {
  name: "ActionButton",
  props: {
    title: String,
    type: {
      type: String,
      default: 'secondary',
      validator: (value) => {
        return ['secondary', 'primary', 'danger', 'success', 'warning'].includes(value);
      },
    },
  },
  computed: {
    buttonClass() {
      return {
        [this.type]: true
      }
    }
  }
}
</script>
<style scoped>
  .primary{
   @apply rounded bg-blue-400 text-white px-3 py-2;       
  }
  .secondary{
    @apply rounded bg-gray-400 text-white px-3 py-2;   
  }
  .danger{
    @apply rounded bg-red-400 text-white px-3 py-2;   
    
  }
  .success{
    @apply rounded bg-green-400 text-white px-3 py-2;   

  }
  .warning{
    @apply rounded bg-yellow-400 text-white px-3 py-2;   

  }

</style>