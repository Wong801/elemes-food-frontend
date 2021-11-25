<template>
  <div class="capitalize font-medium text-2xl lg:text-[2.375rem] leading-[3.125rem] px-8 lg:px-[7.25rem]">
    <h2 class="text-dark">
      {{ title }}
    </h2>
    <h4 class="text-primary">
      {{ text }}
    </h4>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

</style>