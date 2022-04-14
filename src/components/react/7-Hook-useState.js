/*
 * @Author: ArdenZhao
 * @Date: 2022-04-14 16:46:18
 * @LastEditTime: 2022-04-14 17:06:55
 * @FilePath: /react-ts/src/components/react/7-Hook-useState.js
 * @Description: file information
 */
import React, { useState, useCallback } from 'react';
import { Button } from 'antd';
import "antd/dist/antd.css";

function HookUseState(props) {
  // useState 不能放在函数内部，这里设置初始值为0
  const [num, setNum] = useState(0);
  const [obj, setObj] = useState({ a: 1 });
  const clickX = () => {
    setNum(num + 1);
  }
  const clickObj = () => {
    setNum(num + 1);
    setObj({ ...obj, b: num + 1 });
  }
  return (
    <div>
      <h1>Learn, {props.name}</h1>
      <p>
        1、初始化为数字:{num}
      </p>
      <Button onClick={clickX}>
        Click Number
      </Button>
      <p>
        2、初始化为对象: a-{obj.a} ;b-{obj.b}
      </p>
      <Button onClick={clickObj}>
        Click Object
      </Button>
    </div>
  );
}
export default HookUseState

// 参考链接
// https://flaviocopes.com/react-hook-usecallback/