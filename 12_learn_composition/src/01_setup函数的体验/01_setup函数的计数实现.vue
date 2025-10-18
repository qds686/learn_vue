<script>
import useCounter from './hooks/useCounter';

export default {
  setup() {
    // 1.正常
    /* let counter = ref(100);

    const increment = () => {
      counter.value++;
    };

    const decrement = () => {
      counter.value--;
    }; */

    // 2.封装hooks
    // const { counter, increment, decrement } = useCounter();
    // return { counter, increment, decrement };

    // 3.解构
    return {
      ...useCounter()
    }
  }
}
</script>

<template>
  <div class="app">
    <!-- template中ref的对象会自动解包 -->
    <h2>当前计数：{{ counter }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<style lang="less" scoped></style>