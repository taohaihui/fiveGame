
export const play_chess = 'play_chess';
export const start_game = 'start_game';
export const pause_game = 'pause_game';

// 落下一颗棋子
export function playChess(index) {
  return {
    type: play_chess,
    index
  };
}

// 开始游戏
export function startGame() {
  return {
    type: start_game,
    gameStatus: 'start'
  };
}

// 暂停游戏
export function pauseGame(status) {
  return {
    type: pause_game,
    gameStatus: status
  };
}