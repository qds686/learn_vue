<script>
import { onMounted } from 'vue';

export default {
  setup(){
    // 在执行setup的过程中，需要注册生命周期函数
    // setup函数 替换了 beforeCreated 和 created周期函数
    onMounted(()=> {

    });
  }
}
</script>

<template>
  <div class="app">
    <h2>This is an app page</h2>
  </div>
</template>

<style lang="less" scoped>

</style>