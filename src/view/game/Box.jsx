import React, { Component } from 'react';
import { connect } from 'react-redux';

import { START } from '../../constant/game';
import { updateData } from '../../actions/gameActions';

class Box extends Component {
  constructor(props) {
    super(props);

    this.colors = {
      black: '#000',
      white: '#fff'
    };
  }

  render() {
    const { size, value } = this.props;
    const styles = {
      width: size - 2, height: size - 2,
      backgroundColor: value ? this.colors[value] : 'transparent'
    };

    return (
      <div
        className="box"
        style={{ width: size, height: size }}>
        <span
          className="player"
          style={styles}
          onClick={this.handlePlay.bind(this)}></span>
      </div>
    );
  }

  handlePlay() {
    // 不能重复落子在同一个位置
    if (this.props.value || this.props.gameStatus !== START) {
      return;
    }

    this.props.dispatch(updateData(this.props.index));
  }
}

Box.defaultProps = {
  value: null,
  index: 0
};

const mapStateToProps = state => {
  const { size } = state.setting;
  const { gameStatus } = state.status;

  return {
    size,
    gameStatus
  };
};

export default connect(mapStateToProps)(Box);
