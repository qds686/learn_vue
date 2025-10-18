<script>
export default {
  name: 'category',
  beforeUnmount(){
    console.log("category beforeUnmount");
  },
  unmounted(){
    console.log("category unmounted");
  }
}
</script>

<template>
  <div class="category">
    <h2>This is a category page</h2>
  </div>
</template>

<style lang="less" scoped>

</style>