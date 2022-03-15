/*
 * @Author: ArdenZhao
 * @Date: 2021-12-07 11:35:45
 * @LastEditors: bogon
 * @LastEditTime: 2022-03-15 18:17:11
 * @FilePath: /react-ts/src/components/Fabric.js
 */
import React from 'react';
import { fabric } from "fabric";
class Fabric extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            canvas: new fabric.Canvas('canvas')
        }
    }
    componentDidMount() {
        fabric.textureSize = 5120;//限制图片上限为5M  1024*5=5120
        const canvas = new fabric.Canvas('canvas');
        console.log('canvas', canvas);
        // // 图片 方式一：
        // const imgEl = document.createElement('img')
        // imgEl.crossOrigin = 'Anonymous' // 让图片能让所有人存取
        // imgEl.src = 'https://2.bp.blogspot.com/-H3JXh2cIKHs/WuwLvnz19cI/AAAAAAAAMXs/-qySdr5zEcc-kcLC4arf5m5H3F_trN7sgCK4BGAYYCw/s1600/kristopher-roller-110203-unsplash-m.jpg'
        // imgEl.onload = () => {
        //     const image = new fabric.Image(imgEl, {
        //         scaleX: 0.5,
        //         scaleY: 0.5,
        //         angle: 0,
        //         // angle: 15,
        //         top: 0,
        //         left: 0
        //     })
        //     // 将 filters 实例 push 进 filters 里头
        //     image.filters.push(new fabric.Image.filters.Contrast({contrast: 0.2}))
        //     // 这边需要重整所有的滤镜效果
        //     image.applyFilters()
        //     canvas.add(image)
        //     var line = new fabric.Line([10, 20, 115, 110], {
        //         strokeWidth: 2,
        //         stroke: 'red',
        //         originX: 'center',
        //         originY: 'center'
        //     });
        //     canvas.add(line);
        // }
        // 方式二
        const imgEl = document.createElement('img')
        imgEl.crossOrigin = 'Anonymous' // 让图片能让所有人存取
        imgEl.src = 'https://2.bp.blogspot.com/-H3JXh2cIKHs/WuwLvnz19cI/AAAAAAAAMXs/-qySdr5zEcc-kcLC4arf5m5H3F_trN7sgCK4BGAYYCw/s1600/kristopher-roller-110203-unsplash-m.jpg'
        fabric.textureSize = 10240;
        fabric.Image.fromObject(imgEl, (img) => {
            const image = new fabric.Image(imgEl, {
            })
            canvas.bgImgSize = { width: img.width, height: img.height }
            image.filters.push(new fabric.Image.filters.Contrast({ contrast: 0.01 }))
            image.applyFilters()
            //添加背景图
            canvas && canvas.setBackgroundImage(image, (rst) => {
                console.log('[ success ] >')
            }, {
                originX: "center",
                originY: "center",
                left: img.width / 2,
                top: img.height / 2,
                crossOrigin: 'Anonymous'
            });
            var line = new fabric.Line([10, 20, 215, 110], {
                strokeWidth: 2,
                stroke: 'red',
                originX: 'center',
                originY: 'center'
            });
            canvas.add(line);//添加线
        });
    };
    render() {
        return <div>
            <h1>Learn, {this.props.name}</h1>
            <canvas id="canvas" width="1000" height="800"></canvas>
        </div>;
    }
}
export default Fabric;