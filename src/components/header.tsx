/*
 * @Author: ArdenZhao
 * @Date: 2021-12-17 21:44:51
 * @LastEditors: bogon
 * @LastEditTime: 2022-03-15 18:19:31
 * @FilePath: /react-ts/src/components/header.tsx
 */
import React, { useState } from 'react';
import logo from '../logo.svg';
interface WelcomeProps {
    name: string;
}

class Welcome extends React.Component<WelcomeProps> {
    render() {
        return <div>
            <h1>Hello, {this.props.name}</h1>
            <img src={logo} className="App-logo" alt="logo" />
        </div>;
    }
}
export default Welcome;