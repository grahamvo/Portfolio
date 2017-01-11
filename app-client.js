import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import createStore from './src/js/redux/createStore';

// Routes
import Routes from './src/js/Routes';

const store = createStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    (
    <Provider store={ store }>
        <Router history={ history }>
            { Routes }
        </Router>
    </Provider>
    ),
    document.getElementById('root')
);
