<script>
import { reactive, ref } from 'vue';

export default {
  setup() {
    // 1.定义普通的数据：可以正常在template中使用，但是数据不是响应式的
    let message = "Hello World";

    const changeMessage = () => {
      message = "你好，盒子";
      // 数据修改了，界面没有改变
      console.log(message);
    };

    // 2.定义响应式数据
    // 2.1 reactive函数：定义复杂类型的数据

    // 当在reactive中传入一个基本类型时，会报警告：value cannot be made reactive: 10
    // const num = reactive(10);
    
    const account = reactive({
      username: 'hezi',
      password: '123456'
    });

    const changeAccount = () => {
      account.username = 'kobe';
    };

    // 2.2 ref函数：定义简单数据，也可以定义复杂的数据
    // 在template中使用ref时，Vue会自动取出value绑定，直接使用
    // 在setup中需要通过 xx.value的方式
    let counter = ref(100);

    const changeCounter = () => {
      counter.value++;
    };

    // 3.ref在表达式里是浅层解包，在模板中是深层解包的
    const info = {
      counter
    };

    return {
      message,
      changeMessage,
      // num,
      account,
      changeAccount,
      counter,
      changeCounter,
      info
    }
  }
}
</script>

<template>
  <div class="app">
    <h2>message：{{ message }}</h2>
    <button @click="changeMessage">修改message</button>
    <hr>
    <h2>账号：{{ account.username }}</h2>
    <h2>密码：{{ account.password }}</h2>
    <button @click="changeAccount">修改账号</button>
    <hr>
    <h2>当前计数：{{ counter }}</h2>
    <button @click="changeCounter">修改counter</button>
    <hr>
    <h2>当前计数：{{ info.counter }}</h2>
    <button @click="info.counter.value++">+1</button>
  </div>
</template>

<style lang="less" scoped></style>