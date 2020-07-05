export const defaultSetting = {
  rows: 25, //棋盘行数
  columns: 25, //棋盘列数
  size: 20, //棋盘格子尺寸
  continuousStep: 5, //连续相同颜色的棋子赢
  defaultPlayer: 'white', //默认先手方
  nextPlayer: 'white',
  winner: '',
  nowStep: 0,
};

export default function resetGame(state, action) {
  return {
    ...state,
    ...defaultSetting,
    gameData: [
      {
        data: new Array(defaultSetting.rows * defaultSetting.columns).fill(null),
        step: 0
      }
    ]
  };
}