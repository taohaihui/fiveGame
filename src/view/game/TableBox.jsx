import React, { Component } from 'react';

export default class TableBox extends Component {
  render() {
    let width = (this.props.box[0] - 1) * this.props.size;

    return (
      <div className="tableBox">
        <div className="tableRows">
          {
            this.renderLine('rows')
          }
        </div>
        <div className="tableColumns" style={{ width }}>
          {
            this.renderLine('columns')
          }
        </div>
      </div>
    )
  }

  renderLine(line) {
    const [w, h] = this.props.box;
    const size = this.props.size;

    // 渲染棋盘横线
    if (line === 'rows') {
      let wNum = w - 1;

      return this.getArr(h - 1).map(num => {
        return (
          <div
            key={num}
            className="rows"
            style={{ width: size * wNum, height: size }}></div>
        );
      });
    }

    // 渲染棋盘竖线
    if (line === 'columns') {
      let hNum = h - 1;

      return this.getArr(w - 1).map(num => {
        return (
          <div
            key={num}
            className="columns"
            style={{ width: size, height: size * hNum }}></div>
        );
      });
    }
  }

  getArr(num = 0) {
    let arr = [];

    for (let i = 0; i < num; i++) {
      arr.push(i + 1);
    }

    return arr;
  }
}

TableBox.defaultProps = {
  box: [0, 0],
  size: 0
};