/*
 * @Author: ArdenZhao
 * @Date: 2022-04-20 11:18:24
 * @LastEditTime: 2022-04-20 11:36:50
 * @FilePath: /react-ts/src/components/react/12-Hook-useMemo.js
 * @Description: file information
 */
import { useState, useMemo } from 'react';
import { Button } from 'antd';
import "antd/dist/antd.css";


function HookUseMemo(props) {
  let [count, setCount] = useState(10);
  let [num, setNum] = useState(0);

  function changeCount() {
    setCount(count + 1);
  }

  function changeNum() {
    setNum(num + 1);
  }

  const memorized = useMemo(() => {
    return count;
  }, [num]);
  console.log('[ memorized ] >', memorized) //12-Hook-useMemo.js:31 [ memorized ] > 10
  // memorized中的count 的值没有随着count变化而，更新，作用是保留了初始count的值
  // 当点击按钮时，num的值会发生变化，memorized的值也会发生变化，但是count的值不会发生变化
  return (
    <div>
      <h1>Learn, {props.name}</h1>
      <p>Count:{count}</p>
      <Button onClick={changeCount}>Count加一</Button>
      <p>Num:{num}</p>
      <Button onClick={changeNum}>Num加一</Button>
    </div>
  );
}
export default HookUseMemo