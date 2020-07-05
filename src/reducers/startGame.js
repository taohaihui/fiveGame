export default function startGame(state, action) {
  return Object.assign({}, state, {
    gameStatus: action.gameStatus,
    gameData: [
      {
        data: new Array(state.rows * state.columns).fill(null),
        step: 0
      }
    ],
    winner: '',
    nowStep: 0,
    nextPlayer: state.defaultPlayer,
  });
}