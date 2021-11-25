<template>
  <div class="capitalize">
    <h6 class="text-lg font-medium text-dark">{{ title }}</h6>
    <div class="flex flex-col gap-y-4 my-8">
      <MenuLink v-for="(item, index) in links" :key="index" :link="item.link" :text="item.text" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    links: {
      type: Array,
      default: () => [
        {
          text: '',
          link: '',
        },
      ],
    },
  },
}
</script>

<style>

</style>