import React, { Component } from 'react';

export default class TableBox extends Component {
  render() {
    return (
      <div className="tableBox">
        <div className="tableRows">
          {
            this.renderLine('rows')
          }
        </div>
        <div className="tableColumns">
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

    if (line === 'rows') {
      let wNum = w - 1;

      return this.getArr(wNum).map(num => {
        return (
          <div className="rows" style={{ width: size * (wNum), height: size }}>{num}</div>
        );
      });
    }

    if (line === 'columns') {
      let hNum = h - 1;

      return this.getArr(hNum).map(num => {
        return (
          <div className="columns" style={{ width: size, height: size * (hNum) }}>{num}</div>
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
  box: [],
  size: 20
};