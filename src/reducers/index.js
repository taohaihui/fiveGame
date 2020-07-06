import { combineReducers } from 'redux';

import setting from './setting';
import status from './status';
import gameData from './gameData';

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
  gameData
});

export default games;