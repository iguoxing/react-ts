<!--
 * @Author: ArdenZhao
 * @Date: 2021-12-25 12:50:15
 * @LastEditors: Do not edit
 * @LastEditTime: 2021-12-25 12:54:57
 * @FilePath: /react-ts/src/docs/1、recoil.md
-->
### 1、为什么使用Recoil
React缺点
+ 组件间的状态共享只能通过将 state 提升至它们的公共祖先来实现，但这样做可能导致重新渲染一颗巨大的组件树。
+ Context 只能存储单一值，无法存储多个各自拥有消费者的值的集合。
+ 以上两种方式都很难将组件树的顶层（state 必须存在的地方）与叶子组件 (使用 state 的地方) 进行代码分割。


### 2、初心

我们希望改善上述的问题的同时，不仅能保留 API 以及语义，还能使其的表现尽可能保持 React 的样子。


### 3、思路
`Recoil 定义了一个有向图 (directed graph)，正交同时又天然连结于你的 React 树上。状态的变化从该图的顶点（我们称之为 atom）开始，流经纯函数 (我们称之为 selector) 再传入组件。`

基于这样的实现的好处：
+ 我们可以定义无需模板代码的 API，共享的状态拥有与 React 本地 state 一样简单的 get/set 接口 (当然如果需要，也可以使用 reducer 等进行封装)。
+ 我们有了与 Concurrent 模式及其他 React 新特性兼容的可能性。
+ 状态的定义是渐进式和分布式的，这使代码分割成为可能。
+ 无需修改对应的组件，就能将它们本地的 state 用派生数据替换。
+ 无需修改对应的组件，就能将派生数据在同步与异步间切换。
+ 我们能将导航视为头等概念，甚至可以将状态的转变编码进链接中。
+ 可以很轻松地以可回溯的方式持久化整个应用的状态，持久化的状态不会因为应用的改变而丢失。



### 参考链接
https://recoiljs.org/zh-hans/docs/introduction/motivation