<script>
import { computed, reactive } from 'vue';

export default {
  setup() {
    // 1.定义数据
    const names = reactive({
      firstName: "kobe",
      lastName: "bryant"
    });

    // computed：返回的是ComputedRefImpl
    // const fullName = computed(() => names.firstName + " " + names.lastName);

    const fullName = computed({
      get() {
        return names.firstName + " " + names.lastName;
      },
      set(newVal) {
        const tempNames = newVal.split(" ");
        names.firstName = tempNames[0];
        names.lastName = tempNames[1];
      }
    });

    const changeFirstName = () => {
      fullName.value = "he zi";
    };

    return {
      names,
      fullName,
      changeFirstName
    }
  }
}
</script>

<template>
  <div class="app">
    <h2>{{ names.firstName + " " + names.lastName }}</h2>
    <h2>{{ fullName }}</h2>
    <button @click="changeFirstName">修改firstName</button>
  </div>
</template>

<style lang="less" scoped></style>