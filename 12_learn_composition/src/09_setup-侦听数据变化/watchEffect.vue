<script>
import { ref, watchEffect } from 'vue';

export default {
  setup() {
    const counter = ref(0);
    const name = ref("hezi");

    /* 
    1.watchEffect传入的函数默认会直接执行
    2.在执行的过程中，会自动的收集依赖的响应式数据
    */
    const stopWatch = watchEffect(() => {
      console.log("......", counter.value, name.value);

      // 判断counter大于10停止监听
      if (counter.value >= 10) {
        stopWatch();
      }
    });

    return {
      counter
    };
  }
}
</script>

<template>
  <div class="app">
    <h2>当前计数：{{ counter }}</h2>
    <button @click="counter++">+1</button>
  </div>
</template>