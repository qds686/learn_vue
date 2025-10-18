<script>
export default {
  beforeUnmount() {
    console.log('Home 销毁之前');
  },
  unmounted() {
    console.log('Home 销毁完毕');
  },
}
</script>

<template>
  <div class="home">
    <h2>This is a home page</h2>
  </div>
</template>

<style lang="less" scoped>

</style>