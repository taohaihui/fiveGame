import React, { Component } from 'react';
import './styles.scss';
import { connect } from 'react-redux';
import { Timeline } from 'antd';

import { WHITE, BLACK } from '../../constant/game';

class HistoryData extends Component {
  constructor(props) {
    super(props);

    this.player = {
      [WHITE]: '白棋',
      [BLACK]: '黑棋'
    };
  }

  render() {
    return (
      <div className="historyData">
        <div className="title">历史数据</div>
        <Timeline>
          {
            this.props.historyData.reverse().map((item, index) => {
              const winner = item.state.status.winner;

              return (
                <Timeline.Item key={index}>
                  <div>开始：{item.startTime}</div>
                  <div>结束：{item.endTime}</div>
                  <div>胜方：{winner ? this.player[winner] : '棋局未下完'}</div>
                </Timeline.Item>
              );
            })
          }
        </Timeline>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    historyData: state.historyData
  };
};

export default connect(mapStateToProps)(HistoryData);