import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { hidden } from './HeaderReducers';
import { expandedPanelId, selectedPath } from './NavReducers';

export const rootReducer = history => combineReducers({
  expandedPanelId,
  selectedPath,
  hidden,
  router: connectRouter(history)
});
