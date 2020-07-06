import { DEFAULT_SETTING } from '../constant/game';
import * as ActionConst from '../constant/actionType';

const initState = [
  {
    data: new Array(DEFAULT_SETTING.rows * DEFAULT_SETTING.columns).fill(null),
    step: 0
  }
];

export default function gameData(state = initState, action) {
  switch (action.type) {
    case ActionConst.reset_data:
      return [
        {
          data: new Array(action.rows * action.columns).fill(null),
          step: 0
        }
      ];
    case ActionConst.update_data:
      return updateData(state, action);
    default:
      return state;
  }
}

function updateData(state, action) {
  let prevData = state[state.length - 1];
  let newData = [...prevData.data];
  let nextStep = prevData.step + 1;

  newData[action.index] = action.player;

  return [
    ...state,
    {
      data: newData,
      step: nextStep
    }
  ];
}