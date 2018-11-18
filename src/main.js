'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { store, history } from './store';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            {require('./routes').default}
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
);
