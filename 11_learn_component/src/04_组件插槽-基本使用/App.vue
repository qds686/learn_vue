<script>
import ShowMessage from './ShowMessage.vue';
export default {
  components: {
    ShowMessage
  }
}
</script>

<template>
  <show-message title="哈哈哈">
    <!-- 1.替换子组件预留的插槽 -->
    <button>我是按钮元素</button>
  </show-message>

  <!-- 2.内容是超链接 -->
  <show-message>
    <a href="#">百度</a>
  </show-message>

  <!-- 3.内容是一张图片 -->
  <show-message>
    <img src="@/img/kobe.png" alt="">
  </show-message>

  <!-- 4.内容没有传递，会显示插槽的默认值 -->
  <show-message></show-message>
</template>

<style lang="less" scoped></style>