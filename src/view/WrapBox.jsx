import React, { Component } from 'react';

import RowBox from './RowBox';

export default class WrapBox extends Component {
  constructor(props) {
    super(props);

    const [w, h] = props.box;

    this.state = {
      gameData: [
        {
          data: new Array(w * h).fill(null),
          step: 0
        }
      ],
      nowStep: 0,
      nextPlayer: 'black'
    };
  }

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
    const { gameData, nowStep } = this.state;
    const data = gameData[nowStep].data;
    let arr = [];

    for (let i = 0; i < h; i++) {
      const elem = (
        <RowBox
          key={i}
          data={data.slice(i * w, i * w + w)}
          size={this.props.size} />
      );

      arr.push(elem);
    }

    return arr;
  }
}

WrapBox.defaultProps = {
  size: 20,
  box: [15, 15]
};