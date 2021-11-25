<template>
  <div class="relative">
    <div v-if="hot" class="absolute -right-4 -top-3">
      <p class="text-[0.5rem] font-sans font-bold text-white bg-[#E7462D] px-2 py-0.5 rounded-full">
        Hot
      </p>
    </div>
    <nuxt-link
      :to="link"
      class="font-medium text-sm text-gray-light1 capitalize"
    >
      {{ text }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    hot: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
</style>