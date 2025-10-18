// 匹配以 '|"开头 以'|"结尾 检查是否是字符串
const reg_check_str = /^[\'|\"].*?[\'|\"]$/;
const reg_str = /[\'|\"]/g;

export function isObject(value) {
  return typeof value === "object" && value !== null;
}

export function hasOwnProperty(target, key) {
  return Object.prototype.hasOwnProperty.call(target, key);
}

export function isEqual(newValue, oldValue) {
  return newValue === oldValue;
}

// 唯一值
export function randomNum() {
  return new Date().getTime() + parseInt(Math.random() * 10000);
}

export function checkType(str) {
  // 如果是字符串，去掉引号
  if (reg_check_str.test(str)) {
    return str.replace(reg_str, '');
  }

  switch (str) {
    case 'true':
      return true;
    case 'false':
      return false;
    default:
      break;
  }

  return Number(str);
}