'use strict';

import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
// import createHistory from 'history/createBrowserHistory';
import createHistory from 'history/createHashHistory';
import reducers from './reducers';

const history    = createHistory();
const middleware = routerMiddleware(history);
const store      = createStore(reducers(history), compose(applyMiddleware(middleware)));

export {
    store,
    history
};
