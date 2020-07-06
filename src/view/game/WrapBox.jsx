import React, { Component } from 'react';

import RowBox from './RowBox';

export default class WrapBox extends Component {
  render() {
    return (
      <div className="wrapBox">
        {
          this.renderRowBox()
        }
      </div>
    );
  }

  renderRowBox() {
    const [columns, rows] = this.props.box;
    const data = this.props.data;
    let arr = [];

    for (let i = 0; i < rows; i++) {
      const elem = (
        <RowBox
          key={i}
          startIndex={i * columns}
          data={data.slice(i * columns, i * columns + columns)} />
      );

      arr.push(elem);
    }

    return arr;
  }
}

WrapBox.defaultProps = {
  box: [0, 0],
  data: []
};