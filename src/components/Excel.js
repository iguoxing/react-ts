/*
 * @Author: ArdenZhao
 * @Date: 2021-12-17 21:44:51
 * @LastEditors: Zhaos-MacBook-Pro.local
 * @LastEditTime: 2022-03-16 17:28:46
 * @FilePath: /react-ts/src/components/Excel.js
 */
import React from 'react';
import * as XLSX from "xlsx";
import { Row, Col, Button, Table } from 'antd';

class Excel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [] /* Array of Arrays e.g. [["a","b"],[1,2]] */,
            cols: [] /* Array of column objects e.g. { name: "C", K: 2 } */
        };
        this.handleFile = this.handleFile.bind(this);
        this.exportFile = this.exportFile.bind(this);
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
            data.forEach((item, index) => {
                if (index > 0) {
                    let tmp = {
                        name: handleTitle(item[1]), // 用户昵称
                        date: handleTitle(item[4]), // 打卡时间
                        homework: handleTitle(item[5]).slice(2), // 所属作业
                        words: handleTitle(item[6]), // 文字内容
                        images: handleTitle(item[7]), //图片内容
                    }
                    dataSource.push(tmp)
                }
            })
            dataSource.reverse()
            console.log('[ data ] >', data, columns, dataSource)

            // debugger
            /* Update state */
            this.setState({ data: dataSource, cols: columns });
        };
        if (rABS) reader.readAsBinaryString(file);
        else reader.readAsArrayBuffer(file);
    }
    exportFile() {
        /* convert state to workbook */
        const ws = XLSX.utils.aoa_to_sheet(this.state.data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "SheetJS");
        /* generate XLSX file and send to client */
        XLSX.writeFile(wb, "sheetjs.xlsx");
    }
    render() {
        return (
            <DragDropFile handleFile={this.handleFile}>
                <Row gutter={16}>
                    <Col className="gutter-row" span={16}>
                        <DataInput handleFile={this.handleFile} />
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <Button type="primary" disabled={!this.state.data.length} onClick={this.exportFile}>
                            导出
                        </Button>
                    </Col>
                </Row>
                <div className="row">
                    <div className="col-xs-12">
                        <Table dataSource={this.state.data} columns={this.state.cols} pagination={false} />
                        {/* <OutTable data={this.state.data} cols={this.state.cols} /> */}
                    </div>
                </div>
            </DragDropFile>
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

/*
  Simple HTML Table
  usage: <OutTable data={data} cols={cols} />
    data:Array<Array<any> >;
    cols:Array<{name:string, key:number|string}>;
*/
class OutTable extends React.Component {
    render() {
        return (
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            {this.props.cols.map(c => (
                                <th key={c.key}>{c.name}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data.map((r, i) => (
                            <tr key={i}>
                                {this.props.cols.map(c => (
                                    <td key={c.key}>{r[c.key]}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
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

/* generate an array of column objects */
const make_cols = refstr => {
    let o = [],
        C = XLSX.utils.decode_range(refstr).e.c + 1;
    for (var i = 0; i < C; ++i) o[i] = { name: XLSX.utils.encode_col(i), key: i };
    return o;
};
export default Excel;