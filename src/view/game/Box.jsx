import React, { Component } from 'react';
import { connect } from 'react-redux';

import { playChess } from '../../actions/gameActions';

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
    if (this.props.value || this.props.gameStatus !== 'start') {
      return;
    }

    this.props.dispatch(playChess(this.props.index));
  }
}

Box.defaultProps = {
  value: null,
  index: 0,
  size: 0
};

const mapStateToProps = state => {
  return {
    size: state.size,
    gameStatus: state.gameStatus
  };
};

export default connect(mapStateToProps)(Box);
