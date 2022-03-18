// Copyright 2021 zhaoarden
import React from 'react';
import { fabric } from "fabric";
import { Button } from 'antd';
class Polygon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            canvas: {}
        }
    }
    componentDidMount() {
        console.log('componentDidMount');
        const canvas = new fabric.Canvas('c');
        console.log('canvas', canvas);
        this.setState({ canvas: canvas })
        // console.log('state-canvas',this.state.canvas);
        var points = [{
            x: 3, y: 4
        }, {
            x: 16, y: 3
        }, {
            x: 30, y: 5
        }, {
            x: 25, y: 55
        }, {
            x: 19, y: 44
        }, {
            x: 15, y: 30
        }, {
            x: 15, y: 55
        }, {
            x: 9, y: 55
        }, {
            x: 6, y: 53
        }, {
            x: -2, y: 55
        }, {
            x: -4, y: 40
        }, {
            x: 0, y: 20
        }]
        var polygon = new fabric.Polygon(points, {
            left: 100,//相对做边距的距离
            top: 50,
            fill: '#D81B60',//多边形背景填充色
            strokeWidth: 4,//多边形边框宽度
            stroke: 'green',//多边形边框颜色
            scaleX: 6,//水平方向的宽度（改为10会等比变宽）
            scaleY: 5,//纵向10会高度撑满，
            objectCaching: false,//非必须，不缓存
            transparentCorners: false,//当为true时，转角的点是透明色
            cornerColor: 'blue',//多边形角的颜色
            cornerSize: 16,//角点的直径
            includeDefaultValues: true,//默认包含序列化的值
            // inverted:true,
        });
        // console.log('[ polygon.getViewportTransform() ] >', polygon.getViewportTransform())//[1, 0, 0, 1, 0, 0]
        canvas.viewportTransform = [0.7, 0, 0, 0.7, 100, 50];//调整视区，具体参数待查
        canvas.add(polygon);
    }
    componentDidUpdate() {
        console.log('this', this);
    }
    render() {
        const controls = {
            display: 'inline-block'
        };
        const { canvas } = this.state

        // define a function that can locate the controls.
        // this function will be used both for drawing and for interaction.
        function polygonPositionHandler(dim, finalMatrix, fabricObject) {
            var x = (fabricObject.points[this.pointIndex].x - fabricObject.pathOffset.x),
                y = (fabricObject.points[this.pointIndex].y - fabricObject.pathOffset.y);
            return fabric.util.transformPoint(
                { x: x, y: y },
                fabric.util.multiplyTransformMatrices(
                    fabricObject.canvas.viewportTransform,
                    fabricObject.calcTransformMatrix()
                )
            );
        }

        // define a function that will define what the control does
        // this function will be called on every mouse move after a control has been
        // clicked and is being dragged.
        // The function receive as argument the mouse event, the current trasnform object
        // and the current position in canvas coordinate
        // transform.target is a reference to the current object being transformed,
        function actionHandler(eventData, transform, x, y) {
            var polygon = transform.target,
                currentControl = polygon.controls[polygon.__corner],
                mouseLocalPosition = polygon.toLocalPoint(new fabric.Point(x, y), 'center', 'center'),
                polygonBaseSize = polygon._getNonTransformedDimensions(),
                size = polygon._getTransformedDimensions(0, 0),
                finalPointPosition = {
                    x: mouseLocalPosition.x * polygonBaseSize.x / size.x + polygon.pathOffset.x,
                    y: mouseLocalPosition.y * polygonBaseSize.y / size.y + polygon.pathOffset.y
                };
            polygon.points[currentControl.pointIndex] = finalPointPosition;
            return true;
        }

        // define a function that can keep the polygon in the same position when we change its
        // width/height/top/left.
        function anchorWrapper(anchorIndex, fn) {
            return function (eventData, transform, x, y) {
                var fabricObject = transform.target,
                    absolutePoint = fabric.util.transformPoint({
                        x: (fabricObject.points[anchorIndex].x - fabricObject.pathOffset.x),
                        y: (fabricObject.points[anchorIndex].y - fabricObject.pathOffset.y),
                    }, fabricObject.calcTransformMatrix()),
                    actionPerformed = fn(eventData, transform, x, y),
                    polygonBaseSize = fabricObject._getNonTransformedDimensions(),
                    newX = (fabricObject.points[anchorIndex].x - fabricObject.pathOffset.x) / polygonBaseSize.x,
                    newY = (fabricObject.points[anchorIndex].y - fabricObject.pathOffset.y) / polygonBaseSize.y;
                fabricObject.setPositionByOrigin(absolutePoint, newX + 0.5, newY + 0.5);
                return actionPerformed;
            }
        }
        function Edit() {
            console.log('canvas', canvas);
            console.log('Edit');
            // clone what are you copying since you
            // may want copy and paste on different moment.
            // and you do not want the changes happened
            // later to reflect on the copy.
            var poly = canvas.getObjects()[0];
            canvas.setActiveObject(poly);
            poly.edit = !poly.edit;
            if (poly.edit) {
                var lastControl = poly.points.length - 1;
                poly.cornerStyle = 'circle';
                poly.cornerColor = 'rgba(0,0,255,0.5)';
                poly.controls = poly.points.reduce(function (acc, point, index) {
                    console.log('acc', acc);
                    console.log('point', point);
                    acc['p' + index] = new fabric.Control({
                        positionHandler: polygonPositionHandler,
                        actionHandler: anchorWrapper(index > 0 ? index - 1 : lastControl, actionHandler),
                        actionName: 'modifyPolygon',
                        pointIndex: index
                    });
                    return acc;
                }, {});
            } else {
                poly.cornerColor = 'blue';
                poly.cornerStyle = 'rect';
                poly.controls = fabric.Object.prototype.controls;
            }
            poly.hasBorders = !poly.edit;
            canvas.requestRenderAll();
        }

        return <div>
            <h1>Learn, {this.props.name}</h1>
            <div className={controls}>
                <p>
                    <Button id="edit" onClick={Edit}>Toggle editing polygon</Button>
                </p>
            </div>
            <canvas id="c" width="500" height="400" style={{ border: '1px solid #ccc' }}></canvas>
        </div>;
    }
}
export default Polygon;