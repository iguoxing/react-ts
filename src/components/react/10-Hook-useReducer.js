/*
 * @Author: ArdenZhao
 * @Date: 2022-04-18 17:26:35
 * @LastEditTime: 2022-04-18 18:09:53
 * @FilePath: /react-ts/src/components/react/10-Hook-useReducer.js
 * @Description: file information
 */
import { useReducer } from 'react';
import { Button } from 'antd';
import "antd/dist/antd.css";

// 改变的方法
const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      // console.log('[ state ] >', state, { ...state })
      return { ...state, count: state.count + 1 };
    case 'minus':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

// 定义对象
let initialState = { count: 10, name: "reducer" }

//初始化方法
const init = initialState => {
  return { name: "reducer", count: initialState.count + 2 }; // 初始化
}

function HookUseReducer(props) {
  // useReducer
  const [state, dispatch] = useReducer(reducer, initialState, init);

  return (
    <div>
      <h1>Learn, {props.name}</h1>
      <p>计数器：{state.count}-{state.name}</p>
      <Button onClick={() => dispatch({ type: 'add' })}>加+</Button>
      <Button onClick={() => dispatch({ type: 'minus' })}>减-</Button>
    </div>
  );
}
export default HookUseReducer