/*
 * @Author: ArdenZhao
 * @Date: 2021-12-28 10:11:35
 * @LastEditors: Do not edit
 * @LastEditTime: 2021-12-28 10:23:34
 * @FilePath: /react-ts/src/ES6+/1、Uint8Array.js
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array
 */
// 来自长度
var uint8 = new Uint8Array(2);//创建了2个长度的数组
uint8[0] = 42;
// console.log(uint8); //Uint8Array(2) [ 42, 0 ]
console.log(uint8[0]); // 42
console.log(uint8.length); // 2
console.log(uint8.BYTES_PER_ELEMENT); // 1  代表了强类型数组中每个元素所占用的字节数
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT

// 来自数组
var arr = new Uint8Array([21,31]);
// console.log('[ arr ] >', arr)//[ arr ] > Uint8Array(2) [ 21, 31 ]
console.log(arr[1]); // 31

// 来自另一个 TypedArray
var x = new Uint8Array([21, 31]);
var y = new Uint8Array(x);
console.log(y[0]); // 21
// console.log('y',y);//y Uint8Array(2) [ 21, 31 ]

// 来自 ArrayBuffer
var buffer = new ArrayBuffer(8);
// console.log('[ buffer ] >', buffer)//[Uint8Contents]: <00 00 00 00 00 00 00 00>,
var z = new Uint8Array(buffer, 1, 4);//Uint8Array(4) [ 0, 0, 0, 0 ]
// console.log('z',z);

// 来自一个迭代器
var iterable = function*(){ yield* [1,2,3]; }();
var uint8 = new Uint8Array(iterable);
// Uint8Array[1, 2, 3]

