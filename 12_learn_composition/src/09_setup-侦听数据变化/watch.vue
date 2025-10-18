<script>
import { reactive, ref, watch } from 'vue';

export default {
  setup() {
    // 1.定义数据
    const message = ref("Hello World");
    const info = reactive({
      name: "hezi",
      age: 18,
      friend: {
        name: "james"
      }
    });

    // 2.侦听数据的变化
    watch(message, (newValue, oldValue) => {
      console.log(newValue, oldValue);
    });

    // vue3默认进行深度监听
    watch(info, (newValue, oldValue) => {
      // 如果是对象，引用地址相同
      console.log(newValue, oldValue);
    });

    // 3.侦听数据变化后，获取原始对象
    // () => info 形式需要配合 { deep: true }，返回的是info的proxy
    watch(() => info, (newValue, oldValue) => {
      console.log(newValue, oldValue);
    }, {
      immediate: true,
      deep: true
    });

    // 返回的是普通的对象
    watch(() => ({ ...info }), (newValue, oldValue) => {
      console.log(newValue, oldValue);
    }, {
      immediate: true,
      deep: true
    });

    // 监听多个用数组
    // watch([message, info], cb);

    return {
      message,
      info
    }
  }
}
</script>

<template>
  <div class="app">
    <h2>{{ message }}</h2>
    <button @click="message = '你好，盒子'">修改message</button>
    <button @click="info.friend.name = 'kobe'">修改info</button>
  </div>
</template>
