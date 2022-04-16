/*
 * @Author: ArdenZhao
 * @Date: 2021-12-17 21:44:51
 * @LastEditors: bogon
 * @LastEditTime: 2022-04-01 18:41:34
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
            <img src={logo} className="App-logo" alt="logo" />
            <h1>改变</h1>
            {/* <h1>Hello, {this.props.name}</h1> */}
            <h4>Real change, enduring change, happens one step at a time. </h4>
            <h2>真正的改变，持久的变化，都是一步一步完成的~</h2>
        </div>;
    }
}
export default Welcome;