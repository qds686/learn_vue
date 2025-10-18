<script>
import { reactive, toRef, toRefs } from 'vue';

export default {
  setup() {
    const info = reactive({
      name: "hezi",
      age: 18,
      height: 1.88
    });

    // reactive被解构后会失去响应式
    //   + toRefs：把多个属性都转换成单个的ref对象
    //   + toRef：只取单个属性返回ref对象
    const { name, age } = toRefs(info);
    const height = toRef(info, "height");

    /* 
      ref其他的API
        + unref：val = isRef(val) ? val.value : val
        + isRef：判断值是否是一个ref对象
        + shallowRef：创建一个浅层的ref对象
        + triggerRef：手动触发和shallowRef相关联的副作用
          例如创建一个浅层的shallowRef数据info，修改info中的数据
          修改数据后不是响应式的，需要手动触发
    */

    return {
      info,
      name,
      age,
      height
    }
  }
}
</script>

<template>
  <div class="app">
    <h2>info：{{ info }}</h2>
    <h2>{{ name }}-{{ age }}-{{ height }}</h2>
    <button @click="age++">修改age</button>
    <button @click="height = 1.89">修改height</button>

  </div>
</template>

<style lang="less" scoped></style>