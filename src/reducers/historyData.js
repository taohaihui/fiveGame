import { getLocal } from '../utils/storage';
import { HISTORY_KEY } from '../constant/game';
import { refresh_history } from '../constant/actionType';

const data = getHistoryData();

export default function historyData(state = data, action) {
  switch (action.type) {
    case refresh_history:
      return getHistoryData();
    default:
      return state;
  }
}

function getHistoryData() {
  return getLocal(HISTORY_KEY) || [];
}