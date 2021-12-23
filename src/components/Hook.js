// Copyright 2021 zhaoguoxing
import React, { useState,useCallback } from 'react';
import { Button } from 'antd';
import "antd/dist/antd.css";

function HookDemo(props) {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);
  // useCallback用法
  // 把内联回调函数及依赖项数组作为参数传入 useCallback，它将返回该回调函数的 memoized 版本，
  // 该回调函数仅在某个依赖项改变时才会更新。当你把回调函数传递给经过优化的并使用引用相等性去避免非
  // 必要渲染（例如 shouldComponentUpdate）的子组件时，它将非常有用。
  // useCallback(fn, deps) 相当于 useMemo(() => fn, deps)。
  const clickFunction =useCallback(
    () => {
       setCount(count + 1);
    },[count],
  );

  return (
    <div>
      <h1>Learn, {props.name}</h1>
      <p>You clicked {count} times</p>
      <Button type="primary" onClick={clickFunction}>
        Click me
      </Button>
    </div>
  );
}
export default HookDemo

// 参考链接
// https://flaviocopes.com/react-hook-usecallback/