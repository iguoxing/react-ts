/*
 * @Author: ArdenZhao
 * @Date: 2022-04-01 16:45:30
 * @LastEditTime: 2022-04-01 17:01:16
 * @FilePath: /react-ts/src/components/react/5-LifeCycle.js
 * @Description: file information
 */

import React from 'react';
import "antd/dist/antd.css";
import { Button, Input } from 'antd';

class SubComponent extends React.Component {
  // 挂载阶段
  constructor(props) {
    super(props);
    this.state = {
      name: 'Arden',
    }
    console.log(' 1、constructor 构造函数钩子')
  }
  focusTextInput = () => {
    this.setState(state => ({
      name: 'ArdenZhao'
    }))
  }
  UNSAFE_componentWillMount() {
    console.log(' 2、componentWillMount 在组件被渲染之前调用，在客户端也在服务端。')
  }
  componentDidMount() {
    console.log(' 3、componentDidMount 在组件被渲染之后调用，在客户端。')
  }
  // 更新阶段
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log(' 4、componentWillReceiveProps 在组件接收到新的props时调用，在初始化时不被调用。')
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(' 5、shouldComponentUpdate 在组件接收到新的props或者state时调用，在初始化时不被调用。')
    return true
  }
  UNSAFE_componentWillUpdate(nextProps, nextState) {
    console.log(' 6、componentWillUpdate 在组件接收到新的props或者state但还没有render时被调用。')
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(' 7、componentDidUpdate 在组件完成更新后立即调用，在初始化时不被调用。')
  }
  // 卸载阶段
  componentWillUnmount() {
    console.log(' 8、componentWillUnmount 在组件从 DOM 中移除之前立刻被调用。')
  }
  render() {
    const params = {
      age: '18',
    }
    return (
      <>
        <h2>生命周期</h2>
        <Button onClick={this.focusTextInput} {...params} type="primary">获取输入的值</Button>
      </>
    )
  }
}

function ReactLifeCycle(props) {

  const prams = {
    name: 'Arden',
    age: 32
  }
  return (
    <div>
      <h1>Learn, {props.name}</h1>
      {/* 传递参数的方法——运算拓展符 */}
      <form>
        <SubComponent {...prams} />
      </form>
    </div>
  );
}
export default ReactLifeCycle

