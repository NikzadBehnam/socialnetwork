<template>
  <input
    :type="inputType"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="w-full px-4 py-3 border border-gray-200 rounded focus:outline-gray-300"
  />
</template>

<script>
export default {
  name: 'FormInput',
  props: {
    modelValue: String,
    placeholder: String,

    inputType: {
      type: String,
      default: 'text',
      required: true
    }
  }
}
</script>
