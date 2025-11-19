<script>
import { mapState } from 'vuex';
export default {
  // computed: {
  //   // 映射函数（数组写法），数组映射函数名可能和data中的名字冲突
  //   ...mapState(["m", "n"]),
  //   // 映射函数（对象写法），可以重新命名
  //   ...mapState({
  //     storeM: state => state.m
  //   })
  // }
}
</script>

<script setup>
import { computed, toRefs } from 'vue';
import { mapState, useStore } from 'vuex';

// 1.在setup中使用映射函数，一步步完成
// const { m, n } = mapState(["m", "n"]);
// const store = useStore();
// const computedM = computed(m.bind({ $store: store }));

// 2.使用hooks中的useState
// import useState from '@/hooks/useState';
// const { m, n } = useState(["m","n"]);

// 3.直接冲store.state进行解构
const store = useStore();
const { m, n } = toRefs(store.state);
</script>

<template>
  <div class="home">
    <!-- 1.在模板中直接使用状态 -->
    <h2>m：{{ $store.state.m }}</h2>

    <!-- 2.计算属性（映射状态：数组写法） -->
    <!-- <h2>m：{{ m }}</h2> -->

    <!-- 3.计算属性（映射状态：对象写法） -->
    <!-- <h2>m：{{ storeM }}</h2> -->

    <!-- 4.setup中映射 -->
    <h2>setup1：{{ computedM }}</h2>

    <!-- 5.useState -->
    <h2>setup2: {{ m }}</h2>
  </div>
</template>

<style lang="less" scoped></style>