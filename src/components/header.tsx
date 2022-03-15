/*
 * @Author: ArdenZhao
 * @Date: 2021-12-17 21:44:51
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-03-05 10:54:30
 * @FilePath: /react-ts/src/components/header.tsx
 */
import React, { useState } from 'react';

interface WelcomeProps {
    name: string;
}

class Welcome extends React.Component<WelcomeProps> {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}
export default Welcome;