/*
 * @Author: ArdenZhao
 * @Date: 2022-04-01 15:48:44
 * @LastEditTime: 2022-04-01 16:57:31
 * @FilePath: /react-ts/src/components/react/4-Form.js
 * @Description: 受控组件与非受控组件
 */

import React from 'react';
import "antd/dist/antd.css";
import { Button, Input } from 'antd';

class SubComponent extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.state = {
      userName: 'Arden',
      myName: 'Zhao',
    }
  }
  handleChange = (e) => {
    console.log(e.target.value)
    // 不好使
    // this.setState = ({
    //   userName: e.target.value
    // })
    this.setState(state => ({
      userName: e.target.value
    }))
  }
  focusTextInput = () => {
    console.log('[ 获取非受控组件的值为： ] >', this.textInput.current.state.value)
  }
  render() {
    return (
      <>
        <h2>受控组件</h2>
        <Input type="text" name="userName" value={this.state.userName} onChange={this.handleChange}></Input>
        <h2>非受控组件</h2>
        <Input type="text" ref={this.textInput} defaultValue={this.state.myName}></Input>
        <Button onClick={this.focusTextInput} type="primary">获取输入的值</Button>
      </>
    )
  }
}

function ReactForm(props) {

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
export default ReactForm

