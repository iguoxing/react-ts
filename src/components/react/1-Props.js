/*
 * @Author: ArdenZhao
 * @Date: 2022-03-30 15:52:22
 * @LastEditTime: 2022-03-31 15:43:21
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
  console.log('[ props ] >', props)
  let { name, age, sum } = props
  // 子传父
  function clickBtn() {
    console.log('clickBtn')
    props.getChildData(sum++)
  }
  return (
    <>
      {/* <h1>子组件 </h1> */}
      <p>姓名： {name} 年龄：{age}</p>
      <Button onClick={clickBtn} type="primary">点击事件</Button>
    </>
  )
}
// 设置默认参数
SubComponent.defaultProps = {
  age: 18,
}

function ReactProps(props) {
  const divStyle = {
    color: 'red'
  }
  const prams = {
    name: 'ArdenZhao1',
    sum: 0
  }

  function getChildData(data) {
    console.log('接收到子组件的值', data)
  }
  return (
    <div>
      <h1 style={divStyle}>Learn, {props.name}</h1>
      {/* 点击方法 */}

      {/* 传递参数的方法——运算拓展符 */}
      <SubComponent getChildData={getChildData} {...prams} />
    </div>
  );
}
export default ReactProps

