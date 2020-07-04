import React, { Component } from 'react';

import Box from './Box';

export default class RowBox extends Component {
  render() {
    return (
      <div className="rowBox">
        {
          this.props.data.map((value, index) => {
            return (
              <Box
                key={index}
                value={value}
                size={this.props.size} />
            );
          })
        }
      </div>
    );
  }
}

RowBox.defaultProps = {
  data: [],
  size: []
};