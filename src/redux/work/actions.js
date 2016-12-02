import {
    TOGGLE_CAROUSEL,
    CHANGE_ID,
    LOAD_PAGE,
} from './constants';

const actions = {
    toggleCarousel: (toggle, id) => {
        return (dispatch) => {
            dispatch({
                type: TOGGLE_CAROUSEL,
                toggle,
                id,
            });
        };
    },

    changeId: (id) => {
        return (dispatch) => {
            dispatch({
                type: CHANGE_ID,
                id,
            });
        };
    },

    loadPage: () => {
        return (dispatch) => {
            dispatch({
                type: LOAD_PAGE,
                loaded: true,
            });
        };
    },
};

export default actions;
