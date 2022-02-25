/*
 * @Author: ArdenZhao
 * @Date: 2022-02-25 11:17:30
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-02-25 14:06:31
 * @FilePath: /react-ts/src/ES6/3_set.js
 * Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。
 */

let mySet = new Set();
console.log('[ mySet.add(1) ] >', mySet.add(1)); // Set [ 1 ]
console.log('[ mySet.add(5) ] >', mySet.add(5))// Set [ 1, 5 ]
console.log('[ mySet.add(5) ] >', mySet.add(5))// Set [ 1, 5 ]
console.log('[ mySet.add("some text") ] >', mySet.add("some text")); // Set [ 1, 5, "some text" ]
let o = { a: 1, b: 2 };
console.log('[ mySet.add(o) ] >', mySet.add(o)); // mySet.add(o) add两次o,只执行1次


// 使用Set对象
// console.log('[ mySet.add({ a: 1, b: 2 }) ] >', mySet.add({ a: 1, b: 2 })); // o 指向的是不同的对象，所以没问题
// console.log('[ mySet.has(1) ] >', mySet.has(1)); // true
// console.log('[ mySet.has(3) ] >', mySet.has(3)); // false
// console.log('[ mySet.has(5) ] >', mySet.has(5));              // true
// console.log('[ mySet.has(Math.sqrt(25)) ] >', mySet.has(Math.sqrt(25)));  // true
// console.log('[ mySet.has("Some Text".toLowerCase()) ] >', mySet.has("Some Text".toLowerCase())); // true
// console.log('[ mySet.has(o) ] >', mySet.has(o)); // true
// console.log('[ mySet.size ] >', mySet.size); // 5
// console.log('[ mySet.delete(5) ] >', mySet.delete(5));  // true,  从set中移除5
// console.log('[ mySet.has(5) ] >', mySet.has(5));     // false, 5已经被移除
// console.log('[ mySet.size ] >', mySet.size); // 4, 刚刚移除一个值
// console.log(mySet);
// logs Set(4) [ 1, "some text", {…}, {…} ] in Firefox
// logs Set(4) { 1, "some text", {…}, {…} } in Chrome

// 迭代Set
// 迭代整个set
// 按顺序输出：1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}
// for (let item of mySet) console.log(item);
// // 按顺序输出：1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}
// for (let item of mySet.keys()) console.log(item);
// // 按顺序输出：1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}
// for (let item of mySet.values()) console.log(item);
//  以上三种输出结果一样

// // 按顺序输出：1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}
// //(键与值相等)
// for (let [key, value] of mySet.entries()) console.log(key);

// // 使用 Array.from 转换Set为Array
var myArr = Array.from(mySet); // [1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}]
console.log('[ myArr ] >', myArr)
// // 如果在HTML文档中工作，也可以：
// mySet.add(document.body);
// mySet.has(document.querySelector("body")); // true

// // Set 和 Array互换
// let mySet2 = new Set([1, 2, 3, 4]);
// console.log('[ mySet2 ] >', mySet2)
// console.log('[ mySet2.size ] >', mySet2.size)
// console.log('[ [...mySet2] ] >', [...mySet2])               // [1,2,3,4]

// // 可以通过如下代码模拟求交集，filter 返回的符合某个条件的原对象
// let intersection = new Set([...mySet].filter(x => mySet2.has(x)));
// console.log('[ intersection ] >', intersection)

// // 可以通过如下代码模拟求差集
// let difference = new Set([...set1].filter(x => !set2.has(x)));

// // 用forEach迭代
// mySet.forEach(function(value) {
//   console.log(value);
// });



// 参考链接
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set
