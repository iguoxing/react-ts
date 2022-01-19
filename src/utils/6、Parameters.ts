/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * @Author: ArdenZhao
 * @Date: 2022-01-19 17:41:19
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-01-19 17:52:39
 * @FilePath: /react-ts/src/utils/6、Parameters.ts
 */
declare function f1(arg: { a: number; b: string }): void;
// 该类型可以获得函数的参数类型组成的元组类型。
// infer P 表示待推断的函数参数。
type MyParameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never
// type ParamType<T> = T extends (...args: infer P) => any ? P : T;
// 在这个条件语句 T extends (...args: infer P) => any ? P : T 中，infer P 表示待推断的函数参数。
// 整句表示为：如果 T 能赋值给 (...args: infer P) => any，则结果是 (...args: infer P) => any 类型中的参数 P，否则返回为 T。

// 官网可以看到具体元组的内容
// https://www.typescriptlang.org/docs/handbook/utility-types.html

type T0 = Parameters<() => string>;
type T1 = Parameters<(s: string) => void>;
type T2 = Parameters<<T>(arg: T) => T>;
type T3 = Parameters<typeof f1>;
type T4 = Parameters<any>;
type T5 = Parameters<never>;
// type T6 = Parameters<string>;
// type T7 = Parameters<Function>;

export { }

// 参考链接
// https://juejin.cn/post/6844903753431138311

// 官网可以看到具体元组的内容
// https://www.typescriptlang.org/docs/handbook/utility-types.html
