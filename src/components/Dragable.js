// Copyright 2021 zhaoarden
import React from 'react';
import Draggable from 'react-draggable'; // The default
import { Modal,Button } from 'antd';
import "antd/dist/antd.css";
class Dragable extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            visible: false
        }
    }
    componentDidMount(){
    };
    render() {
        const {visible}=this.state
        const clickName=()=>{
            this.setState({visible:true});
            console.log('clickName');
        }
        const handleOk = () => {
            this.setState({visible:false});
        };
        const handleCancel = () => {
            this.setState({visible:false});
        };
        return <div>
            <h1>Learn, {this.props.name}</h1>
            <Button type="primary"  onClick={clickName}>Primary Button</Button>
            <Modal title="Basic Modal" visible={visible} onOk={handleOk} onCancel={handleCancel}>
                <Draggable>
                    <div>I can now be moved around!</div>
                </Draggable>
            </Modal>
        </div>;
    }
}
export default Dragable;