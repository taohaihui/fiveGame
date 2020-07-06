
import * as ActionConst from '../constant/actionType';
import { END, WHITE, BLACK } from '../constant/game';
import getWinner from '../utils/computeWinner';

export function resetStatus(status) {
  return (dispatch, getState) => {
    const action = {
      type: ActionConst.reset_status,
      dec: '重置游戏状态',
      gameStatus: status,
      nextPlayer: getState().setting.defaultPlayer
    };

    dispatch(action);
    dispatch(resetData());
  };
}

export function resetData() {
  return (dispatch, getState) => {
    const { rows, columns } = getState().setting;

    const action = {
      type: ActionConst.reset_data,
      dec: '清空游戏数据',
      rows,
      columns
    };

    dispatch(action);
  };
}

export function updateData(index) {
  return (dispatch, getState) => {
    const { nextPlayer } = getState().status;

    const action = {
      type: ActionConst.update_data,
      dec: '更新游戏数据',
      index,
      player: nextPlayer
    };

    dispatch(action);
    dispatch(updateStatus(index));
  };
}

export function updateStatus(index) {
  return (dispatch, getState) => {
    const state = getState();
    const { nextPlayer } = state.status;
    const newData = state.gameData[state.gameData.length - 1];
    const player = {
      [WHITE]: BLACK,
      [BLACK]: WHITE
    };

    const winner = getWinner(newData.data, index, state);

    const action = {
      type: ActionConst.update_status,
      dec: '更新游戏状态',
      nowStep: newData.step,
      nextPlayer: player[nextPlayer],
      winner,
      gameStatus: winner ? END : state.status.gameStatus
    };

    dispatch(action);
  };
}

export function updateSetting(settingData) {
  return (dispatch, getState) => {
    const action = {
      type: ActionConst.update_setting,
      dec: '更改游戏设置',
      settingData
    };

    dispatch(action);
    dispatch(resetStatus(END));
  };
}

export function resetSetting() {
  return (dispatch, getState) => {
    const action = {
      type: ActionConst.reset_setting,
      dec: '恢复游戏默认设置'
    };

    dispatch(action);
    dispatch(resetStatus(END));
  };
}

export function pauseOrContinueGame(status) {
  return {
    type: ActionConst.change_status,
    dec: '暂停或继续游戏',
    gameStatus: status
  };
}

export function refreshHistoryData() {
  return {
    type: ActionConst.refresh_history,
    dec: '刷新历史数据'
  };
}