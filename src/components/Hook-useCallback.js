/*
 * @Author: ArdenZhao
 * @Date: 2021-12-29 21:56:12
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-03-05 11:07:31
 * @FilePath: /react-ts/src/components/Hook-useCallback.js
 */
// Copyright 2021 zhaoguoxing
import React, { useState,useCallback } from 'react';
import { Button } from 'antd';
import "antd/dist/antd.css";
let lastCallback
let lastCallbackDependencies

function HookUseCallback(props) {
  // 声明一个新的叫做 “count” 的 state 变量
  // useCallback用法
  // 把内联回调函数及依赖项数组作为参数传入 useCallback，它将返回该回调函数的 memoized 版本，
  // 该回调函数仅在某个依赖项改变时才会更新。当你把回调函数传递给经过优化的并使用引用相等性去避免非
  // 必要渲染（例如 shouldComponentUpdate）的子组件时，它将非常有用。
  // useCallback(fn, deps) 相当于 useMemo(() => fn, deps)。
  function myClickFunction(callback,dependencies){
    if(lastCallbackDependencies){
        let changed = !dependencies.every((item,index)=>{
            return item === lastCallbackDependencies[index]
        })
        if(changed){
            lastCallback = callback
            lastCallbackDependencies = dependencies
        }
    }else{ // 没有传入依赖项
        lastCallback = callback
        lastCallbackDependencies = dependencies
    }
    return lastCallback
  }
  const [count, setCount] = useState(0);
  const [add, setAdd] = useState(0);
  const addClickFunction = myClickFunction(()=>{console.log("addClick");setAdd(add + 1);},[])
  const clickFunction =useCallback(
    () => {
       setCount(count + 1);
    },[count],
  );
  // useState 不能放在函数内部
  const [num, setNum] = useState(0);
  const clickX = () => {
    // const [num, setNum] = useState(Math.random());
    setNum(num + 1); // 设置num为11没有生效，为啥不生效呢？如何解决呢
    console.log('1', num)
    return <h1>{num}</h1>
  }

  // useCallback 使不使用，都可以实现自增哈
  const clickY = useCallback(() => {
    // const [num, setNum] = useState(Math.random());
    setNum(num + 1); // 设置num为11当前函数内没有生效，在函数外的页面中有改变生效
    console.log('12', num)
  },[num])

  return (
    <div>
      <h1>Learn, {props.name}</h1>
      <p>[myClickFunction]You clicked {add} times</p>
      <Button type="primary" onClick={addClickFunction}>
        Click me
      </Button>
      <p>You clicked {count} times</p>
      <Button type="primary" onClick={clickFunction}>
        Click me
      </Button>
      <Button onClick={clickX}>
        Click x--{num}
      </Button>
      <Button onClick={clickY}>
        Click Y--{num}
      </Button>
    </div>
  );
}
export default HookUseCallback

// 参考链接
// https://flaviocopes.com/react-hook-usecallback/