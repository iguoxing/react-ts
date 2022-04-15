/*
 * @Author: ArdenZhao
 * @Date: 2022-04-15 10:33:48
 * @LastEditTime: 2022-04-15 11:26:59
 * @FilePath: /react-ts/src/components/react/8-Hook-useEffect.js
 * @Description: file information
 */
import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import "antd/dist/antd.css";

function HookUseEffect(props) {
  // useState 不能放在函数内部，这里设置初始值为0
  const [num, setNum] = useState(0);
  const [obj, setObj] = useState({ a: 1 });
  const [refresh, setRefresh] = useState(100)
  const clickX = () => {
    setNum(num + 1);
  }
  useEffect(() => {
    console.log('初始化useEffect', refresh);
    // setNum(num + 1); // 放外面所有时候都执行，放里面有一半不执行
    // 模拟Ajax请求
    setTimeout(() => {
      setNum(() => {
        return num + 10
      });
    }, 1000)
    // return () => { // 非必须
    //   console.log('useEffect return');
    // }
  }, [refresh])// 需要有监听的值，否则不会报错

  const [reset, setReset] = useState(100)
  useEffect(() => {
    // 在返回一个清除数据函数作用前，清除数据
    console.log('清除useEffect数据', reset);
    setTimeout(() => {
      setNum(() => {
        return num + 100
      });
      console.log('useEffectsetNum', num);
    }, 1000)
    // 模拟Ajax请求
  }, [reset])// 需要有监听的值，否则不会报错
  return (
    <div>
      <h1>Learn, {props.name}</h1>
      <p>
        1、基本用法:{num}
      </p>
      <Button onClick={clickX}>
        useState Click +1
      </Button>
      <Button onClick={() => setRefresh(!refresh)}>
        useEffect Click +10
      </Button>
      <p>
        2、清除数据位置:{num}-{reset}
      </p>
      <Button onClick={() => setReset(!reset)}>
        Click Reset
      </Button>
    </div>
  );
}
export default HookUseEffect

// 参考链接
// https://flaviocopes.com/react-hook-usecallback/