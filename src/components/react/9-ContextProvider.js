/*
 * @Author: ArdenZhao
 * @Date: 2022-04-16 09:48:50
 * @LastEditTime: 2022-04-16 14:58:45
 * @FilePath: /react-ts/src/components/react/9-ContextProvider.js
 * @Description: file information
 */
import React, { useState, createContext } from 'react';

export const context = createContext({});
export function ContextProvider({ children }) {
  const [name, setName] = useState('Arden');
  const [age, setAge] = useState(18);
  const constVal = {
    name,
    age,
    setName,
    setAge,
    addAge: () => setAge(age + 1),
  }
  return <context.Provider value={constVal}>{children}</context.Provider>
};

