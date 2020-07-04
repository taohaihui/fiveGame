
export const play_chess = 'play_chess';

// 落下一颗棋子
export function playChess(index) {
  return {
    type: play_chess,
    index
  };
}