const { createApp, ref } = Vue;

// vue2
// const App = {
//   data() {
//     return {
//       text: 'Hello Vue!!'
//     }
//   },
//   template: `
//     <h1>{{ text }}</h1>
//     <button @click="change">change</button>
//   `,
//   methods: {
//     change() {
//       this.text = 'Hello Vite';
//     }
//   }
// }

// vue3
const App = {
  template: `
    <h1>{{ text }}</h1>
    <button @click="change">change</button>
  `,
  setup() {
    const text = ref('Hello Vue');
    const change = () => {
      text.value = 'Hello Vite';
    }
    return {
      text,
      change
    }
  }
}


createApp(App).mount("#app");