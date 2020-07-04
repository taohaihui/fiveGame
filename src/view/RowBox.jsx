import React, { Component } from 'react';

import ReduxBox from './Box';

export default class RowBox extends Component {
  render() {
    return (
      <div className="rowBox">
        {
          this.props.data.map((value, index) => {
            return (
              <ReduxBox
                key={index}
                index={this.props.startIndex + index}
                value={value} />
            );
          })
        }
      </div>
    );
  }
}

RowBox.defaultProps = {
  data: [],
  startIndex: 0
};