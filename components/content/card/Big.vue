<template>
  <div class="card-big rounded-2xl px-5 py-8 relative" :class="setBg">
    <img
      :src="require(`~/static/images/foods/products/${img}`)"
      alt=""
      class="relative z-10"
    />
    <div class="capitalized my-5 relative z-10">
      <h5 class="font-medium text-[1.625rem]">{{ product }}</h5>
      <p class="font-medium text-lg text-primary">{{ category }}</p>
    </div>
    <div class="relative z-10">
      <PartialStarRating :stars="stars" />
    </div>
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
    },
  },
  computed: {
    setBg() {
      switch (this.category) {
        case "cupcake":
          this.color = "#F0FEEB";
          return "bg-[#F0FEEB]";
        case "pizza":
          this.color = "#E4F2F4";
          return "bg-[#E4F2F4]";
        case "kebab":
          this.color = "#EAEEFA";
          return "bg-[#EAEEFA]";
        case "salmon":
          this.color = "#F9EEF3";
          return "bg-[#F9EEF3]";
        case "doughnut":
          this.color = "#F3F7D9";
          return "bg-[#F3F7D9]";
        default:
          return "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.card-big {
  box-shadow: 0px 0.75rem 2.5rem rgba(0, 0, 0, 0.07);
}
.card-big:hover::after {
  content: "";
  background-image: url("@/static/images/foods/background_hero.png");
  background-size: auto 100%;
  border-radius: 0.5rem;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: 0;
}
</style>