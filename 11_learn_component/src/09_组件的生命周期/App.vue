<script>
import Home from './Home.vue';
export default {
  components: {
    Home
  },
  data() {
    return {
      message: '111',
      isShowHome: true
    }
  },
  // 1.组件被创建之前
  beforeCreate() {
    //特点：实例「this」存在，但是没有挂载任何内容
    /* 
    
    */
    // this.text = undefined
    console.log('初始化实例之前', this.text);
  },
  // 2.组件被创建完成
  created() {
    //特点：该挂载和劫持的都处理了
    // 发送网络请求、监听事件、this.$watch
    console.log('实例已经初始化', this.text);
  },
  // 3.组件中的template准备被挂载
  beforeMount() {
    //特点：具备created有的，但是此时依然不会有vnode和真实DOM
    console.log('渲染之前');
  },
  // 4.组件template被挂载：虚拟DOM ->真实DOM
  mounted() {
    //特点：都有了，包含真实DOM，我们此时可以获取一些DOM元素，做一些自己要处理的事情
    console.log('渲染完毕');
  },
  // 5.数据更新，准备更新DOM
  beforeUpdate() {
    console.log('更新之前');
  },
  // 6.已经更新DOM
  updated() {
    console.log('更新完毕');
  },
  // 视图销毁beforeDestroy
  // 6.准备卸载VNode之前
  beforeUnmount() {
    console.log('销毁之前');
  },
  // 7.DOM元素被卸载了
  unmounted() {
    //特点：
    // + 基于v-on绑定的事件销毁了、虚拟DOM没有了
    // + 目前：真实DOM还在，实例还在，但是改变状态值，视图也不再变化了
    // + 组件化/路由机制：真实DOM和实例也都销毁了
    console.log('销毁完毕');
  },
  methods: {
    change() {
      console.log('change');
    }
  }
}
</script>

<template>
  <div>{{ message }}</div>
  <button @click="message='Hello world'">修改message</button>
  <hr>
  <div>
    <home v-if="isShowHome"></home>
    <button @click="isShowHome = !isShowHome">显示Home</button>
  </div>
</template>

<style lang="less" scoped></style>