import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles.scss';

import TableBox from './TableBox';
import WrapBox from './WrapBox';

class Game extends Component {
  render() {
    return (
      <div className="checkerboard">
        <TableBox
          box={this.props.box}
          size={this.props.size} />
        <WrapBox
          box={this.props.box}
          data={this.props.lastRecord.data} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { size, rows, columns } = state.setting;
  const { nowStep } = state.status;
  return {
    size,
    box: [columns, rows],
    lastRecord: state.gameData[nowStep]
  };
};

export default connect(mapStateToProps)(Game);

