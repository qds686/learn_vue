<script>
import Counter from './Counter.vue';
import Counter2 from './Counter2.vue';
export default {
  components: {
    Counter,
    Counter2
  },
  data(){
    return {
      message: "Hello World",
      appCounter: 100,
      name: "hezi"
    }
  }
}
</script>

<template>
  <div class="app">
    <!-- 1.input v-model -->
    <input v-model="message" />
    <!-- 原理 -->
    <input :value="message" @input="message = $event.target.value" />
    <hr>

    <!-- 2.组件的v-model -->
    <counter v-model="appCounter"></counter>
    <!-- 原理：自定义属性传值，自定义事件监听 $event相当于子组件传递的 newValue-->
    <counter :modelValue="appCounter" @update:modelValue="appCounter = $event"></counter>
    <hr>

    <!-- 3.v-model的参数 v-model默认监听modelValue-->
    <!-- v-model:counter="appCounter" 子组件监听counter不再是modelValue-->
    <counter2 v-model:counter="appCounter"></counter2>
    <hr>

    <!-- 4.绑定多个v-model -->
    <counter2 v-model:counter="appCounter" v-model:name="name"></counter2>
  </div>
</template>

<style lang="less" scoped></style>