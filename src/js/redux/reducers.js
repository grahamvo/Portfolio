import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import CarouselReducer from './work/reducer';

export default combineReducers(
    Object.assign(
        {},
        {
            routing: routerReducer,
            carousel: CarouselReducer,
        }
    )
);
