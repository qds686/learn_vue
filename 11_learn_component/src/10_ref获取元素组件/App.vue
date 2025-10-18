<script>
import Banner from './Banner.vue';
export default {
  components: {
    Banner
  },
  data() {
    return {
      message: "Hello World"
    }
  },
  methods: {
    changeMessage() {
      // 1.不要主动的去操作DOM
      this.message = "你好，盒子";

      // 2.获取DOM元素
      console.log(this.$refs.title); 
      console.log(this.$refs.btn); 

      // 3.获取banner组件实例 proxy代理对象
      console.log(this.$refs.banner);

      // 3.1.在父组件中可以调用子组件中的方法，方法在子组件中执行，在父组件中获取不到
      console.log(this.$refs.banner.bannerClick()); // 'undefined'

      // 3.2 获取banner组件实例，获取banner中的元素，获取到的是根元素
      console.log(this.$refs.banner.$el);

      // 3.3 如果是多个根，获取到的是 #text node节点，第一个换行节点
      console.log(this.$refs.banner.$el.nextElementSibling);
      console.log(this.$refs.banner.$el.nextElementSibling.nextElementSibling);

      // 4.组件实例还有两个属性(了解)
      // 获取父组件
      console.log(this.$parent); // null 没有父组件
      // 获取根组件
      console.log(this.$root); // proxy对象

      // 5.在Vue3中已经移除了$children的属性
    }
  }
}
</script>

<template>
  <div class="app">
    <h2 ref="title">{{ message }}</h2>
    <button ref="btn" @click="changeMessage">修改message</button>
    <hr>
    <banner ref="banner"></banner>
  </div>
</template>

<style lang="less" scoped></style>