/* 
MVC的缺点：驱动被MVC分离成3部分，这样M 和 V的逻辑混合在一起了
MVVM的驱动VM(ViewModel)
  + M：model数据保存和处理的逻辑
  + V：视图
*/
import { useDOM, useReactive } from '../MVVM';

function App() {

  // 响应式数据
  const state = useReactive({
    count: 0,
    name: 'hezi'
  });

  // 测试响应式数据
  // console.log(state.count);
  // state.count += 1;

  const add = (num) => {
    // 测试事件绑定
    console.log(num);
    state.count += num;
  };

  const minus = (num) => {
    console.log(num);
    state.count -= num;
  };

  const changeName = (name) => {
    console.log(name);
    state.name = name;
  };

  return {
    template:`
      <h1>{{ count }}</h1>
      <h2>{{ name }}</h2>
      <button onClick="add(2)">+</button>
      <button onClick="minus(1)">-</button>
      <button onClick="changeName('盒子')">Change Name</button>
    `,
    state,
    methods: {
      add,
      minus,
      changeName
    }
  };
}

useDOM(
  // 1.执行生成HTML模板
  App(),
  // 2.把模板放到根元素里面
  document.querySelector('#app')
);
