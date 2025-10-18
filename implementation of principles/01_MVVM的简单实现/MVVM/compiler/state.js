import { randomNum } from "../shared/utils";

const reg_html = /\<.+?\>\{\{(.*?)\}\}\<\/.+?>/g;
const reg_tag = /\<(.+?)\>/;
const reg_var = /\{\{(.*?)\}\}/g;

// 在更新函数中需要用
export const statePool = [];
let o = 0;

export function stateFormat(template, state) {
  // {mark: _mark, state: value}
  let _state = {};

  // 形成有标识的标签
  template = template.replace(reg_html, function(node, key){
    // 标签
    const matched = node.match(reg_tag)[1];
    // 唯一值
    const _mark = randomNum();

    // 组织mark
    _state.mark = _mark;
    statePool.push(_state);
    
    _state = {};
    
    return `<${matched} data-mark="${_mark}">{{ ${key} }}</${matched}>`;
  });

  template = template.replace(reg_var, function(node, key){
    let _var = key.trim();
    // count.a / count.b / state.a
    const _varArr = _var.split(".");

    let i = 0; 

    while(i < _varArr.length){
      _var = state[_varArr[i]];
      i++;
    }

    _state.state = _varArr;
    statePool[o].state = _varArr;
    o++;

    // 此时 statePool [{mark: xxx, state: ['count']},{mark: xxx, state: ['name']}]
    return _var;
  });

  return template;
}