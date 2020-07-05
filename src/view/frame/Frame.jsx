import React, { Component } from 'react';
import './styles.scss';
import 'antd/dist/antd.css';

import ReduxGame from '../game/Game';
import ReduxStartGame from '../startGame/StartGame';
import ReduxGameInfo from '../gameInfo/GameInfo';

export default class Frame extends Component {
  render() {
    return (
      <div className="frame">
        <div className="left"></div>
        <div className="center">
          <div className="centerTop">
            <ReduxGameInfo />
          </div>
          <div className="gameWrap">
            <ReduxGame />
          </div>
          <div className="centerBottom">
            <ReduxStartGame />
          </div>
        </div>
        <div className="right"></div>
      </div>
    );
  }
}