import React, { Component } from 'react';
import './styles.scss';
import { connect } from 'react-redux';
import { Descriptions, Input, Select, Button, Modal } from 'antd';

import { END, WHITE, BLACK } from '../../constant/game';
import { updateSetting, resetSetting } from '../../actions/gameActions';

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
              <Select.Option value={WHITE}>白棋</Select.Option>
              <Select.Option value={BLACK}>黑棋</Select.Option>
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
    if (this.props.gameStatus !== END) {
      this.showInfo();
      return;
    }

    let settingData = {
      rows: parseInt(this.state.rows, 10),
      columns: parseInt(this.state.columns, 10),
      size: parseInt(this.state.size, 10),
      defaultPlayer: this.state.first,
      continuousStep: parseInt(this.state.winPremise, 10)
    };

    this.props.dispatch(updateSetting(settingData));
  }

  handleReset() {
    if (this.props.gameStatus !== END) {
      this.showInfo();
      return;
    }

    this.props.dispatch(resetSetting());
  }

  showInfo() {
    Modal.info({ title: '请先结束当前游戏', okText: '好的' });
  }
}

const mapStateToProps = state => {
  const { rows, columns, size, defaultPlayer, continuousStep } = state.setting;
  const { gameStatus } = state.status;

  return {
    rows,
    columns,
    size,
    first: defaultPlayer,
    winPremise: continuousStep,
    gameStatus
  };
};

export default connect(mapStateToProps)(GameSetting);