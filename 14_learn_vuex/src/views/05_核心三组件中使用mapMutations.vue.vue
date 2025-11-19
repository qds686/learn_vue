<script>
// import { mapMutations } from 'vuex';

// export default {
//   methods: {
//     ...mapMutations(["changeName", "incrementM"])
//   }
// }
</script>

<script setup>
import { computed } from 'vue';
import { mapMutations, useStore } from 'vuex';

const store = useStore();

// 1.一步步写
// const mapMutationFns = mapMutations(["changeName", "incrementM"]);
// const newMutations = {};
// Object.keys(mapMutationFns).forEach(key => {
//   newMutations[key] = mapMutationFns[key].bind({ $store: store  });
// });
// const { changeName, incrementM } = newMutations;

// 2.toRefs不行 X
// store.mutations是一个不可访问的内部变量 X
// const changeName = computed(() => store.mutations.changeName);

// 3. 单个的commit
const changeName = (newName) => {
  store.commit('changeName', newName);
};

const incrementM = () => {
  store.commit('incrementM');
};

</script>

<template>
  <div class="home">
    <button @click="changeName('小王')">修改name</button>
    <button @click="incrementM">递增M</button>
    <h2>store name：{{ $store.state.name }}</h2>
    <h2>store m: {{ $store.state.m }}</h2>
  </div>
</template>