
export const play_chess = 'play_chess';
export const start_game = 'start_game';
export const pause_game = 'pause_game';
export const game_setting = 'game_setting';
export const reset_game = 'reset_game';

// 落下一颗棋子
export function playChess(index) {
  return {
    type: play_chess,
    dec: '落子更新游戏数据',
    index
  };
}

// 开始游戏
export function startGame() {
  return {
    type: start_game,
    dec: '开始游戏',
    gameStatus: 'start'
  };
}

// 暂停游戏
export function pauseGame(status) {
  return {
    type: pause_game,
    dec: '暂停或继续游戏',
    gameStatus: status
  };
}

// 游戏设置
export function gameSet(settingData) {
  return {
    type: game_setting,
    dec: '更改游戏设置',
    settingData
  };
}

export function resetGame() {
  return {
    type: reset_game,
    dec: '恢复默认设置'
  };
}