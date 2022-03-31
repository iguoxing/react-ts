/*
 * @Author: ArdenZhao
 * @Date: 2022-03-30 15:52:22
 * @LastEditTime: 2022-03-31 15:56:18
 * @FilePath: /react-ts/src/components/react/3-State.js
 * @Description:
 * 1、
 */

import React from 'react';
import "antd/dist/antd.css";
import { Button, Input } from 'antd';

class SubComponent extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
    this.state = {
      name1: props.name + 'www',
      count: 0,
      isShow: true
    }
  }
  //class中的方法，不需要Function
  focusTextInput() {
    // this.textInput.current 是获取的到的原生组件
    // 焦点聚焦
    this.textInput.current.focus();
    // 方式1 ：箭头函数的形式，立即执行，不会被缓存
    this.setState(state => ({
      count: state.count + 1
    }))
    this.setState(state => ({
      isShow: !this.state.isShow
    }))
    // 方式2 异步更新，不会立马更新组件，批量延迟更新，合并处理
    // this.setState({ count: this.state.count + 1 })
  }
  render() {
    return (
      <>
        <p>姓名：{this.state.name1} 年龄：{this.props.age} Count： {this.state.count}</p>
        <Input type="text" ref={this.textInput}></Input>
        <Button onClick={this.focusTextInput} type="primary">点击事件</Button>
        {this.state.isShow ? <h2>Show State </h2> : ''}
      </>
    )
  }
}

function ReactState(props) {
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
export default ReactState

