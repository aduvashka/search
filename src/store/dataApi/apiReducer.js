import { FETCH_INITIAL, FETCH_LOADED, FETCH_ERROR, SET_INPUT_VALUE } from './actions'


const defaultState = {
    isLoaded: false,
    isError: null,
    isResult: null,
    isSearch: '',
};



export const dataFetchReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_INITIAL:
            return {
                ...state,
                isLoaded: true,
                isError: false,
            };
        case FETCH_LOADED:
            return {
                ...state,
                isLoaded: false,
                isError: false,
            };
        case FETCH_ERROR:
            return {
                ...state,
                isError: true,
                isLoaded: false,
            };
        case SET_INPUT_VALUE:
            return {
                ...state,
                inputValue: action.value
            }
        default:
            return state;
    }
};








