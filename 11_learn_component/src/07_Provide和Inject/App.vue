<script>
import Home from './Home.vue';
import { computed } from 'vue';
export default {
  components: {
    Home
  },
  data() {
    return {
      message: "Hello App"
    }
  },
  // provide: {
  //   name: "hezi",
  //   age: 18
  // }

  // 当使用data中的数据的时候要用函数表示
  provide() {
    return {
      name: "hezi",
      age: 18,
      // 处理响应式数据
      message: computed(() => this.message)
    }
  }
}
</script>

<template>
  <home></home>
</template>

<style lang="less" scoped></style>