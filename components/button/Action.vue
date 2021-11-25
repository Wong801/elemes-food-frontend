<template>
  <button
    class="
      bg-primary
      text-white
      py-2
      px-[1.125rem]
      font-medium
      text-sm
      rounded-full
      uppercase
      flex
      gap-x-2
      items-center
    "
    @click="onClick"
  >
    <div v-if="action === 'prev'" class="p-2 bg-white text-primary rounded-full">
      <i class="iconify" data-icon="grommet-icons:previous"></i>
    </div>
    {{ text }}
    <div v-if="action === 'next'" class="p-2 bg-white text-primary rounded-full">
      <i class="iconify" data-icon="grommet-icons:next"></i>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    action: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      default: 'Button'
    }
  },
  methods: {
    onClick() {
      this.$emit('clicked', this.action)
    }
  }
}
</script>

<style>

</style>