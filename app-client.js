import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, RouterContext, match, browserHistory } from 'react-router';
import { createHistory, createMemoryHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';
import createStore from './src/redux/createStore';
import baseHTML from './baseHTML';

// Routes
import routes from './routes';

const store = createStore();

if (typeof document !== 'undefined') {
    const history = syncHistoryWithStore(browserHistory, store);
    const app = document.getElementById('app');

    ReactDOM.render(
        (
        <Provider store={ store }>
            <Router history={ history }>
                { routes }
            </Router>
        </Provider>
        ),
        app
    );
}

export default (locals, callback) => {
    const history = createMemoryHistory();
    console.info(locals.path);
    const location = history.createLocation(locals.path);

    match({ routes, location }, (error, redirectLocation, renderProps) => {
        const html = ReactDOMServer.renderToString(
            <Provider store={ store }>
                <RouterContext { ...renderProps } />
            </Provider>
        );

        callback(null, baseHTML({ html }));
    });
};
