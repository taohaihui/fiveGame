import React, { Component } from 'react';
import './styles.scss';
import { connect } from 'react-redux';
import { Descriptions, Input, Select, Button, message } from 'antd';

import { gameSet, resetGame } from '../../actions/gameActions';

class GameSetting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rows: '',
      columns: '',
      size: '',
      first: '',
      winPremise: '',
      propsData: {}
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (state.propsData !== props) {
      return {
        ...props,
        propsData: props
      };
    }

    return null;
  }

  render() {
    return (
      <div className="gameSetting">
        <div className="title">游戏设置</div>
        <Descriptions
          title="棋盘设置"
          layout="vertical"
          column={1}>
          <Descriptions.Item label="行数">
            <Input
              value={this.state.rows}
              onChange={this.handleInput.bind(this, 'rows')} />
          </Descriptions.Item>
          <Descriptions.Item label="列数">
            <Input
              value={this.state.columns}
              onChange={this.handleInput.bind(this, 'columns')} />
          </Descriptions.Item>
          <Descriptions.Item label="棋子尺寸">
            <Input
              value={this.state.size}
              onChange={this.handleInput.bind(this, 'size')} />
          </Descriptions.Item>
        </Descriptions>
        <Descriptions
          title="其它设置"
          layout="vertical"
          column={1}>
          <Descriptions.Item label="先手">
            <Select
              value={this.state.first}
              onChange={this.handleSelect.bind(this)}>
              <Select.Option value="white">白棋</Select.Option>
              <Select.Option value="black">黑棋</Select.Option>
            </Select>
          </Descriptions.Item>
          <Descriptions.Item label="连续几子胜">
            <Input
              value={this.state.winPremise}
              onChange={this.handleInput.bind(this, 'winPremise')} />
          </Descriptions.Item>
        </Descriptions>
        <div>
          <Button
            type="primary"
            onClick={this.handleOk.bind(this)}>确定更改</Button>
        </div>
        <div style={{ paddingTop: 20 }}>
          <Button onClick={this.handleReset.bind(this)}>恢复默认设置</Button>
        </div>
      </div>
    );
  }

  handleInput(type, e) {
    let reg = /^([1-9]\d*)?$/;
    let value = e.target.value;

    if (reg.test(value)) {
      this.setState({
        [type]: value
      });
    }
  }

  handleSelect(value) {
    this.setState({
      first: value
    });
  }

  handleOk() {
    if (this.props.gameStatus !== 'end') {
      message.info('请先结束当前游戏');
      return;
    }

    let settingData = {
      rows: parseInt(this.state.rows),
      columns: parseInt(this.state.columns),
      size: parseInt(this.state.size),
      defaultPlayer: this.state.first,
      continuousStep: parseInt(this.state.winPremise)
    };

    this.props.dispatch(gameSet(settingData));
  }

  handleReset() {
    this.props.dispatch(resetGame());
  }
}

const mapStateToProps = state => {
  return {
    rows: state.rows,
    columns: state.columns,
    size: state.size,
    first: state.defaultPlayer,
    winPremise: state.continuousStep,
    gameStatus: state.gameStatus
  };
};

export default connect(mapStateToProps)(GameSetting);