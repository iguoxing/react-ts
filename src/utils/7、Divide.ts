/*
 * @Author: ArdenZhao
 * @Date: 2022-02-15 10:11:41
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-02-16 11:53:30
 * @FilePath: /react-ts/src/utils/7、Divide.ts
 */

// 为什么要使用泛型？
// 因为需要一种方法使返回值的类型与传入参数的类型是相同的。
// type A = Divide<1, 0> // never
type B = Divide<4, 2> // 2  声明了一个类型为number的类型


type Tuple<T extends number, U extends any[] = []> =
  U['length'] extends T ? U : Tuple<T, [...U, any]>

type Subtract<
  A extends number,
  B extends number
  > = Tuple<A> extends [...Tuple<B>, ...infer R] ? R['length'] : never

type SmallerThan<
  A extends number,
  B extends number,
  S extends number[] = []
  > = S['length'] extends B
  ? false
  : S['length'] extends A
  ? true
  : SmallerThan<A, B, [A, ...S]>
type Divide<A extends number, B extends number, S extends number[] = []> =
  B extends 0 ? never : SmallerThan<A, B> extends true ? S['length'] : Divide<Subtract<A, B>, B, [...S, any]>;

export { }