<script>
export default {
  name: 'home',
  data() {
    return {
      counter: 0
    }
  },
  created() {
    console.log("home created");
  },
  beforeUnmount() {
    console.log("home beforeUnmount");
  },
  unmounted() {
    console.log("home unmounted");
  },
  // 保持keep-alive的组件，监听有没有进行切换
  // 组件进入活跃状态
  activated() {
    console.log("home activated");
  },
  // 组件失去活跃状态
  deactivated() {
    console.log("home deactivated");
  }
}
</script>

<template>
  <div class="home">
    <h2>This is a home page</h2>
    <h2>当前计数：{{ counter }}</h2>
    <button @click="counter++">+1</button>
  </div>
</template>

<style lang="less" scoped></style>