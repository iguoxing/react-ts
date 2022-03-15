/*
 * @Author: ArdenZhao
 * @Date: 2022-03-05 10:21:23
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-03-05 10:24:13
 * @FilePath: /react-ts/src/components/demo/test1.js
 */
import React, { useState } from 'react';

const x = () => {
  const [num,setNum]= useState(Math.random());
  setNum(1);
  return <h1>{ num }</h1>
}