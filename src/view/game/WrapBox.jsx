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
    )
  }

  renderRowBox() {
    const [w, h] = this.props.box;
    const data = this.props.data;
    let arr = [];

    for (let i = 0; i < h; i++) {
      const elem = (
        <RowBox
          key={i}
          startIndex={i * w}
          data={data.slice(i * w, i * w + w)} />
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