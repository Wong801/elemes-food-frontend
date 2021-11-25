<template>
  <div class="bg-food w-full 3xl:w-1/2 mx-auto">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.bg-food::after {
  content: "";
  background: url('@/static/images/foods/background_hero.png') no-repeat;
  background-size: 100% 100%;
  background-position: top;
  opacity: 0.03;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
}
@media (min-width: 1024px) {
  .bg-food::after {
    background-size: 100% 75%;
  }
}
</style>