// 手写|实现 Partial<T>
// https://bigfrontend.dev/zh/typescript/implement-Partial-T
type Foo = {
    a: string
    b: number
    c: boolean
}
/**
 * Make all properties in T optional
 * Partial<T>返回一个包含所有T的子集的type。
 */
type MyPartial<T> = {
    [P in keyof T]?: T[P];
};
const a: MyPartial<Foo> = {}
console.log('a', a); //a {}

const b: MyPartial<Foo> = {
    a: 'BFE.dev'
}
console.log('b', b);//b { a: 'BFE.dev' }

const c: MyPartial<Foo> = {
    b: 123
}
console.log('c', c);//c { b: 123 }
const d: MyPartial<Foo> = {
    b: 123,
    c: true
}
console.log('d', d);//d { b: 123, c: true }

const e: MyPartial<Foo> = {
    a: 'BFE.dev',
    b: 123,
    c: true
}
console.log('e', e);//e { a: 'BFE.dev', b: 123, c: true }


// keyof，即 索引类型查询操作符【获取keys】，我们可以将 keyof 作用于泛型 T 上来获取泛型 T 上的所有 public 属性名构成的 联合类型
// in 【遍历keys 获取单个key】我们需要遍历 Foo ，这时候 映射类型就可以用上了，其语法为 [P in Keys]
//T[p] 【获取类型】索引访问操作符，与 JavaScript 种访问属性值的操作类似，访问类型的操作符也是通过 [] 来访问的，即 T[P]，其中”中括号“中的 P 与 [P in keyof T] 中的 P 相对应

// 参考链接
// https://blog.csdn.net/roamingcode/article/details/104111165