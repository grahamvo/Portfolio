import {
    TOGGLE_CAROUSEL,
    CHANGE_ID,
    LOAD_PAGE,
} from './constants';

const initialState = {
    toggle: false,
    id: 0,
    loaded: false,
};

function CarouselReducer(
    state = initialState,
    action
) {
    switch (action.type) {
    case TOGGLE_CAROUSEL:
        return Object.assign({}, state, {
            toggle: action.toggle,
            id: action.id,
        });

    case CHANGE_ID:
        return Object.assign({}, state, {
            id: action.id,
        });

    case LOAD_PAGE:
        return Object.assign({}, state, {
            loaded: action.loaded,
        });

    default:
        return state;
    }
}

export default CarouselReducer;
