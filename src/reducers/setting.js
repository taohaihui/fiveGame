import { DEFAULT_SETTING } from '../constant/game';
import * as ActionConst from '../constant/actionType';

export default function setting(state = DEFAULT_SETTING, action) {
  switch (action.type) {
    case ActionConst.update_setting:
      return {
        ...state,
        ...action.settingData
      };
    case ActionConst.reset_setting:
      return {
        ...state,
        ...DEFAULT_SETTING
      };
    default:
      return state;
  }
}