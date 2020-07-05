import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles.scss';

class GameInfo extends Component {
  constructor(props) {
    super(props);

    this.status = {
      start: '进行中',
      pause: '暂停中',
      end: '结束'
    };

    this.player = {
      black: '黑棋',
      white: '白棋'
    };
  }

  render() {
    return (
      <div className="GameInfo">
        <div>
          <div className="infoItem">游戏状态: {this.status[this.props.gameStatus]}</div>
          <div className="infoItem">游戏总步数: {this.props.nowStep}</div>
          <div className="infoItem">下一步选手: {this.player[this.props.nextPlayer]}</div>
        </div>
        <div>
          {
            this.props.winner && (
              <div className="winner">{this.player[this.props.winner]}胜</div>
            )
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    gameStatus: state.gameStatus,
    nowStep: state.nowStep,
    nextPlayer: state.nextPlayer,
    winner: state.winner
  };
}

export default connect(mapStateToProps)(GameInfo);