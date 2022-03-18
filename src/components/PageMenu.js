import React from 'react';
import { Link } from "react-router-dom";
import { Menu } from 'antd';
import { MailOutlined, SettingOutlined } from '@ant-design/icons';

// const { SubMenu } = Menu;
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
                    {/* <SubMenu key="SubMenu" icon={<SettingOutlined />} title="React API">
                        <Menu.ItemGroup title="Hook">
                            <Menu.Item key="setting:1">
                                <Link to="hookUseCallback">HookUseCallback</Link>
                            </Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu> */}
                    {/* <SubMenu key="fabric" icon={<AppstoreOutlined />} title="Fabric">
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
                    </SubMenu> */}
                    <Menu.Item key="excel" icon={<SettingOutlined />}>
                        <Link to="/excel">Excel转PDF</Link>
                    </Menu.Item>
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