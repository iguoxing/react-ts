/*
 * @Author: ArdenZhao
 * @Date: 2022-03-30 15:52:22
 * @LastEditTime: 2022-04-13 15:23:28
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
    props.getChildData(sum)
  }
  return (
    <>
      {/* <h1>子组件 </h1> */}
      <p>姓名： {name} 年龄：{age} 数数：{sum}</p>
      <Button onClick={clickBtn} type="primary">点击事件</Button>
    </>
  )
}
// 设置默认参数
// SubComponent.defaultProps = {
//   age: 18,
// }

class ReactProps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'ArdenZhao',
      age: 18,
      sum: 0
    }
    // this 绑定
    this.getChildData = this.getChildData.bind(this)
  }
  divStyle = {
    color: 'red'
  }
  getChildData(sum) {
    // console.log('[ sum ] >', sum, sum + 1)
    this.setState({ sum: sum + 1 });
    // console.log('接收到子组件的值66', sum, this.state.sum)
  }
  render() {
    return (
      <div>
        <h1 style={this.divStyle}>Learn, {this.props.name}</h1>
        {/* 点击方法 */}

        {/* 传递参数的方法——运算拓展符 */}
        <SubComponent getChildData={this.getChildData} {...this.state} />
      </div>
    );
  }
}
export default ReactProps

