/*
 * @Author: ArdenZhao
 * @Date: 2022-04-13 15:48:04
 * @LastEditTime: 2022-04-19 10:55:33
 * @FilePath: /react-ts/src/components/react/6-enent-this.js
 * @Description: file information
 */
import React from 'react';
import "antd/dist/antd.css";
import { Button } from 'antd';
import {
  // PriorityQueue,
  // MinPriorityQueue,
  MaxPriorityQueue,
  // ICompare,
  // IGetCompareValue,
} from '@datastructures-js/priority-queue';

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

// datastructures-js/priority-queue
function ReactParams(props) {
  const numbers = [3, -2, 5, 0, -1, -5, 4];
  const numbers2 = [3, -2, 5, 0, -1, -5, 4];

  const maxpq = MaxPriorityQueue.fromArray(numbers);
  // const minpq = MinPriorityQueue.fromArray(numbers2);

  console.log(numbers); // [5, 0, 4, -2, -1, -5, 3]
  console.log(numbers2); //  [-5, -1, -2, 3, 0, 5, 4]
  maxpq.dequeue(); // 5
  maxpq.dequeue(); // 4
  maxpq.dequeue(); // 3
  console.log(numbers); // [ 0, -1, -5, -2 ]
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

