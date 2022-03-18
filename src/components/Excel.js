/*
 * @Author: ArdenZhao
 * @Date: 2021-12-17 21:44:51
 * @LastEditors: Zhaos-MacBook-Pro.local
 * @LastEditTime: 2022-03-18 14:08:06
 * @FilePath: /react-ts/src/components/Excel.js
 */
import React from 'react';
import * as XLSX from "xlsx";
import { Row, Col, Button, Table } from 'antd';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

class Excel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            data: [] /* Array of Arrays e.g. [["a","b"],[1,2]] */,
            cols: [] /* Array of column objects e.g. { name: "C", K: 2 } */
        };
        this.handleFile = this.handleFile.bind(this);
        this.exportFile = this.exportFile.bind(this);
    }

    exportFile() {
        console.log('[ thisdocument ] >', this, document)
        // debugger
        /* convert state to workbook */
        // const ws = XLSX.utils.aoa_to_sheet(this.state.data);
        // const wb = XLSX.utils.book_new();
        // XLSX.utils.book_append_sheet(wb, ws, "SheetJS");
        // /* generate XLSX file and send to client */
        // XLSX.writeFile(wb, "sheetjs.xlsx");
        // 方法1
        const element = document.getElementById('demo');  // 这个dom元素是要导出的pdf的div容器
        const w = element.offsetWidth;  // 获得该容器的宽
        const h = element.offsetHeight;  // 获得该容器的高
        const offsetTop = element.offsetTop; // 获得该容器到文档顶部的距离  
        const offsetLeft = element.offsetLeft; // 获得该容器到文档最左的距离
        console.log('[ global ] >', global)
        // debugger
        const canvas = document.getElementById('myCanvas');
        // const canvas = document.creatElement("canvas");
        let abs = 0;
        const win_i = document.body.clientWidth; // 获得当前可视窗口的宽度（不包含滚动条）
        const win_o = window.innerWidth; // 获得当前窗口的宽度（包含滚动条）
        if (win_o > win_i) {
            abs = (win_o - win_i) / 2; // 获得滚动条宽度的一半
        }
        canvas.width = w * 2; // 将画布宽&&高放大两倍
        canvas.height = h * 2;
        const context = canvas.getContext('2d');
        context.scale(2, 2);
        context.translate(-offsetLeft - abs, -offsetTop);
        // 这里默认横向没有滚动条的情况，因为offset.left()，有无滚动条的时候存在差值，因此translate的时候，要把这个差值去掉
        html2canvas(element, {
            allowTaint: true,
            scale: 2 // 提升画面质量，但是会增加文件大小
        }).then(canvas => {
            const contentWidth = canvas.width;
            const contentHeight = canvas.height;
            // 一页pdf显示html页面生成的canvas高度
            const pageHeight = contentWidth / 592.28 * 841.89;
            // 未生成pdf的html页面高度
            let leftHeight = contentHeight;
            // debugger
            // 页面偏移
            let position = 0;
            // a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
            const imgWidth = 595.28;
            const imgHeight = 592.28 / contentWidth * contentHeight;

            const pageDate = canvas.toDataURL('image/jpeg', 1.0);

            const pdf = new jsPDF('', 'pt', 'a4');
            // 有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面的高度（841.89）
            // 当内容未超过pdf一页显示的范围，无需分页
            if (leftHeight < pageHeight) {
                pdf.addImage(pageDate, 'JPEG', 0, position, imgWidth, imgHeight);
            } else { // 分页
                while (leftHeight > 0) {
                    pdf.addImage(pageDate, 'JPEG', 0, position, imgWidth, imgHeight)
                    leftHeight -= pageHeight;
                    position -= 841.89;
                    // 避免添加空白页
                    if (leftHeight > 0) {
                        pdf.addPage()
                    }
                }
            }

            pdf.save(`转型蜕变学园${this.state.name}作业打卡.pdf`);
        })
    }
    handleFile(file /*:File*/) {
        /* Boilerplate to set up FileReader */
        const reader = new FileReader();
        const rABS = !!reader.readAsBinaryString;
        const handleTitle = function (val) {
            return val.replace(/\s+/g, '');
        }
        reader.onload = e => {
            /* Parse data */
            const bstr = e.target.result;
            const wb = XLSX.read(bstr, { type: rABS ? "binary" : "array" });
            /* Get first worksheet */
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            console.log(rABS, wb);
            /* Convert array of arrays */
            const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
            const titles = data[0]
            // const showData = {
            //     name: handleTitle(titles[1]), // 用户昵称
            //     date: handleTitle(titles[4]), // 打卡时间
            //     homework: handleTitle(titles[5]), // 所属作业
            //     words: handleTitle(titles[6]), // 文字内容
            //     images: handleTitle(titles[7]), //图片内容
            // }
            const columns = [
                {
                    title: handleTitle(titles[5]),// 所属作业
                    dataIndex: 'homework',
                },
                {
                    title: handleTitle(titles[4]),// 打卡时间
                    dataIndex: 'date',
                },
                {
                    title: handleTitle(titles[5]),// 所属作业
                    dataIndex: 'words',
                }
            ];
            const dataSource = []
            let userName = ''
            data.forEach((item, index) => {
                if (index > 0) {
                    let tmp = {
                        name: handleTitle(item[1]), // 用户昵称
                        date: handleTitle(item[4]), // 打卡时间
                        homework: handleTitle(item[5]).slice(2), // 所属作业
                        words: handleTitle(item[6]), // 文字内容
                        images: handleTitle(item[7]), //图片内容
                    }
                    userName = userName ? userName : handleTitle(item[1])
                    dataSource.push(tmp)
                }
            })
            dataSource.reverse()
            console.log('[ data ] >', data, columns, dataSource)

            /* Update state */
            this.setState({ data: dataSource, cols: columns, name: userName });
        };
        if (rABS) reader.readAsBinaryString(file);
        else reader.readAsArrayBuffer(file);
    }
    render() {
        return (
            <DragDropFile handleFile={this.handleFile}>
                <Row gutter={16} style={{ marginTop: 15, paddingTop: '30px' }}>
                    <Col className="gutter-row" span={16}>
                        <DataInput handleFile={this.handleFile} />
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <Button type="primary" disabled={!this.state.data.length} onClick={this.exportFile}>
                            导出
                        </Button>
                    </Col>
                </Row>
                <div className="row" id="demo">
                    <div className="col-xs-12" style={{ marginTop: 15, paddingTop: '30px', paddingLeft: '30px', paddingRight: '30px' }}>
                        <Table dataSource={this.state.data} columns={this.state.cols} pagination={false} />
                    </div>
                </div>
                <canvas id="myCanvas" width="0" height="0"></canvas>
            </DragDropFile >
        );
    }
}

/* -------------------------------------------------------------------------- */

/*
  Simple HTML5 file drag-and-drop wrapper
  usage: <DragDropFile handleFile={handleFile}>...</DragDropFile>
    handleFile(file:File):void;
*/
class DragDropFile extends React.Component {
    constructor(props) {
        super(props);
        this.onDrop = this.onDrop.bind(this);
    }
    suppress(evt) {
        evt.stopPropagation();
        evt.preventDefault();
    }
    onDrop(evt) {
        evt.stopPropagation();
        evt.preventDefault();
        const files = evt.dataTransfer.files;
        if (files && files[0]) this.props.handleFile(files[0]);
    }
    render() {
        return (
            <div
                onDrop={this.onDrop}
                onDragEnter={this.suppress}
                onDragOver={this.suppress}
            >
                {this.props.children}
            </div>
        );
    }
}

/*
  Simple HTML5 file input wrapper
  usage: <DataInput handleFile={callback} />
    handleFile(file:File):void;
*/
class DataInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        const files = e.target.files;
        if (files && files[0]) this.props.handleFile(files[0]);
    }
    render() {
        return (
            <form className="form-inline">
                <div className="form-group">
                    <label htmlFor="file">上传文件</label>
                    <input
                        type="file"
                        className="form-control"
                        id="file"
                        accept={SheetJSFT}
                        onChange={this.handleChange}
                    />
                </div>
            </form>
        );
    }
}

/* list of supported file types */
const SheetJSFT = [
    "xlsx",
    "xlsb",
    "xlsm",
    "xls",
    "xml",
    "csv",
    "txt",
    "ods",
    "fods",
    "uos",
    "sylk",
    "dif",
    "dbf",
    "prn",
    "qpw",
    "123",
    "wb*",
    "wq*",
    "html",
    "htm"
]
    .map(function (x) {
        return "." + x;
    })
    .join(",");

export default Excel;