<script>
import { provide, ref } from 'vue';
import ShowInfo from './ShowInfo.vue';
export default {
  components: {
    ShowInfo
  },
  setup(){
    const name = ref("h ezi")
    const age = ref(18);

    // 共享响应式数据可以增加响应式
    provide("name", name);
    provide("age", age);
  }
}
</script>

<template>
  <div class="app">
    <show-info></show-info>
  </div>
</template>

<style lang="less" scoped>

</style>