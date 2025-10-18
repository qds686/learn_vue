<script>
import { inject } from 'vue';

export default {
  // 如果是inject选项式注册，则使用的时候不会自动解包
  // inject: ["name", "age"],
  setup() {
    // 第二个参数是默认值
    const name = inject("name");
    const age = inject("age");
    const height = inject("height", 1.88);

    return {
      name,
      age,
      height
    }
  }
}
</script>

<template>
  <div class="show-info">
    {{ name }}-{{ age }}-{{ height }}
  </div>
</template>

<style lang="less" scoped></style>