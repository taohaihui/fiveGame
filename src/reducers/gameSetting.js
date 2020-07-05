export default function gameSetting(state, action) {
  return {
    ...state,
    ...action.settingData,
    gameData: [
      {
        data: new Array(action.settingData.rows * action.settingData.columns).fill(null),
        step: 0
      }
    ],
    winner: '',
    nowStep: 0,
    nextPlayer: action.settingData.defaultPlayer
  };
}