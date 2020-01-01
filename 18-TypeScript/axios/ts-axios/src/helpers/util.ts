const toString = Object.prototype.toString

// 定义类型Date的判定 (is用法)
export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

export function isObject (val: any): val is Object {
  return val !== null && typeof val === 'object'
}

export function isPlainObject (val: any): val is Object {
  return toString.call(val) === '[object Object]'
}