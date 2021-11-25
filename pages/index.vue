<template>
  <div>
    <div
      id="hero-section"
      class="lg:grid grid-cols-2 gap-y-8 gap-x-48 px-8 lg:px-[7.25rem] py-10 lg:py-0 flex flex-col"
    >
      <div class="place-self-end w-full">
        <h1 class="text-primary font-medium text-5xl lg:text-[4rem] leading-[4rem]">
          Good Food Us
          Good Mood
        </h1>
      </div>
      <div class="row-span-2">
        <ContentImageMain img="green_salad_tomato.png" product="green salad tomato" category="tomato" :stars="4" />
      </div>
      <div class="place-self-start w-full">
        <p class="text-lg text-gray-light1 leading-7">
          I would think that conserving our natural resources
          should be a conservative position: Not to waste food, and
          not to throw away a lot of the food that we buy.
        </p>
        <div class="my-8 flex gap-x-4">
          <ButtonPrimary text="daftar sekarang" />
          <ButtonSecondary :withBg="true" text="about us" />
        </div>
      </div>
    </div>
    <ContentProductCategory />
    <ContentProductTrending />
  </div>
</template>

<script>
export default {
  layout: "home"
};
</script>