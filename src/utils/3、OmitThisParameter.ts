// Copyright 2021 zhaoguoxing
// webide https://bigfrontend.dev/zh/typescript/OmitThisParameter
//官网 https://www.typescriptlang.org/docs/handbook/utility-types.html#omitthisparametertype
// OmitThisParameter 如果一个函数有指定的 this 类型，那么返回一个不带 this 类型的函数类型，否则还是返回原来的函数。
function toHex(this: Number) {
    return this.toString(16);//变为16进制
}
// () => string
const fiveToHex: MyOmitThisParameter<typeof toHex> = toHex.bind(15);
type MyOmitThisParameter<T> = unknown extends ThisParameterType<T>
    ? T :
    T extends (...args: infer A) =>
        infer R ? (...args: A) => R : T;
console.log(fiveToHex());//返回了15 返回了f
// 1、infer可以在extends的条件语句中推断待推断的类型
// type ParamType<T> = T extends (...args: infer P) => any ? P : T;
// 在这个条件语句 T extends (...args: infer P) => any ? P : T 中，infer P 表示待推断的函数参数。
// 整句表示为：如果 T 能赋值给 (...args: infer P) => any，则结果是 (...args: infer P) => any 类型中的参数 P，否则返回为 T。
// 2、两个连续箭头函数是函数柯里化的用法
// https://segmentfault.com/q/1010000016320367
export { }

// 参考资料
// https://jscoder.com/2021/05/25/front-end/typescript-utility-types/
// https://jkchao.github.io/typescript-book-chinese/tips/infer.html#%E4%BB%8B%E7%BB%8D