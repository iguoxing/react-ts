// Copyright 2021 zhaoarden
interface Foo {
    name: string;
    age: number
}
type T = keyof Foo // -> "name" | "age"
export default T

// type Foo = {
//     a: string
//     b: number
//     c: boolean
// }

// // below are all valid

// const a: MyPartial<Foo> = {}

// const b: MyPartial<Foo> = {
//     a: 'BFE.dev'
// }

// const c: MyPartial<Foo> = {
//     b: 123
// }

// const d: MyPartial<Foo> = {
//     b: 123,
//     c: true
// }

// const e: MyPartial<Foo> = {
//     a: 'BFE.dev',
//     b: 123,
//     c: true
// }
// MyPartial<T>