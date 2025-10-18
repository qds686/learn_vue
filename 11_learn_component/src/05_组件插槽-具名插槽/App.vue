<script>
import NavBar from './NavBar.vue';
export default {
  components: {
    NavBar
  },
  data() {
    return {
      position: 'center'
    }
  }
}
</script>

<template>
  <nav-bar>
    <template v-slot:left>
      <button>返回</button>
    </template>
    <template v-slot:center>
      <span>内容</span>
    </template>
    <template v-slot:right>
      <a href="#">登录</a>
    </template>
    <template v-slot:default>
      <span>默认</span>
    </template>
  </nav-bar>

  <!-- 动态插槽名 和 语法糖v-slot简写为# -->
  <!-- 渲染作用域：父组件和子组件中的模板内容都是在各自的作用域中编译的 -->
  <nav-bar>
    <template v-slot:[position]>
      <a href="#">注册</a>
    </template>
    <button @click="position = 'left'">left</button>
    <button @click="position = 'center'">center</button>
    <button @click="position = 'right'">right</button>
  </nav-bar>
</template>

<style lang="less" scoped></style>