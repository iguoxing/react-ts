import React from 'react';
import { Link } from "react-router-dom";
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined, FacebookOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
class PageMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'mail',
        }
    }
    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
    };
    render() {
        const { current } = this.state;
        return (
            <div>
                {/* <h1>Antd, {this.props.name}</h1> */}
                <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" theme="dark">
                    <Menu.Item key="index" icon={<MailOutlined />}>
                        <Link to="/">首页</Link>
                    </Menu.Item>
                    <SubMenu key="SubMenu" icon={<SettingOutlined />} title="React">
                        <Menu.ItemGroup title="Basic">
                            <Menu.Item key="setting:Props">
                                <Link to="reactProps">Props</Link>
                            </Menu.Item>
                            <Menu.Item key="setting:Ref">
                                <Link to="reactRef">Ref</Link>
                            </Menu.Item>
                            <Menu.Item key="setting:State">
                                <Link to="reactState">State</Link>
                            </Menu.Item>
                            <Menu.Item key="setting:LifeCycle">
                                <Link to="reactLifeCycle">生命周期</Link>
                            </Menu.Item>
                            <Menu.Item key="setting:Form">
                                <Link to="reactForm">受控组件与非受控组件</Link>
                            </Menu.Item>
                            <Menu.Item key="setting:Params">
                                <Link to="reactParams">事件传参</Link>
                            </Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup title="Hook API">
                            <Menu.Item key="setting:hookUseState">
                                <Link to="hookUseState">useState</Link>
                            </Menu.Item>
                            <Menu.Item key="setting:useEffect">
                                <Link to="hookUseEffect">useEffect</Link>
                            </Menu.Item>
                            <Menu.Item key="setting:useContext">
                                <Link to="hookUseContext">useContext</Link>
                            </Menu.Item>
                            <Menu.Item key="setting:useReducer">
                                <Link to="hookUseReducer">useReducer</Link>
                            </Menu.Item>
                            <Menu.Item key="setting:1">
                                <Link to="hookUseCallback">HookUseCallback</Link>
                            </Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                    <SubMenu key="fabric" icon={<AppstoreOutlined />} title="Fabric">
                        <Menu.ItemGroup title="Components">
                            <Menu.Item key="line">
                                <Link to="fabric">Line</Link>
                            </Menu.Item>
                            <Menu.Item key="polygon">
                                <Link to="polygon">Polygon</Link>
                            </Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                    <SubMenu key="ecology" icon={<AppstoreOutlined />} title="相关生态">
                        <Menu.ItemGroup title="Dragable">
                            <Menu.Item key="dragable">
                                <Link to="dragable">Dragable</Link>
                            </Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                    <Menu.Item key="excel" icon={<MailOutlined />}>
                        <Link to="/excel">Excel</Link>
                    </Menu.Item>
                    <SubMenu key="face" icon={<FacebookOutlined />} title="面试">
                        <Menu.ItemGroup title="JS">
                            <Menu.Item key="divof3">
                                <Link to="divof3">3个div点击</Link>
                            </Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                    {/* <Menu.Item key="hookUseCallback" icon={<AppstoreOutlined />}>
                        <Link to="hookUseCallback">HookUseCallback</Link>
                    </Menu.Item> */}
                    {/* <Menu.Item key="alipay">
                        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                            Navigation Four - Link
                        </a>
                    </Menu.Item> */}
                </Menu>
            </div>
        );
    }
}
export default PageMenu;