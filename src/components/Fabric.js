/*
 * @Author: ArdenZhao
 * @Date: 2021-12-07 11:35:45
 * @LastEditors: Do not edit
 * @LastEditTime: 2021-12-30 14:29:52
 * @FilePath: /react-ts/src/components/Fabric.js
 */
import React from 'react';
import { fabric } from "fabric";
class Fabric extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            canvas:new fabric.Canvas('canvas')
        }
    }
    componentDidMount(){
        fabric.textureSize = 5120;//限制图片上限为5M  1024*5=5120
        const canvas = new fabric.Canvas('canvas');
        console.log('canvas',canvas);
        // // 图片
        const imgEl = document.createElement('img')
        imgEl.crossOrigin = 'Anonymous' // 让图片能让所有人存取
        imgEl.src = 'https://2.bp.blogspot.com/-H3JXh2cIKHs/WuwLvnz19cI/AAAAAAAAMXs/-qySdr5zEcc-kcLC4arf5m5H3F_trN7sgCK4BGAYYCw/s1600/kristopher-roller-110203-unsplash-m.jpg'
        imgEl.onload = () => {
            const image = new fabric.Image(imgEl, {
                scaleX: 0.5,
                scaleY: 0.5,
                angle: 0,
                // angle: 15,
                top: 0,
                left: 0
            })
            // 将 filters 实例 push 进 filters 里头
            image.filters.push(new fabric.Image.filters.Contrast({contrast: 0.2}))
            // 这边需要重整所有的滤镜效果
            image.applyFilters()
            canvas.add(image)
            var line = new fabric.Line([10, 20, 115, 110], {
                strokeWidth: 2,
                stroke: 'red',
                originX: 'center',
                originY: 'center'
            });
            canvas.add(line);
        }
    };
    render() {
        return <div>
            <h1>Learn, {this.props.name}</h1>
            <canvas id="canvas" width="666" height="600"></canvas>
        </div>;
    }
}
export default Fabric;