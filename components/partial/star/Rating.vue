<template>
  <div class="flex gap-x-1">
    <i v-for="index in stars" :key="index" class="iconify text-[#FF8412]" data-icon="ant-design:star-filled"></i>
    <i v-for="index in (5 - stars)" :key="index+5" class="iconify text-[#C9C9C9]" data-icon="ant-design:star-filled"></i>
  </div>
</template>

<script>
export default {
  props: {
    stars: {
      type: Number,
      required: true,
      default: 0, 
    }
  }
}
</script>

<style>

</style>