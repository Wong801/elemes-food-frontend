<template>
  <div
    class="
      card-small
      rounded-lg
      px-20
      py-8
      flex flex-col
      items-center
      justify-center
      gap-y-5
      text-dark
      relative
      transition
      duration-500
      ease-in-out
      transform
      hover:translate-y-1 hover:scale-y-105
    "
    :class="setBg"
  >
    <img
      :src="require(`@/static/images/badges/${img}`)"
      :alt="category"
      class="w-12 z-10"
    />
    <div class="text-center capitalize z-10">
      <h5 class="font-medium">{{ category }}</h5>
      <p class="text-sm">{{ desc }}</p>
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
    category: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
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
.card-small:hover * {
  transform: scale(1, 1) !important;
}
.card-small:hover::after {
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