<script>
// import { mapGetters } from 'vuex';

// export default {
//   computed: {
//     ...mapGetters(["doubleCounter"]),
//     ...mapGetters({
//       objMapGetter: "doubleCounter"
//     })
//   }
// }
</script>

<script setup>
import { computed, toRefs } from 'vue';
import { mapGetters, useStore } from 'vuex';

// 1
const store = useStore();
// const { doubleCounter: dcFn } = mapGetters(["doubleCounter"]);
// const doubleCounter = computed(dcFn.bind({ $store: store }));

// 2 使用toRefs能显示但是会报错 toRefs() expects a reactive object but received a plain one.
// 使用toRefs的参数必须是reactive的对象而不是普通的对象
// const { doubleCounter } = toRefs(store.getters);

// 3.针对某一个getter属性进行computed
const doubleCounter = computed(() => store.getters.doubleCounter);
</script>

<template>
  <div class="home">
    <!-- <h2>doubleCounter： {{ $store.getters.doubleCounter }}</h2>
    <h2>mapGetters[]：{{ doubleCounter }}</h2>
    <h2>mapGetter{}：{{ objMapGetter }}</h2> -->
    <h2>setup1：{{ doubleCounter }}</h2>
    <h2>setup2：{{ doubleCounter }}</h2>
  </div>
</template>
