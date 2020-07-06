import { combineReducers } from 'redux';

import setting from './setting';
import status from './status';
import gameData from './gameData';
import historyData from './historyData';

// export default function games(state = {}, action) {
//   return {
//     setting: setting(state.setting, action),
//     status: status(state.status, action),
//     gameData: gameData(state.gameData, action)
//   };
// }

const games = combineReducers({
  setting,
  status,
  gameData,
  historyData
});

export default games;