<script>
import { onMounted, reactive, ref } from 'vue';

export default {
  setup() {
    // 定义响应式数据：reactive/ref
    // 强调：ref也可以定义复杂的数据
    const info = ref({});

    // 1.reactive的应用场景
    // 1.1 reactive应用于本地的数据
    // 1.2 多个数据之间是有联系的，组织在一起具有特定的作用
    const account = reactive({
      username: 'hezi',
      password: '123'
    });

    // 定义复杂数据
    const username = ref("hezi");
    const password = ref("123");

    // 2.ref的应用场景，其他的场景基本都用
    // 2.1 定义本地的简单数据
    const message = ref("Hello");
    const counter = ref(0);

    // 2.2 定义从网络中获取的数据也是使用ref
    // reactive需要每次循环的增加属性，浪费性能
    // const musics = reactive([]);

    const musics = ref([]);
    onMounted(() => {
      const serverMusics = ["海阔天空", "小苹果", "野狼disco"];
      musics.value = serverMusics;
    });

    return {
      account,
      username,
      password,
      message,
      counter,
      musics
    }
  }
}
</script>

<template>
  <div class="app">
    <form>
      账号：<input type="text" v-model="account.username" />
      密码：<input type="password" v-model="account.password" />
    </form>
    <form>
      账号：<input type="text" v-model="username" />
      密码：<input type="password" v-model="password" />
    </form>
  </div>
</template>

<style lang="less" scoped></style>