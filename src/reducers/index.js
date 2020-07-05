import * as Actions from '../actions/gameActions';
import update from './update';
import startGame from './startGame';

const initState = {
  rows: 25, //棋盘行数
  columns: 25, //棋盘列数
  size: 20, //棋盘格子尺寸
  gameStatus: 'end', //start、pause、end
  winner: '',
  continuousStep: 5, //连续相同颜色的棋子赢
  nowStep: 0, //游戏节点
  defaultPlayer: 'white',
  nextPlayer: 'white',
  gameData: [] //游戏落子数据
};

initState.gameData.push({
  data: new Array(initState.rows * initState.columns).fill(null),
  step: 0
});

export default function playGame(state = initState, action) {
  switch (action.type) {
    case Actions.play_chess:
      return update(state, action);
    case Actions.start_game:
      return startGame(state, action);
    case Actions.pause_game:
      return Object.assign({}, state, { gameStatus: action.gameStatus });
    default:
      return state
  };
}