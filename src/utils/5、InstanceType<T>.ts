/*
 * @Author: ArdenZhao
 * @Date: 2022-01-14 19:20:06
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-01-14 20:00:54
 * @FilePath: /react-ts/src/utils/5、InstanceType<T>.ts
 * https://bigfrontend.dev/zh/typescript/InstanceType
 */
// 对于constructor function type T，InstanceType<T> 返回其instance type。
// 请自行实现MyInstanceType<T>。

class Foo {
  public x = '1'
  public y = 2

  public say = (value: string) => {
    console.log(value)
  }
}

const foo: InstanceType<typeof Foo> = {
  x: '1',
  y: 2,
  say: (value: string) => {
    console.log(value)
  }
}

console.log(foo);


export { }


// 参考链接
// https://github.com/chenxiaochun/blog/issues/67