import React, { Component } from 'react';

export default class Box extends Component {
  render() {
    const size = this.props.size;

    return (
      <div
        className="box"
        style={{ width: size, height: size }}>
        <span
          className="player"
          style={{ width: size - 5, height: size - 5 }}></span>
      </div>
    );
  }
}

Box.defaultProps = {
  value: null,
  size: 10
};