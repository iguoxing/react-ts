/*
 * @Author: ArdenZhao
 * @Date: 2021-12-07 11:35:45
 * @LastEditors: Do not edit
 * @LastEditTime: 2021-12-28 10:40:42
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
        fabric.textureSize = 5120;//1024*5=5120
        const canvas = new fabric.Canvas('canvas');
        console.log('canvas',canvas);
        // 图片
        const imgEl = document.createElement('img')
        imgEl.crossOrigin = 'Anonymous' // 让图片能让所有人存取
        imgEl.src = 'https://speechocean-bj.oss-cn-beijing.aliyuncs.com/0.Zzd/1015ziyouku_En/Book/18ac1a7879a187d7805944d3edfe471c8886f7a5318210b578380a5c6f439133.JPG'
        // imgEl.src = 'https://2.bp.blogspot.com/-H3JXh2cIKHs/WuwLvnz19cI/AAAAAAAAMXs/-qySdr5zEcc-kcLC4arf5m5H3F_trN7sgCK4BGAYYCw/s1600/kristopher-roller-110203-unsplash-m.jpg'
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