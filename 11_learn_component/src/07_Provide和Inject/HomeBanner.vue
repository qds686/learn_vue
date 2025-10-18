<script>
export default {
  inject: ['name', 'age', 'message']
}
</script>

<template>
  <div class="banner">
    <h2>{{ name }}-{{ age }}</h2>
    <h2>{{ message }}</h2>
  </div>
</template>

<style lang="less" scoped></style>