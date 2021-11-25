<template>
  <header
    class="
      sticky
      top-0
      lg:relative
      flex
      justify-between
      py-[1.188rem]
      px-8
      lg:px-[7.25rem]
      items-center
      bg-white
      lg:bg-transparent
      border-b
      border-1
      border-[#F8F8F8]
      lg:border-0
      z-50
    "
  >
    <div class="header-logo">
      <nuxt-link to="/">
        <img src="@/static/images/logos/elemes.png" alt="logo" class="lg:h-auto h-9" />
      </nuxt-link>
    </div>
    <Menu :items="list" class="hidden lg:flex" />
    <div class="flex gap-x-[0.375rem]">
      <ButtonSecondary text="masuk" class="hidden lg:block" />
      <ButtonPrimary text="daftar sekarang" />
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          name: "home",
          url: "/",
        },
        {
          name: "about",
          url: "/",
        },
        {
          name: "promotions",
          url: "/",
          hot: true
        },
        {
          name: "blogs",
          url: "/",
        },
        {
          name: "contact us",
          url: "/",
        },
      ],
    };
  },
};
</script>

<style>
</style>