export default function update(state, action) {
  let prevRecord = state.gameData[state.gameData.length - 1]
  let newData = [...prevRecord.data];

  newData[action.index] = state.nextPlayer;

  let newRecord = {
    data: newData,
    step: prevRecord.step + 1
  };
  const player = {
    white: 'black',
    black: 'white'
  };
  let win = getWinner(newData, action.index, state);

  return {
    ...state,
    gameData: [
      ...state.gameData,
      newRecord
    ],
    nowStep: prevRecord.step + 1,
    nextPlayer: player[state.nextPlayer],
    winner: win,
    gameStatus: win ? 'end' : state.gameStatus
  };
}

function getWinner(data = [], index, state) {
  const { columns } = state;
  let position = {
    x: index % columns,
    y: Math.floor(index / columns)
  };
  let player = data[index];
  let winner = '';

  winner = winner || getXWin(data, player, position, state);
  winner = winner || getYWin(data, player, position, state);
  winner = winner || getXYWin(data, player, position, state);
  winner = winner || getYXWin(data, player, position, state);

  return winner;
}

// 计算x轴胜负
function getXWin(data, player, { x, y }, { columns, continuousStep }) {
  let len = 1;

  for (let i = x + 1; i <= columns; i++) {
    let ind = y * columns + i;
    if (data[ind] === player) {
      len++;
    } else {
      break;
    }
  }

  for (let i = x - 1; i >= 0; i--) {
    let ind = y * columns + i;
    if (data[ind] === player) {
      len++;
    } else {
      break;
    }
  }

  if (len >= continuousStep) {
    return player;
  }

  return '';
}

// 计算y轴胜负
function getYWin(data, player, { x, y }, { rows, continuousStep }) {
  let len = 1;

  for (let i = y + 1; i <= rows; i++) {
    let ind = i * rows + x;
    if (data[ind] === player) {
      len++;
    } else {
      break;
    }
  }

  for (let i = y - 1; i >= 0; i--) {
    let ind = i * rows + x;
    if (data[ind] === player) {
      len++;
    } else {
      break;
    }
  }

  if (len >= continuousStep) {
    return player;
  }

  return '';
}

// 计算xy斜轴胜负
function getXYWin(data, player, { x, y }, { rows, columns, continuousStep }) {
  let len = 1;

  for (let i = x + 1; i <= columns; i++) {
    let x1 = i;
    let y1 = y - (i - x);

    if (y1 < 0) {
      break;
    }

    let ind = y1 * rows + x1;
    if (data[ind] === player) {
      len++;
    } else {
      break;
    }
  }

  for (let i = x - 1; i >= 0; i--) {
    let x1 = i;
    let y1 = y + (x - i);

    if (y1 > rows) {
      break;
    }

    let ind = y1 * rows + x1;
    if (data[ind] === player) {
      len++;
    } else {
      break;
    }
  }

  if (len >= continuousStep) {
    return player;
  }

  return '';
}

// 计算yx斜轴胜负
function getYXWin(data, player, { x, y }, { rows, columns, continuousStep }) {
  let len = 1;

  for (let i = x + 1; i <= columns; i++) {
    let x1 = i;
    let y1 = y + (i - x);

    if (y1 > rows) {
      break;
    }

    let ind = y1 * rows + x1;
    if (data[ind] === player) {
      len++;
    } else {
      break;
    }
  }

  for (let i = x - 1; i >= 0; i--) {
    let x1 = i;
    let y1 = y - (x - i);

    if (y1 < 0) {
      break;
    }

    let ind = y1 * rows + x1;
    if (data[ind] === player) {
      len++;
    } else {
      break;
    }
  }

  if (len >= continuousStep) {
    return player;
  }

  return '';
}

