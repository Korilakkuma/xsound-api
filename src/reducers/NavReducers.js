import { ActionTypes } from '../ActionTypes';

export function expandedPanelId(state = '', action) {
  switch (action.type) {
    case ActionTypes.NAV_EXPAND_PANEL:
      return action.payload;
    default:
      return state;
  }
}

export function selectedPath(state = '/', action) {
  switch (action.type) {
    case ActionTypes.NAV_SET_SELECTED_PATH:
      return action.payload;
    default:
      return state;
  }
}
