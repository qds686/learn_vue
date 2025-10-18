import { checkType, randomNum } from "../shared/utils";

const reg_onClick = /onClick\=\"(.+?)\"/g;
const reg_fnName = /^(.+?)\(/;
const reg_arg = /\((.*?)\)/;

/* 
 eventPool = []
 每一项: {
   mark: random, //唯一当前的DOM
   handler: key 事件处理函数的字符串,
   type: 'click'
 }

*/
const eventPool = [];

// onClick="xx" -> data-mark="xxx"
export function eventFormat(template) {
  return template.replace(reg_onClick, function (node, key) {
    const _mark = randomNum();

    eventPool.push({
      mark: _mark,
      handler: key.trim(),
      type: 'click'
    });

    return `data-mark="${_mark}"`;
  });
}

export function bindEvent(methods) {
  const allElements = document.querySelectorAll('*');
  let oItem = null;
  let _mark = 0;

  eventPool.forEach(event => {
    for (let i = 0; i < allElements.length; i++) {
      oItem = allElements[i];
      _mark = parseInt(oItem.dataset.mark)

      if (event.mark === _mark) {
        oItem.addEventListener(event.type, function () {
          // 找到函数名 add(2)中匹配到 add
          const fnName = event.handler.match(reg_fnName)[1];
          // 找参数 add(2)中匹配到 2
          const arg = checkType(event.handler.match(reg_arg)[1]);
          // 执行函数
          methods[fnName](arg);
        }, false);
      }
    }
  });
}