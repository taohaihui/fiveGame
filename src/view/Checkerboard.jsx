import React, { Component } from 'react';
import './styles.scss';

import TableBox from './TableBox';
import WrapBox from './WrapBox';

export default class Checkerboard extends Component {
  render() {
    return (
      <div className="checkerboard">
        <TableBox box={this.props.box} />
        <WrapBox box={this.props.box} />
      </div>
    );
  }
}

Checkerboard.defaultProps = {
  size: 20,
  box: [15, 15]
};