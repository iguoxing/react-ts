/*
 * @Author: ArdenZhao
 * @Date: 2022-04-13 15:48:04
 * @LastEditTime: 2022-04-13 16:23:15
 * @FilePath: /react-ts/src/components/react/6-enent-this.js
 * @Description: file information
 */
import React from 'react';
import "antd/dist/antd.css";
import { Button } from 'antd';

class SubComponent extends React.Component {
  // 挂载阶段
  constructor(props) {
    super(props);
    this.state = {
      name: 'Arden',
      sum: 1,
      count: 0,
    }
  }
  // bind 的形式，第一个参数是参数值，第二个参数是event
  clickBtn = (params, event) => {
    console.log('[ event ] >', params, event)
    this.setState({ sum: params + 1 })
  }
  clickBtnCount = (event, params) => {
    console.log('[ clickBtnCount ] >', event, params)
    this.setState({ count: params + 2 })
  }
  render() {
    return (
      <>
        <h2>事件传参</h2>
        <p>1、bind的形式传参_计数器：{this.state.sum}</p>
        <Button onClick={this.clickBtn.bind(this, this.state.sum)} type="primary">点击+1</Button>
        <br></br>
        <p>2、箭头函数的形式传参_计数器：{this.state.count}</p>
        <Button onClick={(e) => this.clickBtnCount(e, this.state.count)} type="primary">点击+2</Button>
      </>
    )
  }
}

function ReactParams(props) {
  return (
    <div>
      <h1>Learn, {props.name}</h1>
      <form>
        <SubComponent />
      </form>
    </div>
  );
}
export default ReactParams

