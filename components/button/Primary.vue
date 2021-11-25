<template>
  <button
    class="
      bg-primary
      text-white
      py-[0.625rem]
      px-[1.125rem]
      font-medium
      text-sm
      rounded-full
      capitalize
    "
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
</style>