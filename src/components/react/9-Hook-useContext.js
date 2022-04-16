/*
 * @Author: ArdenZhao
 * @Date: 2022-04-16 09:30:20
 * @LastEditTime: 2022-04-16 15:04:17
 * @FilePath: /react-ts/src/components/react/9-Hook-useContext.js
 * @Description: 爷孙组件传值
 */
import { useContext } from 'react';
import { Button } from 'antd';
import "antd/dist/antd.css";
import { context, ContextProvider } from './9-ContextProvider';

function HookUseContext(props) {
  const { age, addAge } = useContext(context);
  const clickX = () => {
    addAge(age);
  }

  return (
    <div>
      <h1>Learn, {props.name}</h1>
      <p>
        实现计数器方法:{age}
      </p>
      <Button onClick={clickX}>
        useState Click +1
      </Button>
    </div>
  );
}
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <ContextProvider>
      <HookUseContext name="useContext" />
    </ContextProvider>
  )
}

// 参考链接
// https://flaviocopes.com/react-hook-usecallback/