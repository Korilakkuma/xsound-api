'use strict';

import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
// import { createBrowserHistory } from 'history';
import { createHashHistory } from 'history';
import { rootReducer } from './reducers';

const history    = createHashHistory();
const middleware = routerMiddleware(history);
const store      = createStore(rootReducer(history), compose(applyMiddleware(middleware)));

export {
    store,
    history
};
