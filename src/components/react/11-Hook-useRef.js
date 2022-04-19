/*
 * @Author: ArdenZhao
 * @Date: 2022-04-19 10:47:35
 * @LastEditTime: 2022-04-19 10:54:38
 * @FilePath: /react-ts/src/components/react/11-Hook-useRef.js
 * @Description: file information
 */
import { useRef, useEffect } from 'react';
import { Input } from 'antd';
import "antd/dist/antd.css";

function HookUseRef(props) {
  // 由useRef 声明一个变量
  const inputRef = useRef(null);

  useEffect(() => {
    console.log('[ inputRef ] >', inputRef)
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h1>Learn, {props.name}</h1>
      <Input type="text" id="name" ref={inputRef} />
      {/* <input type="text" ref={inputRef} /> */}
    </div>
  );
}
export default HookUseRef