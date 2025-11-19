<script>
import { mapActions, useStore } from 'vuex';

// export default {
//   methods: {
//     actionBtnClick(){
//       this.$store.dispatch("incrementAction");
//     },
//     ...mapActions(["incrementAction", "queryData"])
//   }
// }
</script>

<script setup>
import { mapActions, useStore } from 'vuex';

const store = useStore();

// 1.在setup中使用MapActions辅助函数
// const actions = mapActions(["incrementAction"]);
// const newActions = {};
// Object.keys(actions).forEach(key => {
//   newActions[key] = actions[key].bind({ $store: store});
// });

// const { incrementAction } = newActions;

// 2.使用默认的做法
function incrementAction(){
  store.dispatch("incrementAction");
}
</script>

<template>
  <div class="home">
    <h2>当前计数：{{ $store.state.counter }}</h2>
    <!-- <button @click="actionBtnClick">发起action</button> -->
    <button @click="incrementAction">发起action</button>
  </div>
</template>

