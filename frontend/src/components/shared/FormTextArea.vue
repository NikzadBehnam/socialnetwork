<template>
  <textarea
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="w-full h-full px-4 py-3 mt-1 border border-gray-200 rounded focus:outline-gray-300"
  >
  </textarea>
</template>

<script>
export default {
  name: 'FormTextArea',
  props: {
    modelValue: String,
    placeholder: String
  }
}
</script>
