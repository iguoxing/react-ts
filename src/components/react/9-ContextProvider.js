/*
 * @Author: ArdenZhao
 * @Date: 2022-04-16 09:48:50
 * @LastEditTime: 2022-04-16 15:14:57
 * @FilePath: /react-ts/src/components/react/9-ContextProvider.js
 * @Description: file information
 */
import React, { useState, createContext } from 'react';

export const context = createContext({});
export function ContextProvider({ children }) {
  const [age, setAge] = useState(18);
  const constVal = {
    age,
    setAge,
    addAge: () => setAge(age + 1),
  }
  return <context.Provider value={constVal}>{children}</context.Provider>
};

