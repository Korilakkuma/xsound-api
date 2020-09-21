import { ActionTypes } from '../ActionTypes';

export function expandPanel(id) {
  return {
    type   : ActionTypes.NAV_EXPAND_PANEL,
    payload: id
  };
}

export function setSelectedPath(path) {
  return {
    type   : ActionTypes.NAV_SET_SELECTED_PATH,
    payload: path
  };
}
