import moment from 'moment';

import { reset_status, update_status, change_status } from '../constant/actionType';
import { START, END, HISTORY_KEY } from '../constant/game';
import { setLocal, getLocal } from '../utils/storage';
import { refreshHistoryData } from '../actions/gameActions';

let startTime = '';
let endTime = '';

// 缓存游戏数据中间件
export default function cacheData(store) {
  return next => action => {
    if (action.type === reset_status && action.gameStatus === START) {
      startTime = moment().format('YYYY-MM-DD HH:mm:ss');
    }

    next(action);

    const bool = (action.type === update_status) || (action.type === change_status);
    if (bool && action.gameStatus === END) {
      endTime = moment().format('YYYY-MM-DD HH:mm:ss');
    }

    if (startTime && endTime) {
      const state = store.getState();

      if (state.gameData.length > 1) {
        let historyData = getLocal(HISTORY_KEY) || [];
        let obj = {
          state,
          startTime,
          endTime
        };

        delete obj.state.historyData;

        startTime = '';
        endTime = '';

        setLocal(HISTORY_KEY, [...historyData, obj]);
        store.dispatch(refreshHistoryData());
      }
    }
  };
}