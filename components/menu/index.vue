<template>
  <ul class="flex items-center gap-x-8 capitalize">
    <li v-for="(item, index) in items" :key="index">
      <MenuLink :text="item.name" :link="item.url" :hot="item.hot || false" />
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>

</style>