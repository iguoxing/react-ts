/*
 * @Author: ArdenZhao
 * @Date: 2022-01-05 20:01:50
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-01-05 20:29:11
 * @FilePath: /react-ts/src/utils/4、ThisParameterType.ts
 * 对于function type T，ThisParameterType<T>返回this type。 如果没有指定，则使用unknown。
 * https://bigfrontend.dev/zh/typescript/ThisParameterType
 */
// Extracts the type of the this parameter for a function type, or unknown if the function type has no this parameter.

// type MyThisParameterType<T> = T extends (this: infer U, ...args: any[]) => any ? U : unknown
// 1、infer可以在extends的条件语句中推断待推断的类型
type MyThisParameterType<T> = T extends (this: infer U) => any ? U : unknown
console.log('MyThisParameterType');

// // type A = MyThisParameterType<typeof Foo>
export { }

// 参考链接
// https://www.typescriptlang.org/docs/handbook/utility-types.html
// 测试地址
// https://www.typescriptlang.org/play?#code/GYVwdgxgLglg9mABFOAJApgDwBRQBYwDOAXIgHIgC2ARugE4CUiA3gFCKJ3pQh1L5EAdCgDKUOjDABzbAEYAbAwDcrAL6tWoSLASIwVWnQAqcMROnYwpIwUIAFAIZ0HlbvSMBPAA7oAPFG90OGBkNCwAPiY2Di4ePlCMTEEHLy8AGw9LZTVWCARCODT0QTS4GQByfRp3U3FJGQUGcoAaKsMTM3rsAGYGZSA