import React from 'react';
class Bye extends React.Component {
    render() {
        return <h1>Bye, {this.props.name}</h1>;
    }
}
export default Bye;
//可以导出类型组件
// 使用this.props