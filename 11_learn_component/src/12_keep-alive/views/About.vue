<script>
export default {
  name: 'about',
  beforeUnmount(){
    console.log("about beforeUnmount");
  },
  unmounted(){
    console.log("about unmounted");
  }
}
</script>

<template>
  <div class="about">
    <h2>This is an about page</h2>
  </div>
</template>

<style lang="less" scoped>

</style>