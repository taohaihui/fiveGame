import * as ActionConst from '../constant/actionType';
import * as GameConst from '../constant/game';

const initState = {
  nextPlayer: GameConst.DEFAULT_SETTING.defaultPlayer,
  gameStatus: GameConst.END, //start、pause、end
  winner: '',
  nowStep: 0
};

export default function status(state = initState, action) {
  switch (action.type) {
    case ActionConst.reset_status:
      return {
        ...state,
        nextPlayer: action.nextPlayer,
        gameStatus: action.gameStatus,
        winner: '',
        nowStep: 0
      };
    case ActionConst.update_status:
      return {
        ...state,
        nextPlayer: action.nextPlayer,
        gameStatus: action.gameStatus,
        winner: action.winner,
        nowStep: action.nowStep
      };
    case ActionConst.change_status:
      return {
        ...state,
        gameStatus: action.gameStatus
      };
    default:
      return state;
  }
}