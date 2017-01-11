import {applyMiddleware, createStore} from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';

const loggerMiddleware = createLogger();
let createStoreWithMiddleware;

if (process.env.NODE_ENV === 'development') {
    createStoreWithMiddleware = applyMiddleware(thunkMiddleware, loggerMiddleware)(createStore);
} else {
    createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
}

export default function configureStore() {
    const store = createStoreWithMiddleware(reducers);

    return store;
}
