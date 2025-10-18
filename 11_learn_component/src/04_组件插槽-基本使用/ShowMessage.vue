<script>
export default {
  props: {
    title: {
      type: String,
      default: "我是默认的title"
    },
    content: {
      type: String,
      default: ""
    }
  }
}
</script>

<template>
  <h2>{{ title }}</h2>
  <div class="content">
    <slot>
      <p>我是默认插槽</p>
    </slot>
  </div>
</template>

<style lang="less" scoped>

</style>