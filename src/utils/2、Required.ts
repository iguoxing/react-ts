// Copyright 2021 zhaoguoxing
// webide https://bigfrontend.dev/zh/typescript/implement-Required-T
//官网 https://www.typescriptlang.org/docs/handbook/utility-types.html#requiredtype 

type Foo = {
    a?: string
    b?: number
    c?: boolean
}


const a: MyRequired<Foo> = {}
// Error

const b: MyRequired<Foo> = {
    a: 'BFE.dev'
}

const c: MyRequired<Foo> = {
    b: 123
}
// Error

const d: MyRequired<Foo> = {
    b: 123,
    c: true
}
// Error

const e: MyRequired<Foo> = {
    a: 'BFE.dev',
    b: 123,
    c: true
}

//-?将可选项代表的 ? 去掉, 从而让这个类型变成必选项
type MyRequired<T> = { [K in keyof T]-?: T[K] }
export { }