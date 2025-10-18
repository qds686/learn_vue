<script>
export default {
  
}
</script>

<template>
  <div class="nav-bar">
    <!-- 多个插槽使用具名插槽 -->
    <div class="left">
      <slot name="left">left</slot>
    </div>
    <div class="center">
      <slot name="center">center</slot>
    </div>
    <div class="right">
      <slot name="right">right</slot>
    </div>
  </div>
  <div class="other">
    <!-- 相当于name="default" -->
    <slot></slot>
  </div>
</template>

<style lang="less" scoped>
.nav-bar{
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;

  .left {
    width: 80px;
    background-color: orange;
  }

  .center {
    flex: 1;
    background-color: skyblue;
  }

  .right {
    width: 80px;
    background-color: lightpink;
  }
}
</style>