/*
 * @Author: ArdenZhao
 * @Date: 2022-02-24 14:42:02
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-02-24 15:02:53
 * @FilePath: /react-ts/src/ES6/2、Map.js
 * 定义：Map 对象保存键值对，并且能够记住键的原始插入顺序。任何值(对象或者原始值) 都可以作为一个键或一个值。
 */
let myMap = new Map();

let keyObj = {};
let keyFunc = function () { };
let keyString = 'a string';

// 添加键
myMap.set(keyString, "和键'a string'关联的值");
myMap.set(keyObj, "和键keyObj关联的值");
myMap.set(keyFunc, "和键keyFunc关联的值");

// Map 长度
console.log('[ myMap.size ] >', myMap.size); // 3

// 遍历
for (let [key, value] of myMap) {
  console.log('遍历' + key + " = " + value);
}

// 读取值
console.log('[ myMap.get(keyString) ] >', myMap.get(keyString));    // "和键'a string'关联的值"
console.log('[ myMap.get(keyObj) ] >', myMap.get(keyObj));       // "和键keyObj关联的值"
console.log('[ myMap.get(keyFunc) ] >', myMap.get(keyFunc));      // "和键keyFunc关联的值"

// 判断是否有某个键
console.log('判断是否有某个键[ myMap.has(keyString) ] >', myMap.has(keyString))
// 删除某个键
console.log('判断是否有某个键[ myMap.has(keyString) ] >', myMap.delete(keyString))
// 判断是否有某个键
console.log('判断是否有某个键[ myMap.has(keyString) ] >', myMap.has(keyString))

console.log('[ myMap.get(a string) ] >', myMap.get('a string'));   // "和键'a string'关联的值"
// 因为keyString === 'a string'
console.log('[ myMap.get({}) ] >', myMap.get({}));           // undefined, 因为keyObj !== {}
console.log('[ myMap.get(function () { }) ] >', myMap.get(function () { })); // undefined, 因为keyFunc !== function () {}


// 注意 设置对象属性的方式是错误的，会报错
// wrongMap['bla'] = 'blaa'