import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import './styles.scss';

import { startGame, pauseGame } from '../../actions/gameActions';

class StartGame extends Component {
  render() {
    return (
      <div className="startGame">
        {
          this.props.gameStatus === 'end' && (
            <Button
              type="primary"
              size="large"
              onClick={this.handleStart.bind(this)}>开始游戏</Button>
          )
        }

        {
          this.props.gameStatus === 'start' && (
            <Button
              type="primary"
              size="large"
              onClick={this.handlePause.bind(this, 'pause')}>暂停</Button>
          )
        }
        {
          this.props.gameStatus === 'pause' && (
            <Button
              type="primary"
              size="large"
              onClick={this.handlePause.bind(this, 'start')}>继续</Button>
          )
        }

        {
          this.props.gameStatus === 'start' && (
            <Button
              danger
              size="large"
              onClick={this.handleStart.bind(this)}>重新开始</Button>
          )
        }

        {
          this.props.gameStatus !== 'end' && (
            <Button
              danger
              size="large"
              onClick={this.handlePause.bind(this, 'end')}>结束游戏</Button>
          )
        }
      </div>
    );
  }

  handleStart() {
    this.props.dispatch(startGame('start'));
  }

  handlePause(status) {
    this.props.dispatch(pauseGame(status));
  }
}

const mapStateToProps = state => {
  return {
    gameStatus: state.gameStatus
  };
};

export default connect(mapStateToProps)(StartGame);