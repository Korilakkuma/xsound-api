'use strict';

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import * as HeaderReducers from './HeaderReducers';
import * as NavReducers from './NavReducers';

export default history => combineReducers({
    ...HeaderReducers,
    ...NavReducers,
    router : connectRouter(history)
});
