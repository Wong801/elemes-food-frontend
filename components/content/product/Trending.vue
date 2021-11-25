<template>
  <div class="py-16">
    <ContentTitle title="browse our trending" text="receipt" />
    <div id="food-product" class="lg:px-[7.25rem] px-8 grid grid-cols-1 lg:grid-cols-4 gap-x-5 gap-y-[1.875rem] py-14">
      <ContentCardBig v-for="(product, index) in foodProducts" :key="index" :img="product.img" :product="product.product" :category="product.category" :stars="product.stars" />
    </div>
    <div class="w-max mx-auto hidden lg:block">
      <ButtonPrimary text="ALL receipt" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      foodProducts: [
        {
          img: "pizza_paperoni.png",
          product: "pizza paperoni",
          category: "pizza",
          stars: 4,
        },
        {
          img: "pizza_meat.png",
          product: "pizza meat",
          category: "pizza",
          stars: 3,
        },
        {
          img: "doner_kebab.png",
          product: "doner kebab",
          category: "kebab",
          stars: 5,
        },
        {
          img: "salmon_roll.png",
          product: "salmon roll",
          category: "salmon",
          stars: 4,
        },
        {
          img: "cupcake_choco.png",
          product: "cupcake choco",
          category: "cupcake",
          stars: 4,
        },
        {
          img: "doughnut_milk.png",
          product: "doughnut milk",
          category: "doughnut",
          stars: 5,
        },
        {
          img: "doughnut_unicorn.png",
          product: "doughnut unicorn",
          category: "doughnut",
          stars: 4,
        },
        {
          img: "kathi_kebab.png",
          product: "kathi kebab",
          category: "kebab",
          stars: 4,
        }
      ]
    }
  }
}
</script>

<style>

</style>