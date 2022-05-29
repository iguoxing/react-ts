/*
 * @Author: ArdenZhao
 * @Date: 2022-05-29 15:49:35
 * @LastEditTime: 2022-05-29 16:12:21
 * @FilePath: /react-ts/src/components/lib/1-jwt-decode.js
 * @Description: file information
 */
import React, { useState } from 'react';
import { Button } from 'antd';
import "antd/dist/antd.css";
import jwt_decode from "jwt-decode";

function JwtDecodeFunction(props) {
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC92ZHMuc3BlZWNob2NlYW4uY29tXC9tYW5hZ2VcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjUzODA5NjMzLCJleHAiOjE2NTM5ODI0MzMsIm5iZiI6MTY1MzgwOTYzMywianRpIjoiMEUwUHQ3WmNmUjJKNTNOeSIsInN1YiI6MSwicHJ2IjoiZjY0ZDQ4YTZjZWM3YmRmYTdmYmY4OTk0NTRiNDg4YjNlNDYyNTIwYSIsImlkIjoxLCJyb2xlIjoiMDEiLCJuYW1lIjoiXHU3YmExXHU3NDA2XHU1NDU4IiwiY3JlYXRlX3RpbWUiOjE2NTM4MDk2MzMsImFjY291bnQiOiJhZG1pbiJ9.0eQUhjpeWN3u4OzJ1NnerBfQtq5QhtNVxYnxHughrQ8'
  const [str, setStr] = useState({ a: 1 });
  console.log(jwt_decode(token))
  function toDecode() {
    var decoded = jwt_decode(token);
    setStr(decoded)
  }

  return (
    <div>
      <h1>Learn, {props.name}</h1>
      <p>{token}</p>
      <Button type="primary" onClick={toDecode}>
        开始解析Token
      </Button>
      <p> {JSON.stringify(str)} </p>
    </div>
  );
}
export default JwtDecodeFunction

// 参考链接
// https://flaviocopes.com/react-hook-usecallback/
