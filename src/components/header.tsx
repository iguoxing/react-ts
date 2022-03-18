/*
 * @Author: ArdenZhao
 * @Date: 2021-12-17 21:44:51
 * @LastEditors: Zhaos-MacBook-Pro.local
 * @LastEditTime: 2022-03-18 14:08:54
 * @FilePath: /react-ts/src/components/header.tsx
 */
import React from 'react';
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