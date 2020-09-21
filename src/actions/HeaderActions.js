import { ActionTypes } from '../ActionTypes';

export function changeHidden(hidden) {
  return {
    type   : ActionTypes.HEADER_HIDDEN,
    payload: hidden
  };
}
