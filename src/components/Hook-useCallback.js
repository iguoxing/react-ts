// Copyright 2021 zhaoguoxing
import React, { useState,useCallback } from 'react';
import { Button } from 'antd';
import "antd/dist/antd.css";

function HookUseCallback(props) {
  // 声明一个新的叫做 “count” 的 state 变量
  // useCallback用法
  // 把内联回调函数及依赖项数组作为参数传入 useCallback，它将返回该回调函数的 memoized 版本，
  // 该回调函数仅在某个依赖项改变时才会更新。当你把回调函数传递给经过优化的并使用引用相等性去避免非
  // 必要渲染（例如 shouldComponentUpdate）的子组件时，它将非常有用。
  // useCallback(fn, deps) 相当于 useMemo(() => fn, deps)。
  let lastCallback
  let lastCallbackDependencies
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
    },[],
  );

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
    </div>
  );
}
export default HookUseCallback

// 参考链接
// https://flaviocopes.com/react-hook-usecallback/