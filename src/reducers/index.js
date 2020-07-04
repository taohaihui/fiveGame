import * as Actions from '../actions/gameActions';

const initState = {
  rows: 25, //棋盘行数
  columns: 25, //棋盘列数
  size: 20, //棋盘格子尺寸
  nowStep: 0, //游戏节点
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
      let prevRecord = state.gameData[state.gameData.length - 1]
      let newRecord = [...prevRecord.data];

      newRecord[action.index] = state.nextPlayer;

      let newData = {
        data: newRecord,
        step: prevRecord.step + 1
      };
      const player = {
        white: 'black',
        black: 'white'
      };

      return Object.assign({}, state, {
        gameData: [
          ...state.gameData,
          newData
        ],
        nowStep: prevRecord.step + 1,
        nextPlayer: player[state.nextPlayer]
      });
    default:
      return state
  };
}