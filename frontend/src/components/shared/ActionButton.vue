<template lang="">
  <button :class="[buttonClass, isSmall ? 'py-2 px-3 text-sm' : 'px-4 py-3']" class="hover:shadow">
    {{ title }}
  </button>
</template>
<script>
export default {
  name: 'ActionButton',
  props: {
    title: String,
    isSmall: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'secondary',
      validator: (value) => {
        return ['secondary', 'primary', 'danger', 'success', 'warning', 'info'].includes(value)
      }
    }
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
.primary {
  @apply rounded bg-blue-400 text-white;
}
.secondary {
  @apply rounded bg-gray-400 text-white;
}
.danger {
  @apply rounded bg-red-400 text-white;
}
.success {
  @apply rounded bg-green-400 text-white;
}
.warning {
  @apply rounded bg-yellow-400 text-white;
}
.info {
  @apply rounded bg-blue-800 text-white;
}
</style>
