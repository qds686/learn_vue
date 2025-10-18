<script>
import { onMounted, ref } from 'vue';
import ShowInfo from './ShowInfo.vue';
export default {
  // mounted(){
  //   console.log(this.$refs.title);
  // },

  components: {
    ShowInfo
  },
  setup() {
    const titleRef = ref();
    const showInfoRef = ref();

    // setup中拿不到titleRef
    console.log(titleRef.value); // undefined

    // 挂载之后就可以访问
    onMounted(() => {
      console.log(titleRef.value); // 拿到的是元素整体
      console.log(showInfoRef.value); // 拿到的是一个组件实例(proxy代理对象)，可以调用子组件的方法和属性
    });

    return {
      titleRef,
      showInfoRef
    }
  }
}
</script>

<template>
  <div class="app">
    <!-- 1.获取元素 -->
    <h2 ref="titleRef">我是标题</h2>
    <!-- 2.获取组件实例 -->
    <show-info ref="showInfoRef"></show-info>
  </div>
</template>

<style lang="less" scoped></style>