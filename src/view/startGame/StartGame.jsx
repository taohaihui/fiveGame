import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import './styles.scss';

import { START, PAUSE, END } from '../../constant/game';
import { resetStatus, pauseOrContinueGame } from '../../actions/gameActions';

class StartGame extends Component {
  render() {
    return (
      <div className="startGame">
        {
          this.props.gameStatus === END && (
            <Button
              type="primary"
              size="large"
              onClick={this.handleStart.bind(this)}>开始游戏</Button>
          )
        }

        {
          this.props.gameStatus === START && (
            <Button
              type="primary"
              size="large"
              onClick={this.handlePause.bind(this, PAUSE)}>暂停</Button>
          )
        }
        {
          this.props.gameStatus === PAUSE && (
            <Button
              type="primary"
              size="large"
              onClick={this.handlePause.bind(this, START)}>继续</Button>
          )
        }

        {
          this.props.gameStatus === START && (
            <Button
              danger
              size="large"
              onClick={this.handleStart.bind(this)}>重新开始</Button>
          )
        }

        {
          this.props.gameStatus !== END && (
            <Button
              danger
              size="large"
              onClick={this.handlePause.bind(this, END)}>结束游戏</Button>
          )
        }
      </div>
    );
  }

  handleStart() {
    this.props.dispatch(resetStatus(START));
  }

  handlePause(status) {
    this.props.dispatch(pauseOrContinueGame(status));
  }
}

const mapStateToProps = state => {
  const { gameStatus } = state.status;

  return {
    gameStatus
  };
};

export default connect(mapStateToProps)(StartGame);