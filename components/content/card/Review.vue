<template>
  <div class="absolute bottom-0 lg:bottom-10 right-0 lg:right-auto pt-3 pb-[1.375rem] pl-[1.375rem] pr-[3.25rem] bg-white bg-opacity-75 rounded-2xl flex gap-x-5 backdrop-blur-md">
    <img :src="require(`@/static/images/foods/products/${img}`)" alt="" class="h-[3.25rem] self-end">
    <div class="capitalized">
      <h3 class="text-sm font-bold">{{ product }}</h3>
      <p class="text-xs">{{ category }}</p>
      <PartialStarRating :stars="stars" class="pt-2" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true
    },
    product: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    stars: {
      type: Number,
      required: true,
      default: 0
    },
  }
}
</script>