/*
 * @Author: ArdenZhao
 * @Date: 2022-03-30 15:52:22
 * @LastEditTime: 2022-03-30 17:05:22
 * @FilePath: /react-ts/src/components/react/2-Ref.js
 * @Description:
 * 1、获取到子元素的原生dom节点
 * 2、支持原生方法
 * Refs 提供了一种方式，允许我们访问 DOM 节点或在 render 方法中创建的 React 元素。
 * 3、class组件需要constructor(props)来使用props,并且使用this.props
 * 4、ref 需要在class组件中可以使用；在函数组件内部使用 ref 属性
 */

import React from 'react';
import "antd/dist/antd.css";
import { Button, Input } from 'antd';

class SubComponent extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }
  //class中的方法，不需要Function
  focusTextInput() {
    // this.textInput.current 是获取的到的原生组件
    console.log('clickBtn', this.textInput, this.textInput.current)
    // 焦点聚焦
    this.textInput.current.focus();
  }
  render() {
    return (
      <>
        <h2>子组件 </h2>
        <p>姓名： {this.props.name} 年龄：{this.props.age}</p>
        <Input type="text" ref={this.textInput}></Input>
        <Button onClick={this.focusTextInput} type="primary">点击事件</Button>
      </>
    )
  }
}

function ReactRef(props) {
  const divStyle = {
    color: 'red'
  }

  const prams = {
    name: 'Arden',
    age: 32
  }
  return (
    <div>
      <h1 style={divStyle}>Learn, {props.name}</h1>
      {/* 传递参数的方法——运算拓展符 */}
      <SubComponent {...prams} />
    </div>
  );
}
export default ReactRef

