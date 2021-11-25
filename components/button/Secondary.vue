<template>
  <button 
    class="py-[0.625rem] px-[1.125rem] font-medium text-sm capitalize text-dark rounded-full"
    :class="withBg ? 'bg-gray-light2' : ''"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    withBg: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>

</style>