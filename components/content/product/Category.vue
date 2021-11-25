<template>
  <div class="py-16">
    <ContentTitle title="browse our category" text="receipt" />
    <div id="food-category" class="flex gap-x-[0.625rem] min-w-full overflow-x-scroll overflow-y-visible lg:px-[7.25rem] px-0 py-4 my-10">
      <ContentCardSmall v-for="(category, index) in foodCategories" :key="index" :img="category.img" :category="category.type" :desc="category.desc" />
    </div>
    <div class="hidden lg:flex justify-end gap-x-3 px-[7.25rem]">
      <ButtonAction action="prev" text="prev" @clicked="scrollLeft" />
      <ButtonAction action="next" text="next" @clicked="scrollRight" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      foodCategories: [
        {
          img: "cupcake.png",
          type: "cupcake",
          desc: "22 items"
        },
        {
          img: "pizza.png",
          type: "pizza",
          desc: "25 items"
        },
        {
          img: "kebab.png",
          type: "kebab",
          desc: "12 items"
        },
        {
          img: "salmon.png",
          type: "salmon",
          desc: "22 items"
        },
        {
          img: "doughnut.png",
          type: "doughnut",
          desc: "11 items"
        },
        {
          img: "cupcake.png",
          type: "cupcake",
          desc: "22 items"
        },
        {
          img: "pizza.png",
          type: "pizza",
          desc: "25 items"
        },
        {
          img: "kebab.png",
          type: "kebab",
          desc: "12 items"
        },
        {
          img: "salmon.png",
          type: "salmon",
          desc: "22 items"
        },
        {
          img: "doughnut.png",
          type: "doughnut",
          desc: "11 items"
        },
      ],
    }
  },
  methods: {
    scrollLeft() {
      const foodCategory = document.getElementById("food-category");
      foodCategory.scrollLeft -= 200;
    },
    scrollRight() {
      const foodCategory = document.getElementById("food-category");
      foodCategory.scrollLeft += 200;
    }
  }
}
</script>

<style lang="scss" scoped>
#food-category {
  scroll-behavior: smooth;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
#food-category::-webkit-scrollbar {
  width: 100%;
  display: none;
}
</style>