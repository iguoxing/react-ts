/*
 * @Author: ArdenZhao
 * @Date: 2022-03-30 15:52:22
 * @LastEditTime: 2022-03-30 16:15:27
 * @FilePath: /react-ts/src/components/react/1-Props.js
 * @Description:
 * 1、点击事件+添加内联样式
 * 2、包含子组件
 * 3、传递参数的方法——运算拓展符
 */

import React from 'react';
import "antd/dist/antd.css";
import { Button } from 'antd';

function SubComponent(props) {
  console.log('[ val ] >', props)
  return (
    <>
      {/* <h1>子组件 </h1> */}
      <p>姓名： {props.name} 年龄：{props.age}</p>
    </>
  )
}

function ReactProps(props) {
  const divStyle = {
    color: 'red'
  }
  function clickBtn() {
    console.log('clickBtn')
  }
  const prams = {
    name: 'ArdenZhao',
    age: 32
  }
  return (
    <div>
      <h1 style={divStyle}>Learn, {props.name}</h1>
      {/* 点击方法 */}
      <Button onClick={clickBtn} type="primary">点击事件</Button>
      {/* 传递参数的方法——运算拓展符 */}
      <SubComponent {...prams} />
    </div>
  );
}
export default ReactProps

