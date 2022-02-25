/*
 * @Author: ArdenZhao
 * @Date: 2022-02-25 14:42:15
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-02-25 14:46:16
 * @FilePath: /react-ts/src/basic/1_prototype.js
 */
// 让我们从一个函数里创建一个对象o，它自身拥有属性a和b的：
let f = function () {
  this.a = 1;
  this.b = 2;
}
/* 这么写也一样
function f() {
 this.a = 1;
 this.b = 2;
}
*/
let o = new f(); // {a: 1, b: 2}

// 在f函数的原型上定义属性
f.prototype.b = 3;
f.prototype.c = 4;

// 不要在 f 函数的原型上直接定义 f.prototype = {b:3,c:4};这样会直接打破原型链
// o.[[Prototype]] 有属性 b 和 c
//  (其实就是 o.__proto__ 或者 o.constructor.prototype)
// o.[[Prototype]].[[Prototype]] 是 Object.prototype.
// 最后o.[[Prototype]].[[Prototype]].[[Prototype]]是null
// 这就是原型链的末尾，即 null，
// 根据定义，null 就是没有 [[Prototype]]。

// 综上，整个原型链如下:

// {a:1, b:2} ---> {b:3, c:4} ---> Object.prototype---> null

console.log(o.a); // 1
// a是o的自身属性吗？是的，该属性的值为 1

console.log(o.b); // 2
// b是o的自身属性吗？是的，该属性的值为 2
// 原型上也有一个'b'属性，但是它不会被访问到。
// 这种情况被称为"属性遮蔽 (property shadowing)"

console.log(o.c); // 4
// c是o的自身属性吗？不是，那看看它的原型上有没有
// c是o.[[Prototype]]的属性吗？是的，该属性的值为 4

console.log(o.d); // undefined
// d 是 o 的自身属性吗？不是，那看看它的原型上有没有
// d 是 o.[[Prototype]] 的属性吗？不是，那看看它的原型上有没有
// o.[[Prototype]].[[Prototype]] 为 null，停止搜索
// 找不到 d 属性，返回 undefined

// 每个实例对象（object）都有一个私有属性（称之为 __proto__ ）指向它的构造函数的原型对象（prototype）
// o.__proto__  指向 f.prototype { b: 3, c: 4 }
console.log('[ o.__proto__ ] >', o.__proto__) //{ b: 3, c: 4 }
console.log('[ f.prototype ] >', f.prototype) //{ b: 3, c: 4 }
console.log('[ f.prototype ] >', o.__proto__ === f.prototype) // true

// 总结 __proto__是对象的私有属性 和 prototype 是构造函数的原型对象