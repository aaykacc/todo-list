<template>
  <nav class="flex items-center space-x-4">
    <button @click="filter('all')" :class="{active: current === 'all'}" class="text-gray-500 font-medium">All</button>
    <button @click="filter('completed')" :class="{active: current === 'completed'}" class="text-gray-500 font-medium">Completed</button>
    <button @click="filter('ongoing')" :class="{active: current === 'ongoing'}" class="text-gray-500 font-medium">Ongoing</button>
  </nav>
  <hr class="mt-2 dark:border-gray-300">
</template>

<script>
  export default {
    props: ['current'],
    name: "FilterNav",
    methods: {
      filter(fxx) {
        this.$emit('filterChange', fxx)
      }
    }
  }
</script>

<style scoped>
  .active{
    color: #000;
  }
  html.dark .active{
    color: #FFF;
  }
</style>