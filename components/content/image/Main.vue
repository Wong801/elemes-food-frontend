<template>
  <div class="relative">
    <div
      class="
        bg-gray-primary bg-opacity-10
        w-3/4
        lg:w-full
        mx-0
        lg:mx-auto
        p-7
        lg:p-14
        rounded-full
      "
    >
      <img
        :src="require(`~/static/images/foods/products/${img}`)"
        :alt="product"
        class="w-full"
      />
    </div>
    <ContentCardReview :img="img" :product="product" :category="category" :stars="stars" />
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true,
    },
    product: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    stars: {
      type: Number,
      required: true,
      default: 0,
    },
  },
};
</script>

<style>
</style>